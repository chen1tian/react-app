// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/abp/application-configuration */
export async function getAbpApplicationConfiguration(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.getAbpApplicationConfigurationParams,
  options?: { [key: string]: any },
) {
  return request<API.Response<cruisetime.ApplicationConfigurationDto>>(
    '/api/abp/application-configuration',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
