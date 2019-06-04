import axios from 'axios'
import endpoints from '../helpers/http/endpoints'
import headers from '../helpers/http/headers'

import CacheHelper, { CacheKeys } from '../helpers/cache/CacheHelper'

import ResponseModel from '../models/ResponseModel'
import UsuarioModel from '../models/UsuarioModel'

const login = (login, senha) => new Promise(resolve => {
  const headerAuth = {
    "Content-Type": "x-www-form-urlencoded"
  }

  const payload = new URLSearchParams()
  payload.append('grant_type', 'password')
  payload.append('username', login)
  payload.append('password', senha)
  payload.append('client_id', 'seu_client')
  payload.append('client_secret', 'secret')

  axios.post(endpoints.login.auth, payload, headerAuth)
    .then(res => {
      const response = ResponseModel()

      response.status = 200
      response.message = 'Sucesso'
      response.data = res.data

      resolve(response)
    })
    .catch(err => {
      const response = ResponseModel()
      response.status = 500
      response.message = err.response.data.error_description
      response.data = err
      resolve(response)
    })
})

const LoginService = {
  login
}

export default LoginService
