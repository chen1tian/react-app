// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/abp/application-localization */
export async function getAbpApplicationLocalization(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: cruisetime.getAbpApplicationLocalizationParams,
  options?: { [key: string]: any },
) {
  return request<API.Response<cruisetime.ApplicationLocalizationDto>>(
    '/api/abp/application-localization',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
