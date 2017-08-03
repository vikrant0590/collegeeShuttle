import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0
  },
  autocompleteContainer: {
    flex: 1,
    flexDirection:'column',
    position: 'absolute',
    top:15,
    zIndex: 1,
    backgroundColor:'#000000'
  },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
  descriptionContainer: {
    backgroundColor: '#F5FCFF',
    marginTop: 8
  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  },
  inputStyle: {
    borderColor: '#F7F7F7',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,

  },
  inputTextStyle: {
    height: 30,
    backgroundColor: Colors.white
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#8E8E8E',
  }
});