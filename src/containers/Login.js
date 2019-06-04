import React, { useState } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'

import {decode, encode} from 'base-64'

import {
  ContainerLinear,
  ContainerScroll,
  Text,
  EditText,
  Button,
  Logo
} from '../components'

import { withLoading } from '../hocs'

import UsuarioActions from '../redux/actions/UsuarioActions'
import LoadingActions from '../redux/actions/LoadingActions'
import LoginService from '../services/LoginService'
import UsuarioModel from '../models/UsuarioModel';

const Login = props => {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  const doLogin = async () => {
    if (login.trim() == '' || senha.trim() == '') {
      Alert.alert('Preencha todos os campos')
      return
    }

    props.actions.loading.setStatus(true)

    const ret = await LoginService.login(login, senha)

    switch (ret.status) {
      case 200:
        props.actions.loading.setStatus(false)
        decodeToken(ret.data.access_token)
        break
      case 500: 
        props.actions.loading.setStatus(false)  
        Alert.alert(ret.message)
        break
    }
  }

  const decodeToken = token => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    const res = JSON.parse(decode(base64));

    const model = UsuarioModel()
    const user = Object.assign(model, res)

    props.actions.usuario.setUsuario(user)
    props.navigation.navigate('Profile')
  }

  return (
    <ContainerScroll>
      <ContainerLinear center weight={0.8}>
        <Logo />
      </ContainerLinear>
      
      <ContainerLinear center horizontal weight={1}>

        <EditText 
          holder='Login' 
          value={login} 
          onChange={setLogin} 
        />

        <EditText 
          password
          holder='Senha' 
          value={senha} 
          onChange={setSenha} 
        />

        <Button 
          margin 
          label='ENTRAR' 
          onClick={doLogin} 
        />

      </ContainerLinear>
    </ContainerScroll>
  )
}

const styles = {
  textTitle: {
    fontSize: 50
  }
}

const mapStateToProps = state => ({ })

const mapDispatchToProps = dispatch => ({
  actions: {
    loading: {
      setStatus: value => dispatch( LoadingActions.setStatus(value) ),
      setMessage: value => dispatch( LoadingActions.setMessage(value) ),
    },
    usuario: {
      setUsuario: obj => dispatch( UsuarioActions.setUsuario(obj) )
    }
  }
})

export default withLoading( connect(mapStateToProps, mapDispatchToProps)(Login) )
