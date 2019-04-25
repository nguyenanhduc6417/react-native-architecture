import React from 'react'
import PropTypes from 'prop-types'
import { 
  FlatList
} from 'react-native'

import {
  Artigo,
  ItemLista,
  Evento,
  Video
} from './contents'

import ListTypes from './constants'

const ListComponent = ({ type, items, onItemClick }) => {
  const renderItem = (type, item, onItemClick) => {
    switch (type) {
      case ListTypes.ARTIGO: 
        return <Artigo {...item} onItemClick={onItemClick} />
      case ListTypes.EVENTO: 
        return <Evento {...item} onItemClick={onItemClick} />
      case ListTypes.VIDEO: 
        return <Video {...item} onItemClick={onItemClick} />
      case ListTypes.ITEM_LISTA: 
        return <ItemLista {...item} onItemClick={onItemClick} />
      default: 
        return null
    }
  }
  
  return (
    <FlatList 
      data={items}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => 
        renderItem(type, item, onItemClick)
      }
    />
  )
}

ListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string,
  onItemClick: PropTypes.func
}

ListComponent.defaultProps = {
  items: [],
  type: ListTypes.ARTIGO,
  onItemClick: () => false
}

const ListView = {
  View: ListComponent,
  Type: ListTypes
}

export default ListView
