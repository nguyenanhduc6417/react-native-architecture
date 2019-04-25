import React from 'react'
import { 
  StatusBar,
  ScrollView,
  View
} from 'react-native'
import PropTypes from 'prop-types'

import containers from '../../values/containers'

const ContainerScroll = ({ children, margin, style, onScrollEnd, horizontal }) => (
  <View style={margin ? containers.containerMain : containers.containerDefault}>
    <StatusBar hidden />
    <ScrollView 
      horizontal={horizontal}
      onMomentumScrollEnd={() => onScrollEnd()}
      contentContainerStyle={containers.containerScroll}
    >
      <View style={{ ...style, flex: 1 }}>
        {children}
      </View>
    </ScrollView>
  </View>
)

ContainerScroll.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  margin: PropTypes.bool,
  horizontal: PropTypes.bool,
  onScrollEnd: PropTypes.func
}

ContainerScroll.defaultProps = {
  children: null,
  style: {},
  margin: false,
  horizontal: false,
  onScrollEnd: () => false
}

export default ContainerScroll
