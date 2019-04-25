import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { 
  ContainerLinear, 
  Text 
} from '../'

import styles from './styles'

const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const weekDay = moment().weekday()

const Week = () => (
  <ContainerLinear row>
  {
    days.map((day, index) => {
      const containerActive = index == weekDay ? styles.containerActive : {}
      const labelActive = index == weekDay ? styles.labelActive : {}

      return (
        <ContainerLinear key={index} center style={containerActive}>
          <Text style={{ ...styles.textDay, ...labelActive }} noMargin>{day}</Text>
        </ContainerLinear>
      )
    })
  }
  </ContainerLinear>
)

Week.propTypes = {
  day: PropTypes.number
}

Week.defaultProps = {
  day: 0
}

export default Week
