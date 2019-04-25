import React, { useState } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

import {
  ContainerLinear,
  Text
} from '../../../'

import styles from './styles'

const CategoriaItem = props => {
  const [checked, setChecked] = useState(props.checked)

  const check = () => {
    props.onClick(!checked)
    setChecked(!checked)
  }

  return (
    <ContainerLinear center style={styles.container} onClick={check}>
      <ContainerLinear center weight={0} style={styles.item} onClick={check}>
        {checked && <Image source={require('./checked.png')} style={styles.image} />}
      </ContainerLinear>

      <Text center style={styles.name}>
        {props.name}
      </Text>
    </ContainerLinear>
  )
}

CategoriaItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  checked: PropTypes.bool
}

CategoriaItem.defaultProps = {
  name: 'Category',
  onClick: value => false,
  checked: false
}

export default CategoriaItem
