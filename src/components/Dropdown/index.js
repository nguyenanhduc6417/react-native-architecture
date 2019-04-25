import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Dropdown } from 'react-native-material-dropdown'

import colors from '../../values/colors'
import sizes from '../../values/sizes'

const CustomDropdown = props => {
  const [items] = useState(props.items)
  const [label] = useState(props.label)
  const [holder] = useState(props.holder)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [selectedValue, setSelectedValue] = useState('')

  const setValue = (value, index) => {
    setSelectedIndex(index)
    setSelectedValue(value)
    props.onChange(index, value)
  }

  return (
    <Dropdown
      containerStyle={{ marginTop: sizes.elements.margin.dropDown }}
      fontSize={sizes.font.input}
      //labelFontSize={sizes.font.input}
      baseColor={colors.primary}
      textColor={selectedIndex != null ? colors.primaryDark : colors.primary}
      itemColor={colors.primary}
      selectedItemColor={colors.primaryDark}
      label={label}
      onChangeText={(value, index) => setValue(value, index)}
      data={items}
      value={selectedIndex != null ? selectedValue : holder}
    />
  )
}

CustomDropdown.propTypes = {
  items: PropTypes.object,
  label: PropTypes.string,
  holder: PropTypes.string,
  onChange: PropTypes.func
}

CustomDropdown.defaultProps = {
  onChange: (index, value) => false,
  items: [
    { value: 'Valor 1' },
    { value: 'Valor 2' },
    { value: 'Valor 3' }
  ],
  label: 'Label',
  holder: 'Placeholder'
}

export default CustomDropdown
