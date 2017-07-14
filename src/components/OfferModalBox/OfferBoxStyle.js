import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    height: Metrics.screenHeight - Metrics.screenHeight/3
  },
  headerImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  },
  subView:{
    backgroundColor: Colors.offerContentColor,
    flex: 1,
    marginTop: 50,
    marginLeft: -10,
    marginRight: -10,
    marginBottom: -10
  },

  marginView: {
    marginLeft: 15
  },

  marginTextHeaderView: {
    marginLeft: 15,
    marginTop: 10
  },

  titleText:{
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.black
  },

  describText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.profileInputHeadingColor
  },

  codeText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.light,
    color: Colors.black
  },

  codeCopyText:{
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.timeColor
  },

  detailText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.lato.base,
    color: Colors.black
  },

  detailsDescribText:{
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.profileInputHeadingColor
  },

  boxViewConatiner: {
    justifyContent: 'center',
    margin: 0,
    borderRadius: 10
  },
  boxViewStyle: {
    borderRadius: 2,
    marginLeft: 40,
    marginRight: 40,
  },

  validationView: {
    marginTop: Metrics.screenHeight - Metrics.screenHeight/1.06,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: Colors.validationBGColor,
    borderRadius: 3,
    height: Metrics.screenWidth/12,
    justifyContent: 'center',
  },

  validationText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.lato.base,
    color: Colors.white,
    paddingLeft: 20,
    textAlign: 'center'
  }


});