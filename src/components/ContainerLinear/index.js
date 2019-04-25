import React from 'react'
import { 
  StatusBar,
  View,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'

import containers from '../../values/containers'

const ContainerLinear = props => {
  styles = getLayoutStyle(props)

  styles = props.margin ? {
      ...styles,
      ...containers.containerMain
    }
  : styles

  styles = props.transparent ? {
      ...styles,
      backgroundColor: 'transparent'
    }
  : styles
  
  if (props.onClick !== false) {
    return (
      <TouchableOpacity 
        activeOpacity={0.8}
        style={styles} 
        onPress={props.onClick}
      >
        <StatusBar hidden />
        {props.children}
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles}>
      <StatusBar hidden />
      {props.children}
    </View>
  )
}

const getLayoutStyle = props => {
  let sty = containers.containerDefault

  sty = (props.center && !props.vertical && !props.horizontal) ? containers.containerCenter : sty
  sty = (props.enter && props.vertical && props.horizontal) ? containers.containerCenter : sty
  
  sty = (props.center && props.vertical && !props.horizontal) ? containers.containerCenterVertical : sty
  sty = (props.center && !props.vertical && props.horizontal) ? containers.containerCenterHorizontalTop : sty
  
  sty = props.bottom ? containers.containerBottom : sty
  
  sty = props.row ? containers.containerRow : sty
  
  sty = props.bottom ? containers.containerBottom : sty
  sty = props.end ? { ...sty, ...containers.containerEnd } : sty
  sty = { ...sty, ...props.style, flex: props.weight }

  return sty
}

let styles = {}

ContainerLinear.propTypes = {
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  children: PropTypes.node,
  weight: PropTypes.number,
  style: PropTypes.object,
  margin: PropTypes.bool,
  row: PropTypes.bool,
  center: PropTypes.bool,
  bottom: PropTypes.bool,
  end: PropTypes.bool,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  transparent: PropTypes.bool
}

ContainerLinear.defaultProps = {
  onClick: false,
  children: null,
  weight: 1,
  style: {},
  margin: false,
  row: false,
  center: false,
  bottom: false,
  end: false,
  vertical: false,
  horizontal: false,
  transparent: false
}

export default ContainerLinear
