// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /api/app/login/refresh */
export async function postAppLoginRefresh(
  body: cruisetime.RefreshTokenInput,
  options?: { [key: string]: any },
) {
  return request<API.Response<cruisetime.JwtTokenResult>>('/api/app/login/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前用户信息 GET /api/currentUser */
export async function getCurrentUser(options?: { [key: string]: any }) {
  return request<API.Response<cruisetime.LoginDto>>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录账户 POST /api/login/account */
export async function postLoginAccount(
  body: cruisetime.LoginInput,
  options?: { [key: string]: any },
) {
  return request<API.Response<cruisetime.LoginResult>>('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登出 POST /api/login/outLogin */
export async function postLoginOutLogin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.postLoginOutLoginParams,
  options?: { [key: string]: any },
) {
  return request<API.Response<boolean>>('/api/login/outLogin', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
