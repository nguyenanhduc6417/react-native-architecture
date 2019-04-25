import React from 'react'
import PropTypes from 'prop-types'

import {
  ContainerLinear,
  Text
} from '../'

const NoDataFound = ({ message }) => (
  <ContainerLinear center>
    <Text center>{message}</Text>
  </ContainerLinear>
)

NoDataFound.propTypes = {
  message: PropTypes.string
}

NoDataFound.defaultProps = {
  message: 'No data found'
}

export default NoDataFound
