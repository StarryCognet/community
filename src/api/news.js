import { get, post } from '@/utils/request'

// 获取新闻列表
export const list = (params) => get('/api/news/list', params)

// 获取新闻详情
export const detail = (params) => get('/api/news/detail', params)

// 添加新闻
export const add = (data) => post('/api/news/add', data)

// 修改新闻
export const update = (data) => post('/api/news/update', data)

// 删除新闻
export const del = (params) => get('/api/news/delete', params)