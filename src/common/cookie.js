import Cookies from "js-cookie";

const key = "Admin-Token";

export function get() {
  return Cookies.get(key)
}

export function set(params) {
  return Cookies.set(key, params)
}

export function remove() {
  return Cookies.remove(key)
}