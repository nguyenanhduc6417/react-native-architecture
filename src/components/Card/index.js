import React from 'react'
import PropTypes from 'prop-types'

import { Card } from 'react-native-material-ui'

import styles from './styles'

const CardCustom = ({ children, onClick }) => (
  <Card style={styles.container} onPress={() => onClick()}>
    {children}
  </Card>
)

CardCustom.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

CardCustom.defaultProps = {
  children: null,
  onClick: () => false
}

export default CardCustom
