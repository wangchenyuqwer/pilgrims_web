import { GET_USER_INFO, UPDATE_USERINFO, LOGIN, LOG_OUT } from "../../mutation_type"
import { set, remove } from "common/cookie"
import { login, logout } from "network/login"

export default {
  [GET_USER_INFO]: () => {

  },
  [LOGIN]: ({ commit }, params) => {
    console.log(params)
    return new Promise((resolve, reject) => {
      login(params).then(res => {
        commit(UPDATE_USERINFO, res.data)
        set(res.token)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  [LOG_OUT]: () => {
    return new Promise((resolve, reject) => {
      logout().then(msg => {
        remove()
        resolve(msg)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
