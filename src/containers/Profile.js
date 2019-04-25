import React from 'react'
import { connect } from 'react-redux'

import {
  ContainerLinear,
  ContainerScroll,
  Text
} from '../components'

const Profile = props => {
  const fields = Object.keys(props.usuario)

  return (
    <ContainerScroll>
      <ContainerLinear margin>

          <ContainerLinear center vertical>
              { 
                fields.map(i => {
                  return (
                    <>
                    <Text noMargin primary>{i}:</Text>
                    <Text noMargin >{props.usuario[i]}</Text>
                    </>
                  )
                })
              }
          </ContainerLinear>

      </ContainerLinear>
    </ContainerScroll>
  )
}

const mapStateToProps = state => ({
  usuario: state.UsuarioReducer
})

export default connect(mapStateToProps, null)(Profile)
