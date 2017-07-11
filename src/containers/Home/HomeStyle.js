import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  homeContainer: {
    flex: 1,
  },
  commonConatiner: {
    height: Metrics.screenHeight/2.8,
  },

  header:{
    height: 28,
    flexDirection: 'row',
    marginTop: 30,
  },

  notification: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  },

  notificationIcon:{
    marginRight: 10
  },

  segmentButton:{
    flex: 1,
    flexDirection: 'row',
    borderColor: Colors.white,
    borderRadius: 16,
    borderWidth: 1.8,
    marginLeft: 80,
    marginRight: 40,
    justifyContent: 'space-between',
  },

  activeSegmentText: {
    textAlign: 'center',
    backgroundColor: Colors.transparent,
    color: Colors.black,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base
  },

  deactiveSegmentText: {
    textAlign: 'center',
    backgroundColor: Colors.transparent,
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base
  },

  activeLeftSegmentButton: {
    flex: 1.12,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Colors.white,
  },

  deactiveLeftSegmentButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  deactiveRightSegmentButton:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  activeRightSegmentButton:{
    flex: 1.12,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Colors.white,
  },

  textBackgroundView:{
    marginTop: 40,
    marginLeft: 60,
    marginRight: 60,
    backgroundColor: 'white',
    borderRadius: 2.5
  },

  textSeprateLine:{
    height: 1.2,
    flexDirection: 'row'
  },

  textSepratorIcon:{
    right: -190,
    top: -12,
    justifyContent: 'center'
  },

  textIcon:{
    margin: 5,
    justifyContent: 'center'
  },

  Passengers: {
    marginLeft: 10
  }

});