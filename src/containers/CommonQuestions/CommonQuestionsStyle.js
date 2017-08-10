
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  questionText:{
    alignSelf:"center",
    justifyContent:"center",
    marginLeft:2,
    marginTop:15,
    marginBottom:15,
    fontSize:Fonts.size.regular,
    fontFamily:Fonts.lato.bold,color:Colors.black
  },
  answerText:{
    marginTop:15,
    marginLeft:10,
    marginRight:10,
    fontFamily:Fonts.lato.base,
    color:Colors.black
  },
  boldAnswerText:{
    marginTop:15,
    marginLeft:10,
    marginRight:10,
    fontFamily:Fonts.lato.bold,
    color:Colors.black
  },
  heading:{
    marginTop:5,
    marginLeft:10,
    marginRight:10,
    fontFamily:Fonts.lato.bold,
    color:Colors.black
  }

});