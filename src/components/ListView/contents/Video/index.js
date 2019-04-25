import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

import { ContainerLinear, Text } from '../../../'

import styles from './styles'

const Video = props => {
  const onClick = () => {
    //TODO: setar os dados do artigo no redux para abrir na detalhes
    alert('clique no Video')
    props.onItemClick()
  }

  return (
    <ContainerLinear  
      noMargin
      style={styles.container}
    >

      <ContainerLinear onClick={onClick}>
        <Image 
          style={styles.banner} 
          source={{uri: props.link}} 
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

Video.propTypes = {
  onItemClick: PropTypes.func,
  id: PropTypes.number,
  link: PropTypes.string,
  categoria: PropTypes.string,
  titulo: PropTypes.string
}

Video.defaultProps = {
  onItemClick: () => false,
  id: 0,
  link: 'https://scottrowerphd.com/wp-content/uploads/2016/10/youtube-logo.jpg',
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
)(Video)
