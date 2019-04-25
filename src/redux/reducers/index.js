import { combineReducers } from 'redux'

import LoadingReducer from './LoadingReducer'
import UsuarioReducer from './UsuarioReducer'

export default combineReducers({
  LoadingReducer,
  UsuarioReducer
})
