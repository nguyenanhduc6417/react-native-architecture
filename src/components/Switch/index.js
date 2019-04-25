import React, { useState } from 'react'
import { Switch } from 'react-native'
import PropTypes from 'prop-types'

import {
  ContainerLinear,
  Text
} from '../'

import styles from './styles'
import sizes from '../../values/sizes'
import colors from '../../values/colors'

const SwitchCustom = props => {
  const [status, setStatus] = useState(props.status)

  const onChangeStatus = () => {
    setStatus(!status)
    props.onClick(!status)
  }

  return (
    <ContainerLinear 
      row 
      weight={0} 
      style={props.margin ? 
        { ...styles.container, marginTop: sizes.elements.margin.button }
        :
        { ...styles.container }
      }
    >
      <ContainerLinear weight={0} center vertical style={styles.containerSwith}>
        <Switch
          onValueChange={onChangeStatus}
          trackColor={colors.primary}
          value={status}/>
      </ContainerLinear>
      
      <ContainerLinear weight={0} center vertical>
        <Text noMargin style={styles.label}>{props.label}</Text>
      </ContainerLinear>
    </ContainerLinear>
  )
}

SwitchCustom.propTypes = {
  onClick: PropTypes.func,
  status: PropTypes.bool,
  label: PropTypes.string,
  margin: PropTypes.bool
}

SwitchCustom.defaultProps = {
  onClick: () => false,
  status: false,
  label: 'Lorem Ipsum Ipsum Lorem',
  margin: false
}

export default SwitchCustom
