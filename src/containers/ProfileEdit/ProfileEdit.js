import React,{ Component } from 'react';
import { View} from 'react-native';
import { Form, Item, Label, Input,Content } from 'native-base';
import { Fonts, Colors } from '../../theme';
import styles from './ProfileEditStyle';
export default class ProfileEdit extends Component {

  render(){
    return (
      <View style={styles.profileInfo}>
        <Content>
          <Form>
            <View style={styles.formFirstRow}>
              <View style={styles.inputContainer}>
                <Item stackedLabel style={{height: 60}}>
                  <Label style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>FIRST NAME</Label>
                  <Input style={{...Fonts.style.profileInput,color:Colors.options}}
                    autoCorrect={false}
                    autoCapitalize="none"
                  />
                </Item>
              </View>
              <View style={styles.inputContainer}>
                <Item stackedLabel style={{height: 60}}>
                  <Label style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>LAST NAME</Label>
                  <Input style={{...Fonts.style.profileInput, color:Colors.options}}
                    autoCorrect={false}
                    autoCapitalize="none"
                  />
                </Item>
              </View>
            </View>
            <View style={styles.dropdownFieldContainer}>
              <Item stackedLabel style={{height: 60}}>
                <Label style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>EMAIL</Label>
                <Input style={{...Fonts.style.profileInput,  color:Colors.options}}
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              </Item>
            </View>
            <View style={styles.doblabel}>
              <Label style= {{
                ...Fonts.style.profileLabel,
                marginTop: 5, color:Colors.profileInputHeadingColor}}>DATE OF BIRTH</Label>
            </View>
            <View style={styles.dobContainer}>
              <View style={styles.dob}>
                <Item stackedLabel style={{height: 40}}>
                  <Input style={{...Fonts.style.profileInput,  color:Colors.options}}
                    autoCorrect={false}
                    autoCaptalize="none"
                    keyboardType='numeric'
                  />
                </Item>
              </View>
              <View style={styles.dob}>
                <Item stackedLabel style={{height: 40}}>
                  <Input style={{...Fonts.style.profileInput,  color:Colors.options}}
                    autoCorrect={false}
                    autoCaptalize="none"
                    keyboardType='numeric'
                  />
                </Item>
              </View>
              <View style={styles.year}>
                <Item stackedLabel style={{height: 40}}>
                  <Input style={{...Fonts.style.profileInput,  color: Colors.options}}
                    autoCorrect={false}
                    autoCaptalize="none"
                    keyboardType='numeric'
                  />
                </Item>
              </View>
            </View>
            <View style={styles.dropdownFieldContainer}>
              <Item stackedLabel style={{height: 60}}>
                <Label
                  style={{...Fonts.style.profileLabel, color: Colors.profileInputHeadingColor}}>MOBILE NUMBER</Label>
                <Input style={{...Fonts.style.profileInput, color:Colors.options}}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType='numeric'
                />
              </Item>
            </View>
            <View style={styles.dropdownFieldContainer}>
              <Item stackedLabel style={{height: 60}}>
                <Label style={{...Fonts.style.profileLabel, color: Colors.profileInputHeadingColor}}>HOMETOWN</Label>
                <Input style={{...Fonts.style.profileInput,  color:Colors.options}}
                  autoCorrect={false}
                  autoCapitalize="none"
                  disabled
                />
              </Item>
            </View>
            <View style={styles.dropdownFieldContainer}>
              <Item stackedLabel style={{height: 60}}>
                <Label style={{...Fonts.style.profileLabel, color: Colors.profileInputHeadingColor}}>UNIVERSITY</Label>
                <Input style={{...Fonts.style.profileInput, color:Colors.options}}
                  autoCorrect={false}
                  autoCapitalize="none"
                  disabled
                />
              </Item>
            </View>
          </Form>
        </Content>
      </View>
    );
  }
}