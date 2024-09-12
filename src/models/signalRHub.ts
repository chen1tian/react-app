import * as signalR from '@microsoft/signalr';
import { useState, useCallback } from 'react'

export default () => {
    // hub连接实例
    const [hubConnection, setHubConnection] = useState<signalR.HubConnection>();
    // 连接成功状态
    const [connectionSuccess, setConnectionSuccess] = useState<boolean>(false);
    // 连接关闭状态
    const [connectionClose, setConnectionClose] = useState<boolean>(false);
    
    // 设置成功的方法
    const setSuccess = () => {
        setConnectionSuccess(true);
        setConnectionClose(false);
    }

    // 设置关闭的方法
    const setClose = () => {
        setConnectionSuccess(false);
        setConnectionClose(true);
    }

    // 初始化连接
    const initConnection = useCallback((hubUrl: string) => {

        // 如果连接存在则退出
        if (hubConnection) return;

        const connection = new signalR.HubConnectionBuilder()
            .withUrl(hubUrl, { accessTokenFactory: () => localStorage.getItem("access_token") ?? "" })
            .withAutomaticReconnect([0, 2000, 5000, 5000, 5000, 7000, 7000, 10000, 20000])
            .build();

        // 开始连接
        connection.start()
            .then(() => {
                console.log("SignalR Connected.");
                // 设置连接已启动
                setSuccess();
            })
            .catch((err) => {
                console.log("SignalR Connection Error: ", err);
            });

        // 正在重连事件
        connection.onreconnecting(error => {
            console.log('SignalR Reconnecting: ', error);
            setConnectionSuccess(false);
        });

        // 重连成功事件
        connection.onreconnected(connectionId => {
            console.log('SignalR Reconnected. Connection ID: ', connectionId);
            // 设置连接已启动
            setSuccess();
        });

        // 连接失败
        connection.onclose(error => {
            console.log('SignalR Close: ', error);

            // 设置为连接失败
            setClose();
        });

        setHubConnection(connection);
    }, [connectionSuccess]);

    // 连接的方法
    const connect = useCallback(() => {
        if (hubConnection) {
            // 已连接则返回
            if (hubConnection.state === signalR.HubConnectionState.Connected) {
                return;
            }

            hubConnection?.start()
                .then(() => {
                    console.log("SignalR Connected.");
                    // 设置连接已启动
                    setSuccess();
                })
                .catch((err) => {
                    console.log("SignalR Connection Error: ", err);
                });
        }
    }, [hubConnection]);

    // 停止的方法
    const stopConnection = useCallback(() => {
        if (hubConnection) {
            hubConnection.stop();
        }
    }, [hubConnection]);

    return {
        hubConnection,
        initConnection,
        connect,
        stopConnection,        
        connectionSuccess,
        connectionClose
    }
}


