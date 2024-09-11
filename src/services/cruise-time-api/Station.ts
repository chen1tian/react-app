// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/app/station */
export async function getAppStation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.getAppStationParams,
  options?: { [key: string]: any },
) {
  return request<API.Response<cruisetime.PagedResultDto<cruisetime.StationDto>>>(
    '/api/app/station',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /api/app/station */
export async function postAppStation(
  body: cruisetime.StationDto,
  options?: { [key: string]: any },
) {
  return request<API.Response<cruisetime.StationDto>>('/api/app/station', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/app/station/${param0} */
export async function getAppStationId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.getAppStationIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response<cruisetime.StationDto>>(`/api/app/station/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/app/station/${param0} */
export async function putAppStationId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.putAppStationIdParams,
  body: cruisetime.StationDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response<cruisetime.StationDto>>(`/api/app/station/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/app/station/${param0} */
export async function deleteAppStationId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.deleteAppStationIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/app/station/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Csv上传 POST /api/app/station/csv-upload */
export async function postAppStationCsvUpload(options?: { [key: string]: any }) {
  return request<any>('/api/app/station/csv-upload', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 导出Csv POST /api/app/station/export-csv */
export async function postAppStationExportCsv(options?: { [key: string]: any }) {
  return request<any>('/api/app/station/export-csv', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 按照给定的id列表保存排序 POST /api/app/station/save-sort */
export async function postAppStationSaveSort(body: number[], options?: { [key: string]: any }) {
  return request<any>('/api/app/station/save-sort', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
