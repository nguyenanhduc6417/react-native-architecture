import React from 'react'
import { 
  StatusBar,
  View,
  Dimensions
} from 'react-native'
import PropTypes from 'prop-types'

import containers from '../../values/containers'
import sizes from '../../values/sizes'

const window = Dimensions.get('window').width

const ContainerGrid = ({ children, margin, style, itemHeight, cols }) => {
  styles = setContainerGridStyles(margin, style)
  
  const renderChildren = (margin, children, itemHeight, cols) => {
    const w = !margin ? window : (window - (sizes.containers.margin.default * 2))
    const widthCalculated = (w / cols)
  
    const sty = { 
      flex: 0,
      height: itemHeight > 0 ? itemHeight : widthCalculated,
      width: widthCalculated
    }
  
    if (children == null) return null
  
    if (children.length == undefined) {
      return (
        <View style={sty}>
          {children}
        </View>
      )
    }
  
    const newChildren = children.map((item, index) => (
      <View key={index} style={sty}>
        {item}
      </View>
    ))
    
    return newChildren
  }

  return (
    <View style={styles}>
      <StatusBar hidden />
      {renderChildren(margin, children, itemHeight, cols)}
    </View>
  )
}

const setContainerGridStyles = (margin, style) => {
  sty = { ...containers.containerGrid, ...style }
  sty = margin ? { ...containers.containerMain, ...sty } : sty
  return sty
}

let styles = {}

ContainerGrid.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  margin: PropTypes.bool,
  cols: PropTypes.number,
  itemHeight: PropTypes.number
}

ContainerGrid.defaultProps = {
  children: null,
  style: {},
  margin: false,
  cols: 1,
  itemHeight: 0
}

export default ContainerGrid
