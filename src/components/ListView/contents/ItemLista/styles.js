import colors from '../../../../values/colors'
import sizes from '../../../../values/sizes'

const styles = {
  container: { 
    margin: 12,
    borderBottomWidth: 1,
    borderColor: colors.primary
  },
  containerArrow: {
    paddingBottom: 7, 
    justifyContent: 'flex-end'
  },
  description: {
    color: colors.primary,
    fontSize: sizes.font.text,
    paddingBottom: 5
  },
  arrow: {
    height: 15, 
    width: 15
  }
}

export default styles
