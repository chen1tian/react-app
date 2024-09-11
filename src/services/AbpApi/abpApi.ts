import { request } from '@umijs/max';

export function ToPagedParams(options?: { [key: string]: any }): API.AbpParams {
    const current = options?.current || 1;
    const skip = (current - 1) * options?.pageSize;
    const params = {
        SkipCount: skip,
        MaxResultCount: options?.pageSize,
        // 除了分页参数，其他的参数都放到这里
        ...options,
    };

    return params;
}


export function ToListData<T>(res: API.PagedResponse<API.PagedResultDto<T>>): API.ListData {
    const result: API.ListData = {
        success: res.success,
        errorCode: res.errorCode,
        errorMessage: res.errorMessage,
        total: res.data.totalCount,
        data: res.data.items,
    }

    return result;
}

// 获取列表 对应后端: get /api/app/entity
export async function GetList<T>(apiUrl: string, options?: { [key: string]: any }) {    
    const res = await request<API.PagedResponse<API.PagedResultDto<T>>>(apiUrl, {
        method: 'GET',
        params: {
            ...options,
        },
        ...(options || {}),
    });

    const result = ToListData(res);
    return result;
}

// 获取详情 对应后端: get /api/app/entity/{id}
export async function Get<T>(apiUrl: string, id: any) {
    const url = apiUrl + '/' + id;
    const res = await request<API.Response<T>>(url, {
        method: 'GET',
    });
    return res;
}

/** 创建 POST方法 **/
export async function Post<T>(apiUrl: string, options?: { [key: string]: any }) {
    const res = await request<API.Response<T>>(apiUrl, {
        method: 'POST',
        data: {
            ...options,
        }
    });

    return res;
}

/** 更新方法 **/
export async function Put<T>(apiUrl: string, id: any, options?: { [key: string]: any }) {
    const url = apiUrl + '/' + id;
    const res = await request<API.Response<T>>(url, {
        method: 'PUT',
        data: {
            ...options,
        }
    });

    return res;
}

/** 删除方法 **/
export async function Delete<T>(apiUrl: string, id: any) {
    const url = apiUrl + '/' + id;
    const res = await request<API.Response<T>>(url, {
        method: 'DELETE',
        data: {}
    });

    return res;
} 