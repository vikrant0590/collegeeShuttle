import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, } from '../../theme';
import { Colors, Fonts, Metrics  } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  formContainer:{
    flex:0.7,
    backgroundColor:Colors.transparent,
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
  expiryDetail:{
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 20,
    marginBottom: 10,
    marginTop:10
  },
  cardField:{
    flex:1,
    marginRight:20,
    marginLeft:5,
  },
  cvvfield:{
    flex:1,
  },
  backScreen:{
    backgroundColor:Colors.base,
    flex:1
  },
  confirmPolicy:{
    flex:1,
    marginRight:20,
    marginLeft:20,
    marginTop:20,
    marginBottom:20,
    flexDirection:'row',
    height:20
  },
  confirmFieldTextContainer:{
    flex:0.9
  },
  connfirmFieldCheckBox:{
    flex:0.1,
  },
  confirmField :{
    ...Fonts.style.availabiltyNone,
    color:Colors.black
  },
  nameField:{
    flex:1,
    marginRight:20,
    marginLeft:5,
  },
  AddCardViewConatiner: {
    flex:1,
    justifyContent: 'center',
    margin: 0,
    borderRadius: 10
  },

  AddCardViewStyle: {
    borderRadius: 2,
    marginLeft: Metrics.screenWidth/ 10,
    marginRight: Metrics.screenWidth/ 10,
  },
  uncheckBox:{
    backgroundColor:Colors.clockColor,
    height:(Platform.OS==='ios' ? 18.4 :24),
    width:(Platform.OS==='ios' ? 18.4 : 23),
    marginTop:0.2
  },
  checkedBox:{
    height:(Platform.OS==='ios' ? 19.4 : 24),
    width:(Platform.OS==='ios' ? 19.4: 23),
  },
  tickImage:{
    marginTop:(Platform.OS ==='ios' ? -14 : -17),
    marginLeft:(Platform.OS==='ios'? 4 : 6),
  }


});