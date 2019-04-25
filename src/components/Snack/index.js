import React from 'react'
import PropTypes from 'prop-types'

import {
  Snackbar
} from 'react-native-material-ui'

const SnackbarCustom = ({ children, message, visible, onClick }) => {
  const requestClose = clicked => {
    clicked()
  }

  return (
    <Snackbar 
      timeout={2000}
      message={message}
      visible={visible}
      onRequestClose={requestClose(onClick)}
    >
      {children}
    </Snackbar>
  )
}

SnackbarCustom.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string,
  visible: PropTypes.bool,
  onClick: PropTypes.func
}

SnackbarCustom.defaultProps = {
  children: null,
  message: '',
  visible: false,
  onClick: () => false
}

export default SnackbarCustom
