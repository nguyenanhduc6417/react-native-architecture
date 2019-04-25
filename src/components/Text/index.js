import React from 'react'
import { Text } from 'react-native'
import PropType from 'prop-types'

import styles from './styles'
import sizes from '../../values/sizes'
import colors from '../../values/colors'

const TextCustom = props => {
  let sty = styles.textDefault

  sty = props.title ? styles.title : sty
  sty = props.center ? { ...sty, textAlign: 'center' } : sty

  sty = props.big ? { ...sty, fontSize: sizes.font.titleBig } : sty

  sty = props.noMargin ? { ...sty, marginTop: 0, marginBottom: 0 } : sty

  sty = props.title ? 
      props.primary ? { 
        ...sty, color: colors.accent 
      } : { 
        ...sty, color: colors.primary
      }
    :
      sty

  sty = props.primary ? { 
    ...sty, color: colors.accent 
  } : sty

  sty = { ...sty, ...props.style }

  let nrLines = props.numberOfLines
  nrLines = props.center ? 
      null 
    : 
      nrLines > 0 ? nrLines : null

  return (
    <Text style={sty} numberOfLines={nrLines} onPress={() => props.onClick()}>
      {props.children}
    </Text>
  )
}

TextCustom.propTypes = {
  children: PropType.node,
  numberOfLines: PropType.number,
  onClick: PropType.func,
  style: PropType.object,
  title: PropType.bool,
  noMargin: PropType.bool,
  center: PropType.bool,
  big: PropType.bool,
  primary: PropType.bool
}

TextCustom.defaultProps = {
  children: 'Lorem Ipsum',
  numberOfLines: 0,
  onClick: () => false,
  style: {},
  title: false,
  noMargin: false,
  center: false,
  big: false,
  primary: false
}

export default TextCustom
