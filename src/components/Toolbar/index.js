import React from 'react'
import PropTypes from 'prop-types'
import { View, Dimensions } from 'react-native'
import { Text } from '../'

import colors from '../../values/colors'
import containers from '../../values/containers'
import sizes from '../../values/sizes'

const Toolbar = ({ title }) => (
  <View style={styles.container}>
    <Text noMargin style={styles.title}>{title}</Text>
  </View>
)

Toolbar.propTypes = {
  title: PropTypes.string
}

Toolbar.defaultProps = {
  title: 'Toolbar Title'
}

const styles = {
  container: {
    ...containers.containerBottom,
    flex: 0,
    alignItems: 'center',
    height: 90,
    paddingBottom: 12,
    //marginBottom: sizes.containers.margin.default,
    width: Dimensions.get('window').width,
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderColor: colors.primaryDark

  },
  title: {
    color: colors.white,
    fontSize: sizes.font.navbar
  }
}

export default Toolbar
