import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

import { ContainerLinear, Text } from '../../../'

import styles from './styles'

const Artigo = props => {
  const onClick = () => {
    //TODO: setar os dados do artigo no redux para abrir na detalhes
    props.onItemClick()
  }

  return (
    <ContainerLinear 
      style={styles.container}
      onClick={onClick}
    >

      <ContainerLinear>
        <Image 
          style={styles.banner} 
          source={{uri: props.banner}} 
        />
      </ContainerLinear>

      <ContainerLinear style={styles.containerInfo}>

        <ContainerLinear center vertical style={styles.containerText}>
          <Text 
            style={styles.textCategoria} 
            noMargin
          >{props.categoria}</Text>
        </ContainerLinear>

        <ContainerLinear>
          <Text 
            title
            noMargin 
            style={styles.textTitulo}
            onClick={onClick}
            >{props.titulo}</Text>
        </ContainerLinear>

      </ContainerLinear>

    </ContainerLinear>
  )
}

Artigo.propTypes = {
  onItemClick: PropTypes.func,
  id: PropTypes.number,
  banner: PropTypes.string,
  categoria: PropTypes.string,
  titulo: PropTypes.string
}

Artigo.defaultProps = {
  onItemClick: () => false,
  id: 0,
  banner: 'http://www.asplanosdesaude.com/wp-content/uploads/2017/01/banner-planos-de-saude-sao-paulo-min.jpg',
  categoria: 'Category',
  titulo: 'Lorem Ipsum Supremo'
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Artigo)
