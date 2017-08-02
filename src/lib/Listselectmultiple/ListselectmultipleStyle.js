/**
 * Created by Admin on 26/07/17.
 */
import { StyleSheet } from 'react-native';
import { Colors, Fonts,  } from '../../theme';

export default StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff'
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 5
  },
  university:{
    ...Fonts.style.universityFont,
    color: Colors.black,
  },
  label: {}
})