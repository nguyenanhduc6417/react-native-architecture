import { BASE_URL } from './constants'

const login = {
  auth: 'https://sso.homolog.meuhost.org.br/'
}

const minhaRota = {
  list: BASE_URL + '/minha-rota',
  byId: BASE_URL + '/minha-rota/id/'
}

const endpoints = {
  login,
  minhaRota
}

export default endpoints