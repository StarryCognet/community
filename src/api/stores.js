import { get } from '@/utils/request'



export const list = (params) => get('api/stores/list', params)

// 删除
export const del = (params) => get('api/stores/delete', params)
