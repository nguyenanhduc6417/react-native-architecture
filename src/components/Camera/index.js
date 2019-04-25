import React, { Component } from 'react'
import { 
  Alert,
  Image, 
  Text,
  TouchableOpacity, 
  View 
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Camera from 'react-native-camera'

//import { setFotoAtestado } from '../actions/AtestadoActions'

import {
  ContainerLinear
} from '../'

import styles from './styles'

class CameraCustom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cameraType: Camera.constants.Type.back
    }
  }

  _back = () => {
    Actions.atestadoForm()
  }

  _selfie = () => {
    var state = this.state
    state.cameraType = state.cameraType === Camera.constants.Type.back ? Camera.constants.Type.front : Camera.constants.Type.back
  }

  _take = () => {
    const options = {}

    this.camera.capture({metadata: options})
      .then((res) => {
        const image = 'data:image/jpegbase64,' + res.data
        this.props.setFotoAtestado(image)
        Actions.atestadoConfirmar()
      })
      .catch(err => {
        console.log('ERROR CameraCustom: ', err)
        Alert.alert('', 'Problema ao abrir a câmera. Entre em contato com a DTMSEG.')
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          captureQuality='medium'
          captureTarget={Camera.constants.CaptureTarget.memory}
          style={styles.camera}
          type={this.state.cameraType}>

          <View style={styles.buttonContainer}>

            <View style={styles.containerLeft}>
              <TouchableOpacity 
                onPress={this._back}>
                <Text style={styles.backText}>VOLTAR</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerMiddle}>
              <TouchableOpacity
                onPress={this._take}>
                <Image style={styles.cameraImage} source={require('../../assets/imgs/camera.png')} />
              </ TouchableOpacity>
            </View>

            <View style={styles.containerRight} />

          </View>

        </Camera>
      </View>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  //setFoto: value => dispatch( setFotoAtestado(value) )
})

export default connect(mapStateToProps, mapDispatchToProps)(CameraCustom)
