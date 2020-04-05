import { request } from "../request"

// 登录
export function login(data) {
  return request({
    url: 'index/index/login',
    method: 'post',
    data
  })
}
// 登出
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
export function perfectMsg(data) {
  return request({
    url: '/index/index/perfectMsg',
    method: 'post',
    data
  })
}
// 注册
export function register(data) {
  return request({
    url: '/index/index/register',
    method: 'post',
    data
  })
}
// 获取验证码
export function getCode() {
  return request({
    url: '/index/index/getCode',
    method: 'post'
  })
}