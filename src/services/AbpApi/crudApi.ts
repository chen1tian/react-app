import { GetList, Get, Post, Put, Delete } from './commonApi';
import { ToPagedParams } from '@/services/common/commonApi';

class CrudApi {
    /** 获取项目列表 */
    public static async GetList<T>(apiUrl: string, options?: { [key: string]: any }) {
        const abpParams = ToPagedParams(options);
        const res = await GetList<T>(apiUrl, abpParams);
        return res;
    }

    /** 获取项目详情 **/
    public static async Get<T>(apiUrl: string, id: any) {
        const res = await Get<T>(apiUrl, id);
        return res;
    }

    /** 新增项目 **/
    public static async Create<T>(apiUrl: string, params: { [key: string]: any }) {
        const res = await Post<T>(apiUrl, params);
        return res;
    }

    /** 修改项目 **/
    public static async Update<T>(apiUrl: string, id: any, params: { [key: string]: any }) {
        const res = await Put<T>(apiUrl, id, params);
        return res;
    }

    /** 删除项目 **/
    public static async Del<T>(apiUrl: string, id: any) {
        const res = await Delete<T>(apiUrl, id);
        return res;
    }
}

export default CrudApi;

