import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import {LocaleConfig} from 'react-native-calendars'

import styles from './styles'
import strings from '../../values/strings'

LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Out.','Nov','Dez'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
}

LocaleConfig.defaultLocale = 'br'

class CalendarCustom extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      dates: {}
    }
    
    this.onDayClick = this.onDayClick.bind(this)
  }

  objToArray = dates => {
    const datesArray = []
    for(i in dates) datesArray.push(i)

    return datesArray
  }

  arrayToObj = dates => {
    let datesArray = {}
    dates.map(item => datesArray = { ...datesArray, [item]: {selected: true} })

    return datesArray
  }

  onDayClick(date) {
    const selectedDate = date.dateString
    
    if (this.props.picker) {
      this.onPickerClick(selectedDate)
      return false
    }

    this.onScheduleClick(selectedDate)
  }

  onScheduleClick = selectedDate => {
    let dateSelected = null

    for(i in this.state.dates) {
      if (i == selectedDate) {
        dateSelected = moment(i).format(strings.dateFormat).toString()
        alert('Filtrar pela data ' + dateSelected)
      }
    }

    this.props.onClick(dateSelected)
  }

  onPickerClick = selectedDate => {
    let datesUpdated = null

    if (!this.props.multiple) {
      datesUpdated = this.checkDuplicates(selectedDate)

      this.setState({ dates: datesUpdated })
      this.props.onClick( datesUpdated )

      return false
    }

    datesUpdated = this.checkMultipleDates(selectedDate)
    
    this.setState({ dates: datesUpdated })
    this.props.onClick( this.objToArray(datesUpdated) ) 
  }

  checkMultipleDates = selectedDate => {
    return this.checkIsEmpty(selectedDate)
  }
 
  checkIsEmpty = selectedDate => {
    let datesUpdated = null 
    let datesArray = this.objToArray( this.state.dates )

    if (datesArray.length == 0) {
      datesUpdated = { [selectedDate]: {selected: true} }
      return datesUpdated
    } 

    datesUpdated = { ...this.state.dates }

    return this.checkDuplicates(selectedDate, datesUpdated, datesArray)
  }

  checkDuplicates = (selectedDate, datesUpdated, datesArray) => {
    //para single picker
    if (!this.props.multiple) {
      let dtUpdated = {}
      const dtArray = this.objToArray(this.state.dates)

      if (dtArray.length > 0) {
        for(i in dtArray) {
          if (dtArray[i] != selectedDate) dtUpdated = { [selectedDate]: {selected: true} }
        }
      } else {
        dtUpdated = { [selectedDate]: {selected: true} }
      }

      return dtUpdated
    }

    //para multiple
    let exists = false

    for(i in datesUpdated) 
      if (i == selectedDate) exists = true

    let newDates = {}

    if (exists) {

      datesArray.map(item => {
        if (item != selectedDate) 
          newDates = { ...newDates, [item]: {selected: true} } 
      })

      datesUpdated = newDates

    } else {
      datesUpdated = { ...this.state.dates, [selectedDate]: {selected: true} }
    }

    return datesUpdated
  }

  componentDidMount() {
    if (!this.props.picker) {
      const dates = this.arrayToObj(this.props.schedules)
      this.setState({ dates })
    }
  }

  render() {
    return (
      <Calendar
        style={styles.calendar}
        theme={styles.theme}
        onDayPress={this.onDayClick}
        hideExtraDays={this.props.hideExtraDays}
        markedDates={this.state.dates}
      />
    )
  }
}

CalendarCustom.propTypes = {
  onClick: PropTypes.func,
  picker: PropTypes.bool,
  schedules: PropTypes.array,
  multiple: PropTypes.bool,
  hideExtraDays: PropTypes.bool,
  br: PropTypes.bool 
}

CalendarCustom.defaultProps = { 
  onClick: value => false,
  picker: false,
  schedules: [],
  multiple: false,
  hideExtraDays: false,
  br: true
}

export default CalendarCustom
