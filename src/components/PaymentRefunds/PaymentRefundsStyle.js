
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    marginBottom:20
  },
  nonRefundableHeading:{
    marginBottom:15,
    marginTop:5,
    marginLeft:20,
    fontSize:Fonts.size.medium,
    fontFamily:Fonts.lato.bold,
  },
  descriptionText:{
    flexDirection:'column',
    marginLeft:10,
    marginRight:15
  },
  timingDirections:{
    marginBottom:15,
    marginTop:5,
    marginLeft:10,
    fontSize:Fonts.size.medium,
    fontFamily:Fonts.lato.bold
  },
  instructionText:{
    flexDirection:'row'
  },
  points:{
    marginLeft:5,
    fontSize:Fonts.size.medium,
    fontFamily:Fonts.lato.base,
    color:Colors.black
  },
  headingText:{
    marginLeft:5,
    fontSize:Fonts.size.medium,
    fontFamily:Fonts.lato.bold
  },
  endHeadingText:{
    marginLeft:5,
    marginTop:10,
    fontSize:Fonts.size.medium,
    fontFamily:Fonts.lato.bold
  },
  remarks:{
    color:Colors.black
  }

});