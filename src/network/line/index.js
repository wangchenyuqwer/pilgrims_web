import { request } from "../request";

export function signUp(data) {
  return request({
    url: '/index/index/signUp',
    method: 'post',
    data
  })
}

export function getLineList(data) {
  return request({
    url: '/index/index/lineList',
    method: 'post',
    data
  })
}

export function lineDetail(data) {
  return request({
    url: '/index/index/lineDetail',
    method: 'post',
    data
  })
}