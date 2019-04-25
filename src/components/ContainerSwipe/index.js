import React from 'react'
import PropTypes from 'prop-types'
import { Pages } from 'react-native-pages'

import { ContainerLinear } from '../'

const ContainerSwipe = ({ children, vertical, indicatorPosition, indicatorColor, onScrollEnd }) => (
  <ContainerLinear>
    <Pages 
      indicatorPosition={indicatorPosition}
      indicatorColor={indicatorColor}
      onScrollEnd={() => onScrollEnd()}
      horizontal={!vertical}
      //renderPager={<CustomIndicator pages={pages} progress={progress} position={indicatorPosition} />}
    >
      {children}
    </Pages>
  </ContainerLinear>
)

ContainerSwipe.propTypes = {
  children: PropTypes.node,
  vertical: PropTypes.bool,
  indicatorPosition: PropTypes.string,
  indicatorColor: PropTypes.string,
  onScrollEnd: PropTypes.func
}

ContainerSwipe.defaultProps = {
  children: null,
  vertical: false,
  indicatorPosition: 'bottom',
  indicatorColor: 'red',
  onScrollEnd: () => console.log('scroll ended')
}

export default ContainerSwipe
