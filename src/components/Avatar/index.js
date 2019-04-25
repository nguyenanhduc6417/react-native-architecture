import React from 'react'
import PropTypes from 'prop-types'

import { Image } from 'react-native'

import styles from './styles'

const Avatar = ({ source, small, medium }) => {
  let containerCustom = styles.big

  containerCustom = small ? styles.small : containerCustom
  containerCustom = medium ? styles.medium : containerCustom

  return (
    <Image 
      style={containerCustom}
      source={{uri: source}}
    />
  )
}
  
Avatar.propTypes = {
  source: PropTypes.string,
  small: PropTypes.bool, 
  medium: PropTypes.bool
}

Avatar.defaultProps = {
  source: 'https://cdn.wccftech.com/wp-content/uploads/2018/04/WCCFgodofwar6-740x429.jpg',
  small: false,
  medium: false
}

export default Avatar