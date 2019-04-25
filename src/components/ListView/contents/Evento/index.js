import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ImageBackground } from 'react-native'
import PropTypes from 'prop-types'

import { 
  ContainerLinear, 
  Text
} from '../../../'

import styles from './styles'

const Evento = props => {
  const onClick = () => {
    //TODO: setar os dados do artigo no redux para abrir na detalhes
    props.onItemClick()
  }
  
  return (
    <ContainerLinear 
      center
      style={styles.container}
      onClick={onClick}
    >

    <ImageBackground 
      style={styles.containerBanner} 
      source={{uri: props.banner}} 
    >
      <ContainerLinear center style={styles.containerInfo} onClick={onClick}>
        <Text 
          title 
          center 
          style={styles.titleText}
        >
          {props.titulo}
        </Text>

        <Text noMargin style={styles.dataText}>{props.data}</Text>
        <Text noMargin style={styles.horaText}>das {props.horaIni} às {props.horaFim}</Text>
        <Text noMargin style={styles.localText}>em {props.local}</Text>
        <Text style={styles.palestranteText}>com {props.palestrante}</Text>
      </ContainerLinear>
    </ImageBackground>

    </ContainerLinear>
  )
}

Evento.propTypes = {
  onItemClick: PropTypes.func,
  id: PropTypes.number,
  banner: PropTypes.string,
  titulo: PropTypes.string,
  data: PropTypes.string,
  horaIni: PropTypes.string,
  horaFim: PropTypes.string,
  local: PropTypes.string,
  palestrante: PropTypes.string
}

Evento.defaultProps = {
  onItemClick: () => false,
  id: 0,
  banner: 'http://www.asplanosdesaude.com/wp-content/uploads/2017/01/banner-planos-de-saude-sao-paulo-min.jpg',
  titulo: 'Evento Exemplo',
  data: '22/12/2019',
  horaIni: '11:00',
  horaFim: '13:00',
  local: 'Meu Lar',
  palestrante: 'Tiago Guizelini'
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Evento)
