import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

import arrow from './arrow.png'

import { 
  ContainerLinear, 
  Text
} from '../../../'

import styles from './styles'

const ItemLista = props => {
  const onClick = () => {
    //TODO: setar os dados do artigo no redux para abrir na detalhes
    props.onItemClick(props.id + 1)
  }

  return (
    <ContainerLinear style={styles.container}>

      <ContainerLinear row>
        <ContainerLinear weight={1}>
          <Text 
            noMargin 
            style={styles.description}
            onClick={onClick}
          >
            {props.description}
          </Text>
        </ContainerLinear>

        <ContainerLinear weight={0} end style={styles.containerArrow}>
          <Image 
            style={styles.arrow}
            source={arrow}
            onClick={onClick}
          />
        </ContainerLinear>
      </ContainerLinear>
      
    </ContainerLinear>
  )
}

ItemLista.propTypes = {
  id: PropTypes.number,
  onItemClick: PropTypes.func,
  description: PropTypes.string
}

ItemLista.defaultProps = {
  id: 1,
  onItemClick: id => alert(`${id}`),
  description: 'Hare Krishna ipsum lorem'
}

export default ItemLista
