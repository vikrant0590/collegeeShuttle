import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AutoInput from 'react-native-autocomplete-input';
import { connect } from 'react-redux';
import styles from './AutoCompleteStyles';

class AutoComplete extends Component {

  constructor(props) {
    super(props);
    this.state = { titles: ['title1','title2','title3','title4','title5'], query: '' };
  }

  findTitle(query) {
    if (query === '') {
      return [];
    }

    const { titles } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return titles.filter(title => title.search(regex) >= 0);
  }

  selectTitle = (title) => {
    this.setState({ query: title });
    //const selectedJournal = this.state.titles.filter(p => p === title)[0];
    //this.props.onSelectTitle(selectedJournal, title);
  };

  render() {
    const {query} = this.state;
    const titles = this.findTitle(query);
    const comp = (s, s2) => s.toLowerCase().trim() === s2.toLowerCase().trim();
    return (
      <AutoInput
        autoCapitalize="none"
        autoCorrect={false}
        inputContainerStyle={styles.inputStyle}
        listStyle={styles.autocompleteContainer}
        style={styles.inputTextStyle}
        data={titles.length === 1 && comp(query, titles[0]) ? [] : titles}
        onChangeText={(text) => this.selectTitle(text) }
        renderSeparator={
          (sectionId, rowId) => <View key={rowId} style={styles.separator} />
        }
        placeholder="From"
        renderItem={(title) => (
          <TouchableOpacity
            onPress={() => this.selectTitle(title) }
            style={{flex:1, backgroundColor:'red', height:30}}
          >
            <Text style={styles.itemText} allowFontScaling={false}>
              {title}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}
export default connect(state => ({
  //Journal: state.journal,
}))(AutoComplete);