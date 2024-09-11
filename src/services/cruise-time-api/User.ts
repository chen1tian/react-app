// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/app/user */
export async function getAppUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.getAppUserParams,
  options?: { [key: string]: any },
) {
  return request<API.Response<cruisetime.PagedResultDto<cruisetime.UserDto>>>('/api/app/user', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建用户 POST /api/app/user */
export async function postAppUser(
  body: cruisetime.CreateUserDto,
  options?: { [key: string]: any },
) {
  return request<API.Response<cruisetime.UserDto>>('/api/app/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/app/user/${param0} */
export async function getAppUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.getAppUserIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response<cruisetime.UserDto>>(`/api/app/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新用户 PUT /api/app/user/${param0} */
export async function putAppUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.putAppUserIdParams,
  body: cruisetime.UpdateUserDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response<cruisetime.UserDto>>(`/api/app/user/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/app/user/${param0} */
export async function deleteAppUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.deleteAppUserIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/app/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改密码 POST /api/app/user/change-password */
export async function postAppUserChangePassword(
  body: cruisetime.ChangePasswordInput,
  options?: { [key: string]: any },
) {
  return request<API.Response<boolean>>('/api/app/user/change-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改自己的密码 POST /api/app/user/change-self-password */
export async function postAppUserChangeSelfPassword(
  body: cruisetime.ChangeSelfPasswordInput,
  options?: { [key: string]: any },
) {
  return request<API.Response<boolean>>('/api/app/user/change-self-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 验证手机号码 POST /api/app/user/valid-phone-number */
export async function postAppUserValidPhoneNumber(
  body: cruisetime.ValidPhoneNumberInput,
  options?: { [key: string]: any },
) {
  return request<API.Response<boolean>>('/api/app/user/valid-phone-number', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
