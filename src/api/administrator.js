import { get, post } from '@/utils/request'

// 图形验证码
export const authCode = () => get('/api/auth/authCode')

// 登录
export const checkloginByCode = (data) => post('/api/administrator/checkloginByCode', data)

export const list = (params) => get('/api/administrator/list', params)
