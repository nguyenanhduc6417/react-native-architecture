import React from 'react'
import {
  View
} from 'react-native'
import PropTypes from 'prop-types'
import { TextField } from 'react-native-material-textfield'

import {
  Icon,
  ContainerLinear
} from '../'

import colors from '../../values/colors'
import sizes from '../../values/sizes'
import styles from './styles'

const EditText = props => {
  const renderElement = () => (
    <TextField
      prefix={props.prefix}
      suffix={props.suffix}
      characterRestriction={props.characterLimit}
      inputContainerPadding={styles.padding}
      labelPadding={styles.padding}
      fontSize={sizes.font.input}
      labelFontSize={props.material ? styles.label.fontSize : 0.01}
      textColor={colors.primaryDark} //cor do texto em si
      baseColor={colors.primary} //cor da borda e plaholder sem focus
      tintColor={colors.accent} //cor da borda e placeholder on focus
      errorColor={colors.primary} //cor ao iniciar a digitar
      selectionColor={colors.primary} //cor do ponteiro
      label={props.holder}
      value={props.value} 
      multiline={props.multiline}
      secureTextEntry={props.password}
      onChangeText={(value) => props.onChange(value)}
    />
  )

  return (
    <View style={props.icon == '' ? styles.containerWithoutIcon : styles.container}>
      { props.icon !== '' && 
          <ContainerLinear 
            bottom 
            weight={0} 
            style={styles.containerIcon}
          >
            <Icon icon={props.icon !== '' ? props.icon : 'android'} />
          </ContainerLinear>
      }

      { props.icon !== '' ? 
          <View style={styles.containerEditText}> 
            { renderElement() }
          </View>
        :
          renderElement()
      } 
    </View>
  )
}

EditText.propTypes = {
  onChange: PropTypes.func,
  icon: PropTypes.string,
  value: PropTypes.string,
  holder: PropTypes.string,
  characterLimit: PropTypes.number,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  multiline: PropTypes.bool,
  password: PropTypes.bool,
  material: PropTypes.bool
}

EditText.defaultProps = {
  onChange: value => false,
  icon: '',
  value: '',
  holder: 'Placeholder',
  characterLimit: null,
  prefix: '',
  suffix: '',
  multiline: false,
  password: false,
  material: false
}

export default EditText
