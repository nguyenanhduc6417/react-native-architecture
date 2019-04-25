import React from 'react'
import PropTypes from 'prop-types'

import { View, Dimensions } from 'react-native'

import sizes from '../../values/sizes'
import colors from '../../values/colors'

const widthWindow = Dimensions.get('window').width

const Line = ({ margin, marginSize }) => {
  const styleCustom = margin ? 
      marginSize != null ?
          { width: widthWindow - (marginSize * 2) } 
        :
          { width: widthWindow - (sizes.containers.margin.default * 2) } 
    : 
      styles

  return <View style={{ ...styles, ...styleCustom}} />
}

const styles = {
  height: 1,
  marginTop: sizes.containers.margin.default / 2,
  marginBottom: sizes.containers.margin.default / 2,
  width: widthWindow,
  backgroundColor: colors.blueLight
}

Line.propTypes = {
  margin: PropTypes.bool,
  marginSize: PropTypes.number
}

Line.defaultProps = {
  margin: false,
  marginSize: null
}

export default Line
