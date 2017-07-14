import { StyleSheet } from 'react-native';
import { ApplicationStyles, } from '../../theme';
import { Colors , Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  labelContainer:{
    marginTop: 20,
    marginLeft: 23,
    flex: 0.1
  },
  inputContainer:{
    marginLeft: 15,
    marginRight: 15,
    flex: 0.1
  },
  buttonsContainer:{
    flex: 0.6,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  skipButtonText:{
    marginLeft: Metrics.screenWidth / 7,
    marginRight: Metrics.screenWidth / 8,
    ...Fonts.style.regularFont,
    color:Colors.black
  },
  linearGradientColor:{
    width:Metrics.screenWidth/3,
    height: 45,
    backgroundColor: 'transparent',
    borderRadius: 22,
    marginBottom: 0,
    alignSelf: "center"
  },
  proceedButton:{
    flex: 1,
    backgroundColor: Colors.transparent,
  },
  proceedButtonText:{
    alignSelf: "center",
    marginTop: 10,
    ...Fonts.style.regularFont,
    color: Colors.white
  },
  modalScreen:{
    width: Metrics.screenWidth - 50,
    height: Metrics.screenHeight / 2.5
  },
  modalHeading:{
    backgroundColor: Colors.modalFormHeading,
    width: Metrics.screenWidth - 50,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formField:{
    backgroundColor: Colors.white,
    flexDirection: 'column',
    flex: 1
  }

});