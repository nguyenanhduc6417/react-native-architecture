import React from 'react'
import { connect } from 'react-redux'

import { Loading } from '../components'

const withLoading = WrappedComponent => {

  const WithLoading = props => {
    return props.status ?
        <Loading message={props.message} />
      :
        <WrappedComponent {...props} />
  }

  const mapStateToProps = state => ({
    status: state.LoadingReducer.status,
    message: state.LoadingReducer.message
  })

  return connect(mapStateToProps, null)(WithLoading)
}

export default withLoading
