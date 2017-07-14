import { StyleSheet } from 'react-native';
import { ApplicationStyles, } from '../../theme';
import { Colors, Fonts, Metrics  } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  passengerContainer:{
    flex:0.5
  },
  firstPassengerHeading:{
    marginLeft:20,
    marginTop:20
  },
  secondPassengerHeading:{
    marginTop:30,
    marginLeft:20
  },
  formContainer:{
    flex:0.7,
    backgroundColor:Colors.white,
    margin:15
  },
  formButtonContainer:{
    flex:0.3,
    backgroundColor:Colors.base
  },
  formButtonStyle:{
    alignSelf: "center",
    marginTop: 10,
    ...Fonts.style.regularFont,
    color: Colors.white
  },
  buttonBackStyle:{
    width:Metrics.screenWidth/3,
    height: 45,
    backgroundColor: Colors.transparent,
    borderRadius: 22,
    marginBottom: 0,
    alignSelf: "center",
    marginTop:15

  },
  firstPassengerDetail:{
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 20,
    marginBottom: 10,
    marginTop:10
  },
  secondPassengerDetail:{
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 20
  },
  mobileInputField:{
    flex:1,
    marginRight:20,
    marginLeft:5
  },
  inputfield:{
    flex:1,
  },
  backScreen:{
    backgroundColor:Colors.base,
    flex:1
  },


});