import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from '../'

import styles from './styles'

const Collapse = props => {
  const [expand, setExpand] = useState(false)

  const onExpand = () => setExpand(!expand)

  return (
    <View style={styles.container}>
      <View style={styles.header} onClick={onExpand}>
        <Text>Titulo</Text>
      </View>

      { expand && 
          <View style={styles.body}>
            <Text>Conteudo</Text>
          </View>
      }
    </View>
  )
}
 
Collapse.propTypes = {

}

Collapse.defaultProps = {

}

export default Collapse