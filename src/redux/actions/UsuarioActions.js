import actionTypes from './actionTypes'

const UsuarioActions = {
  setUsuario: obj => setAction(actionTypes.usuario.setUsuario, obj)
}

const setAction = (type, value) => ({ type, value })

export default UsuarioActions
