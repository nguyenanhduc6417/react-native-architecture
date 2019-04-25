import actionTypes from '../actions/actionTypes'
import UsuarioModel from '../../models/UsuarioModel'

const INITIAL_STATE = UsuarioModel()

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.usuario.setUsuario:
      return action.value
    default: 
      return state
  }
}