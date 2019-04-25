import { BASE_URL } from './constants'

const login = {
  auth: 'https://sso.homolog.aasp.org.br/connect/token'
}

const intimacoes = {
  list: BASE_URL + '/intimacoes',
  byId: BASE_URL + '/intimacoes/id/'
}

const endpoints = {
  login,
  intimacoes
}

export default endpoints