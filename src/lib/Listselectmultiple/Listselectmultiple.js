import React, { Component } from 'react'
import { View, ListView, Text, TouchableOpacity, Image } from 'react-native'
import styles from './ListselectmultipleStyle';
import PropTypes from 'prop-types';
import { Colors, Images } from '../../theme';

const checkbox = Images.uncheckitemicon;
const checkboxChecked = Images.checkitemicon;

const itemType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({ label: PropTypes.string, value: PropTypes.any })
]);

const styleType = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.number,
  PropTypes.array
]);

const sourceType = PropTypes.oneOfType([PropTypes.object, PropTypes.number]);

// A customiseable ListView that allows you to select multiple rows
export default class SelectMultiple extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(itemType).isRequired,
    selectedItems: PropTypes.arrayOf(itemType),

    onSelectionsChange: PropTypes.func.isRequired,

    checkboxSource: sourceType,
    selectedCheckboxSource: sourceType,

    style: styleType,
    rowStyle: styleType,
    checkboxStyle: styleType,
    labelStyle: styleType,

    selectedRowStyle: styleType,
    selectedCheckboxStyle: styleType,
    selectedLabelStyle: styleType
  };

  static defaultProps = {
    selectedItems: [],
    style: {},
    rowStyle: {},
    checkboxStyle: {},
    checkboxCheckedStyle: {},
    labelStyle: {},
    checkboxSource: checkbox,
    selectedCheckboxSource: checkboxChecked
  };

  constructor (props) {
    super(props);

    const rows = this.getRowData(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.value !== r2.value || r1.selected !== r2.selected
    }).cloneWithRows(rows);

    this.state = { dataSource }
  }

  componentWillReceiveProps (nextProps) {
    const rows = this.getRowData(nextProps);
    const dataSource = this.state.dataSource.cloneWithRows(rows);
    this.setState({ dataSource })
  }

  getRowData ({ items, selectedItems }) {
    items = items.map(this.toLabelValueObject);
    selectedItems = (selectedItems || []).map(this.toLabelValueObject);

    items.forEach((item) => {
      item.selected = selectedItems.some((i) => i.value === item.value)
    });

    return items
  }

  onRowPress (row) {
    row = Object.assign({}, row);
    let { selectedItems } = this.props;
    selectedItems = (selectedItems || []).map(this.toLabelValueObject);
    const index = selectedItems.findIndex((selectedItem) => selectedItem.value === row.value);
    if (index > -1) {
      selectedItems = selectedItems.filter((selectedItem) => selectedItem.value !== row.value)
    } else {
      selectedItems = selectedItems.concat(row)
    }
    this.props.onSelectionsChange(selectedItems, row)
  }

  toLabelValueObject (obj) {
    if (Object.prototype.toString.call(obj) === '[object String]') {
      return { label: obj, value: obj }
    } else {
      return { label: obj.label, value: obj.value }
    }
  }

  mergeStyles (styles1, styles2) {
    styles1 = styles1 == null ? [] : styles1;
    styles1 = Array.isArray(styles1) ? styles1 : [styles1];
    return styles2 == null ? styles1 : styles1.concat(styles2);
  }

  render () {
    const { dataSource } = this.state;
    const { style } = this.props;
    const { renderItemRow } = this;
    return <ListView style={style} dataSource={dataSource} renderRow={renderItemRow} />
  }

  renderItemRow = (row) => {
    let {
      checkboxSource,
      rowStyle,
      labelStyle,
      checkboxStyle
    } = this.props;

    const {
      selectedCheckboxSource,
      selectedRowStyle,
      selectedCheckboxStyle,
      selectedLabelStyle
    } = this.props;

    const { mergeStyles } = this;

    if (row.selected) {
      checkboxSource = selectedCheckboxSource;
      rowStyle = mergeStyles(styles.row, rowStyle, selectedRowStyle);
      checkboxStyle = mergeStyles(styles.checkbox, checkboxStyle, selectedCheckboxStyle);
      labelStyle = mergeStyles(styles.label, labelStyle, selectedLabelStyle)
    } else {
      rowStyle = mergeStyles(styles.row, rowStyle);
      checkboxStyle = mergeStyles(styles.checkbox, checkboxStyle);
      labelStyle = mergeStyles(styles.label, labelStyle)
    }

    return (
      <TouchableOpacity onPress={() => this.onRowPress(row)}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column'
          }}>
          <View style={rowStyle}>
            <View
              style={{
                flex: 2,
                justifyContent: 'center'
              }}>
              <Image style={{ height: 52, width: 52, borderRadius: 26 }} source={Images.profileicon} />
            </View>
            <View style={{ flex: 6.5, justifyContent: 'center', marginLeft: -5 }}>
              <Text style={labelStyle}>{row.label}</Text>
              <Text style={styles.university}>{row.value}</Text>
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center' }}>
              <Image style={checkboxStyle} source={checkboxSource} />
            </View>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginRight: 0,
              marginBottom: 0,
              height: 1.2,
              backgroundColor: Colors.thinLineColor
            }} />
        </View>
      </TouchableOpacity>
    )
  }
}