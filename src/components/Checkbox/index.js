import React from 'react'
import PropTypes from 'prop-types'

import { Checkbox } from 'react-native-material-ui'

import styles from './styles'

const CheckboxCustom = ({ label, value, status, onCheck, style }) => (
  <Checkbox 
    label={label} 
    value={value}
    checked={status} 
    onCheck={() => onCheck()}
    style={{...styles, ...style}}
  />
)

CheckboxCustom.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  status: PropTypes.bool,
  onCheck: PropTypes.func,
  style: PropTypes.object
}

CheckboxCustom.defaultProps = {
  label: '',
  value: '0',
  status: false,
  onCheck: () => false,
  style: {}
}

export default CheckboxCustom
