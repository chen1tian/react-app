import { useState, useCallback } from 'react'
import dayjs from 'dayjs'
import { postAppLoginRefresh } from '@/services/cruise-time-api/Login'

export default () => {
    const [identityToken, setIdentityToken] = useState<cruisetime.JwtTokenResult>();
    const [isStartRefresher, setIsStartRefresher] = useState<boolean>(false);

    // 移除令牌
    const removeToken = useCallback(() => {
        // 清理token状态
        setIdentityToken(undefined);

        // 将token保存到localStorage                
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("expires_in");
        localStorage.removeItem("token_type");
        localStorage.removeItem("expiresAt");
    }, []);

    // 设置令牌
    const setToken = useCallback((token: cruisetime.JwtTokenResult) => {
        setIdentityToken(token);

        // 将token保存到localStorage                
        localStorage.setItem("access_token", token.access_token!);
        localStorage.setItem("refresh_token", token.refresh_token!);
        localStorage.setItem("expires_in", token.expires_in!.toString());
        localStorage.setItem("token_type", "bearer");

        // 计算过期时间 = 当前时间 + expires_in
        const expiresAt = dayjs().add(token.expires_in!, 'second');
        // 转为时间戳        
        console.log("expiresAt", expiresAt.unix().toString())
        localStorage.setItem("expiresAt", expiresAt.unix().toString());
    }, []);

    // 刷新token请求
    const requestRefreshToken = () => {
        postAppLoginRefresh({ refreshToken: localStorage.getItem("refresh_token")!, accessToken: localStorage.getItem("access_token")! }).then((res) => {
            // 如果数据为空，那么token刷新失败
            if (res.data === null) {
                removeToken()
                return
            }
            setToken(res.data);
        });
    }

    const refreshTokenWithTimeout = (timeoutSecond: number) => {
        setTimeout(() => {
            // 刷新token
            requestRefreshToken();
            // 重新设置定时器
            refreshTokenWithTimeout(timeoutSecond);
            console.log("刷新已设置：", timeoutSecond)
        }, timeoutSecond * 1000);
    }


    // 定时刷新令牌
    const startRefreshToken = useCallback(() => {
        // 如果已经开始刷新，那么不再重复刷新
        if (isStartRefresher) {
            return;
        }

        const expiresAt = localStorage.getItem("expiresAt");
        if (!expiresAt) return;

        const expiresAtTime = parseInt(expiresAt);
        let timeoutSecond = expiresAtTime - dayjs().unix() - 60 * 5

        // 如果过期时间小于等于0，那么从配置中获取过期时间
        if (timeoutSecond <= 0) {
            const expires_in = localStorage.getItem("expires_in")
            if (!expires_in) return
            const expires_in_second = parseInt(expires_in)
            timeoutSecond = expires_in_second - 60 * 5
        }

        refreshTokenWithTimeout(timeoutSecond);
        setIsStartRefresher(true);
        console.log("刷新已设置：", timeoutSecond)
    }, [isStartRefresher]);

    return {
        identityToken,
        setToken,
        startRefreshToken,
        removeToken
    }
}