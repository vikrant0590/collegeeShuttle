import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  offers: {
    flex: 1
  },
  navRightCancelBtnText: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.bold
  },
  offerContainer: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15
  },

  collegeProView: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  },

  collegeProText: {
    fontSize: Fonts.size.input,
    fontFamily: Fonts.lato.base
  },

  loremTextView: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
  },

  loremText:{
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.regular,
    color: Colors.profileInputHeadingColor
  },

  codeview:{
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },

  codeText: {
    fontSize: Fonts.size.input,
    fontFamily: Fonts.lato.light,
    color: Colors.black
  },

  copyCodeText: {
    fontSize: Fonts.size.input,
    fontFamily: Fonts.lato.base,
    color: Colors.timeColor,
  },

  thinLine: {
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    height: 1,
    width: Metrics.screenWidth - 40,
    backgroundColor: Colors.thinLineColor
  },

  detailView: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
  },

  detailText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.black
  },

  descriptionView: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },

  descriptionText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.profileInputHeadingColor,
  },

  subDescriptionView: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },

  subDescriptionText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.profileInputHeadingColor,
  },

  validationView: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: Colors.validationBGColor,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
  },

  validationText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.white,
    paddingLeft: 20,
  }

});