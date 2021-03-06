import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: Colors.base,
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: Colors.base
  },
  container: {
    flex: 1,
    backgroundColor: Colors.transparent
  },

});