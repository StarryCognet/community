import { get, post } from '@/utils/request'

// 图形验证码
export const authCode = () => get('/api/auth/authCode')

// 登录
export const checkloginByCode = (data) => post('/api/administrator/checkloginByCode', data)

export const list = (params) => get('/api/administrator/list', params)

// 删除
export const del = (params) => get('/api/administrator/delete', params)

// 角色列表
export const administratorrolelist = (params) => get('api/administratorrole/list', params)
export const administratorroledelete = (params) => get('api/administratorrole/delete', params)

// 房间管理
export const houseslist = (params) => get('api/houses/list', params)
export const housesdelete = (params) => get('api/houses/delete', params)
