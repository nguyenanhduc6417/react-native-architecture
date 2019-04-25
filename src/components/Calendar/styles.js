import colors from '../../values/colors'
import sizes from '../../values/sizes'

const styles = {
  calendar: {
    flex: 1
  },
  theme: {
    //header
    textDayHeaderFontSize: sizes.font.text,
    arrowColor: colors.accent,
    //background component
    backgroundColor: colors.background,
    calendarBackground: colors.background,
    //week days
    textSectionTitleColor: colors.primaryDark,
    //dots
    textDisabledColor: colors.gray,
    dotColor: colors.accent,
    selectedDotColor: colors.accent, 
    //today
    todayTextColor: colors.accent,
    //month
    monthTextColor: colors.accent,
    textMonthFontWeight: 'bold',
    textMonthFontSize: sizes.font.text + 4,
    //day
    dayTextColor: colors.primary,
    textDayFontSize: sizes.font.text,
    selectedDayBackgroundColor: colors.accent,
    selectedDayTextColor: colors.background,
    
    
  }
}

export default styles
