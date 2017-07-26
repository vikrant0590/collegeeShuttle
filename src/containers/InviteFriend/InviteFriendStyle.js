import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  navRightCancelBtnText: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.bold
  },
  selectedItemText: {
    fontFamily: Fonts.lato.base,
    fontSize: Fonts.size.regular,
    color: Colors.black,
  },
  selectedItemfriendText: {
    fontFamily: Fonts.lato.base,
    fontSize: Fonts.size.regular,
    color: Colors.black,
    paddingLeft: 5
  },
  inviteText: {
    fontFamily: Fonts.lato.base,
    fontSize: Fonts.size.regular,
    color: Colors.timeColor
  },

  cardSelectedItemView: {
    alignItems: 'center',
    flex: 0.7,
    flexDirection: 'row',
    marginLeft: 15
  },

  inviteView: {
    alignItems: 'center',
    flex: (Metrics.screenWidth === 320) ?  0.24 : 0.2,
    marginRight: 5
  },

});