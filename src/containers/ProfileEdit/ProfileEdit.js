import React,{ Component } from 'react';
import { View, ScrollView, Text,Image, TouchableOpacity} from 'react-native';
import { Form, Item, Label, Input, Content, } from 'native-base';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import { Fonts, Colors , Images} from '../../theme';
import styles from './ProfileEditStyle';

export default class ProfileEdit extends Component {

  constructor(props){
    super(props);
    this.state ={
      hometown: '--CHOOSE--',
      university:'--CHOOSE--',
      dropPoint:'--CHOOSE--',
      relationship:'--CHOOSE--',
    }
  }
  render(){
    return (
      <Content>
        <View style={styles.profileInfo}>
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
                    maxLength={2}
                  />
                </Item>
              </View>
              <View style={styles.dob}>
                <Item stackedLabel style={{height: 40}}>
                  <Input style={{...Fonts.style.profileInput,  color:Colors.options}}
                    autoCorrect={false}
                    autoCaptalize="none"
                    keyboardType='numeric'
                    maxLength={2}
                  />
                </Item>
              </View>
              <View style={styles.year}>
                <Item stackedLabel style={{height: 40}}>
                  <Input style={{...Fonts.style.profileInput,  color: Colors.options}}
                    autoCorrect={false}
                    autoCaptalize="none"
                    keyboardType='numeric'
                    maxLength={4}
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
              <MenuContext style={{ flex: 1 }}>
                <View style={styles.dropbox}>
                  <Label
                    style={{...Fonts.style.profileLabel,marginLeft:5,
                      color: Colors.profileInputHeadingColor,marginBottom:10}}>
                    HOMETOWN
                  </Label>
                  <Menu style={styles.dropdown} onSelect={(value) => this.setState({ hometown: value })}>
                    <MenuTrigger>
                      <View style={{flexDirection:"row"}}>
                        <View style={styles.selectedDropDownOption}>
                          <Text style={{...Fonts.style.profileInput, color:Colors.options,}}>
                            {this.state.hometown}
                          </Text>
                        </View>
                        <View style={styles.dropIconContainer}>
                          <Image source={Images.dropdown} style={styles.dropIcon}/>
                        </View>
                      </View>
                    </MenuTrigger>
                    <MenuOptions optionsContainerStyle={styles.dropdownOptions}
                      renderOptionsContainer={(options) => <ScrollView>{options}</ScrollView>}>
                      <MenuOption value="Chandigarh">
                        <Text >Chandigarh</Text>
                      </MenuOption>
                      <MenuOption value="Mohali">
                        <Text>Mohali</Text>
                      </MenuOption>
                      <MenuOption value="Panchkulla">
                        <Text>Panchkulla</Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
                  <View style={styles.dropboxInputLine}>
                  </View>
                </View>
              </MenuContext>
            </View>
            <View style={styles.dropdownFieldContainer}>
              <MenuContext style={{ flex: 1 }}>
                <View style={styles.dropbox}>
                  <Label
                    style={{...Fonts.style.profileLabel,marginLeft:5,
                      color: Colors.profileInputHeadingColor,marginBottom:10}}>
                    UNIVERSITY
                  </Label>
                  <Menu style={styles.dropdown} onSelect={(value) => this.setState({ university: value })}>
                    <MenuTrigger>
                      <View style={{flexDirection:"row"}}>
                        <View style={styles.selectedDropDownOption}>
                          <Text style={{...Fonts.style.profileInput, color:Colors.options,}}>
                            {this.state.university}
                          </Text>
                        </View>
                        <View style={styles.dropIconContainer}>
                          <Image source={Images.dropdown} style={styles.dropIcon}/>
                        </View>
                      </View>
                    </MenuTrigger>
                    <MenuOptions optionsContainerStyle={styles.dropdownOptions}
                      renderOptionsContainer={(options) => <ScrollView>{options}</ScrollView>}>
                      <MenuOption value="Chitkara">
                        <Text >CHITKARA</Text>
                      </MenuOption>
                      <MenuOption value="Lovely">
                        <Text>LOVELY</Text>
                      </MenuOption>
                      <MenuOption value="Amity">
                        <Text>AMITY</Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
                  <View style={styles.dropboxInputLine}>
                  </View>
                </View>
              </MenuContext>
            </View>
            <View style={styles.dropdownFieldContainer}>
              <MenuContext style={{ flex: 1 }}>
                <View style={styles.dropbox}>
                  <Label
                    style={{...Fonts.style.profileLabel,marginLeft:5,
                      color: Colors.profileInputHeadingColor,marginBottom:10}}>
                    DROP POINT
                  </Label>
                  <Menu style={styles.dropdown} onSelect={(value) => this.setState({ dropPoint: value })}>
                    <MenuTrigger>
                      <View style={{flexDirection:"row"}}>
                        <View style={styles.selectedDropDownOption}>
                          <Text style={{...Fonts.style.profileInput, color:Colors.options,}}>
                            {this.state.dropPoint}
                          </Text>
                        </View>
                        <View style={styles.dropIconContainer}>
                          <Image source={Images.dropdown} style={styles.dropIcon}/>
                        </View>
                      </View>
                    </MenuTrigger>
                    <MenuOptions optionsContainerStyle={styles.dropdownOptions}
                      renderOptionsContainer={(options) => <ScrollView>{options}</ScrollView>}>
                      <MenuOption value="ABC">
                        <Text >ABC</Text>
                      </MenuOption>
                      <MenuOption value="XYZ">
                        <Text>XYZ</Text>
                      </MenuOption>
                      <MenuOption value="ZYX">
                        <Text>ZYX</Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
                  <View style={styles.dropboxInputLine}>
                  </View>
                </View>
              </MenuContext>
            </View>

            <View style={styles.parentsInfo}>
              <Text  style={{...Fonts.style.profileForm,color:Colors.profileForm}}>Parents Information</Text>
            </View>
            <View style={styles.formFirstRow}>
              <View style={styles.inputContainer}>
                <Item stackedLabel style={{height: 60}}>
                  <Label style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>
                    PARENT'S NAME
                  </Label>
                  <Input style={{...Fonts.style.profileInput,color:Colors.options}}
                    autoCorrect={false}
                    autoCapitalize="none"
                  />
                </Item>
              </View>
            </View>
            <View style={styles.dropdownFieldContainer}>
              <MenuContext style={{ flex: 1 }}>
                <View style={styles.dropbox}>
                  <Label
                    style={{...Fonts.style.profileLabel,marginLeft:5,
                      color: Colors.profileInputHeadingColor,marginBottom:10}}>
                    RELATIONSHIP
                  </Label>
                  <Menu style={styles.dropdown} onSelect={(value) => this.setState({ relationship: value })}>
                    <MenuTrigger>
                      <View style={{flexDirection:"row"}}>
                        <View style={styles.selectedDropDownOption}>
                          <Text style={{...Fonts.style.profileInput, color:Colors.options,}}>
                            {this.state.relationship}
                          </Text>
                        </View>
                        <View style={styles.dropIconContainer}>
                          <Image source={Images.dropdown} style={styles.dropIcon}/>
                        </View>
                      </View>
                    </MenuTrigger>
                    <MenuOptions optionsContainerStyle={styles.dropdownOptions}
                      renderOptionsContainer={(options) => <ScrollView>{options}</ScrollView>}>
                      <MenuOption value="Father">
                        <Text >Father</Text>
                      </MenuOption>
                      <MenuOption value="Mother">
                        <Text>Mother</Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
                  <View style={styles.dropboxInputLine}>
                  </View>
                </View>
              </MenuContext>
            </View>
            <View style={styles.formFirstRow}>
              <View style={styles.inputContainer}>
                <Item stackedLabel style={{height: 60}}>
                  <Label style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>
                   MOBILE NUMBER
                  </Label>
                  <Input style={{...Fonts.style.profileInput,color:Colors.options}}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType='numeric'
                  />
                </Item>
              </View>
            </View>
            <View style={styles.formFirstRow}>
              <Image source={Images.add} style={styles.addIcon}/>
              <TouchableOpacity>
                <Text style={{...Fonts.style.profileForm,color:Colors.profileForm}}>Add Another Person</Text>
              </TouchableOpacity>
            </View>
          </Form>
        </View>
      </Content>
    );
  }
}