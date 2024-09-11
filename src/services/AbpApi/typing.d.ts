declare namespace API {   

    // Abp框架通用的分页参数
    type AbpParams = {
        SkipCount: number;
        MaxResultCount: number;
    }

    // 通用的分页请求
    type PagedRequest = {
        // query
        /** 当前的页码 */
        SkipCount?: number;
        /** 页面的容量 */
        MaxResultCount?: number;
    }

    // Abp请求的分页结果
    type PagedResultDto<T> = {
        totalCount: number;
        items: T[];
    }

    // Abp请求的响应
    type Response<T> = {
        success: boolean;
        errorCode: number;
        errorMessage?: string;
        data: T;
    }

    // Abp请求的分页响应
    type PagedResponse<T> = {
        success: boolean;
        errorCode: number;
        errorMessage?: string;
        data: AbpPagedResult<T>;
    }

    // 列表数据
    type ListData = {
        success: boolean,
        errorCode?: number,
        errorMessage?: string,
        total: number,
        data?: any
    }
}