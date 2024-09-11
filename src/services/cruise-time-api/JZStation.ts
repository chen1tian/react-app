// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/app/j-zStation */
export async function getAppJZStation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.getAppJZStationParams,
  options?: { [key: string]: any },
) {
  return request<API.Response<cruisetime.PagedResultDto<cruisetime.JZStationDto>>>(
    '/api/app/j-zStation',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /api/app/j-zStation */
export async function postAppJZStation(
  body: cruisetime.JZStationDto,
  options?: { [key: string]: any },
) {
  return request<API.Response<cruisetime.JZStationDto>>('/api/app/j-zStation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/app/j-zStation/${param0} */
export async function getAppJZStationId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.getAppJZStationIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response<cruisetime.JZStationDto>>(`/api/app/j-zStation/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/app/j-zStation/${param0} */
export async function putAppJZStationId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.putAppJZStationIdParams,
  body: cruisetime.JZStationDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response<cruisetime.JZStationDto>>(`/api/app/j-zStation/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/app/j-zStation/${param0} */
export async function deleteAppJZStationId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.deleteAppJZStationIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/app/j-zStation/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 保存基准站点, 如果id有值则更新，否则新增 POST /api/app/j-zStation/${param0}/save */
export async function postAppJZStationIdSave(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.postAppJZStationIdSaveParams,
  body: cruisetime.JZStationDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response<cruisetime.JZStationDto>>(`/api/app/j-zStation/${param0}/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
