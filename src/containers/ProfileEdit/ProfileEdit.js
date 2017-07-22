import React,{ Component } from 'react';
import { View, Text,Image, TouchableOpacity, Platform} from 'react-native';
import { Form, Item, Label, Input, Row, Col, Card } from 'native-base';
import { Fonts, Colors , Images, Metrics} from '../../theme';
import styles from './ProfileEditStyle';
import ModalDropdown from 'react-native-modal-dropdown';

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
      <View style={styles.profileInfo}>
        <Card>
          <Form>
            <View style={styles.formFirstRow}>
              <View style={styles.inputContainer}>
                <Item stackedLabel style={{height:(Platform.OS === 'ios' ?  60 : 70)}}>
                  <Label style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>FIRST NAME</Label>
                  <Input
                    style={{...Fonts.style.profileInput,color:Colors.options}}
                    autoCorrect={false}
                    autoCapitalize="none"
                  />
                </Item>
              </View>
              <View style={styles.inputContainer}>
                <Item stackedLabel style={{height:(Platform.OS === 'ios' ?  60 : 70)}}>
                  <Label style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>LAST NAME</Label>
                  <Input
                    style={{...Fonts.style.profileInput, color:Colors.options}}
                    autoCorrect={false}
                    autoCapitalize="none"
                  />
                </Item>
              </View>
            </View>
            <View style={styles.dropdownFieldContainer}>
              <Item stackedLabel style={{height:(Platform.OS === 'ios' ?  60 : 70)}}>
                <Label style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>EMAIL</Label>
                <Input
                  style={{...Fonts.style.profileInput,  color:Colors.options}}
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              </Item>
            </View>
            <View style={styles.doblabel}>
              <Label style= {{
                ...Fonts.style.profileLabel,
                marginTop: 10, color:Colors.profileInputHeadingColor}}>DATE OF BIRTH</Label>
            </View>

            <View style={styles.dobContainer}>
              <View style={styles.dob}>
                <Item stackedLabel style={{height:(Platform.OS === 'ios' ?  40 : 50)}}>
                  <Input
                    style={{...Fonts.style.profileInput,  color:Colors.options}}
                    autoCorrect={false}
                    autoCaptalize="none"
                    keyboardType='numeric'
                    maxLength={2}
                  />
                </Item>
              </View>
              <View style={styles.dob}>
                <Item stackedLabel style={{height:(Platform.OS === 'ios' ?  40 : 50)}}>
                  <Input
                    style={{...Fonts.style.profileInput,  color:Colors.options}}
                    autoCorrect={false}
                    autoCaptalize="none"
                    keyboardType='numeric'
                    maxLength={2}
                  />
                </Item>
              </View>
              <View style={styles.year}>
                <Item stackedLabel style={{height:(Platform.OS === 'ios' ?  40 : 50)}}>
                  <Input
                    style={{...Fonts.style.profileInput,  color: Colors.options}}
                    autoCorrect={false}
                    autoCaptalize="none"
                    keyboardType='numeric'
                    maxLength={4}
                  />
                </Item>
              </View>
            </View>
            <View style={styles.dropdownFieldContainer}>
              <Item stackedLabel style={{height:(Platform.OS === 'ios' ?  60 : 70)}}>
                <Label
                  style={{...Fonts.style.profileLabel, color: Colors.profileInputHeadingColor}}>MOBILE NUMBER</Label>
                <Input
                  style={{...Fonts.style.profileInput, color:Colors.options}}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType='numeric'
                />
              </Item>
            </View>
            <View style={styles.dropdownFieldContainer}>
              <View style={styles.dropbox}>
                <Label
                  style={{...Fonts.style.profileLabel,marginLeft:3,
                    color: Colors.profileInputHeadingColor,marginBottom:10}}>
                  HOME TOWN
                </Label>

                <ModalDropdown options={['CHANDIGARH', 'MOHALI','PANCHKULLA']}
                  onSelect={(idx, value)=>this.setState({hometown:value})}
                  dropdownStyle={{width:Metrics.screenWidth - 55, height:110}}>
                  <View style={styles.dropView}>
                    <Row>
                      <Col style={{flex:0.99}}>
                        <Text style={{...Fonts.style.profileInput,color:Colors.options}}>{this.state.hometown}</Text>
                      </Col>
                      <Col style={{flex:0.09}}>
                        <Image source={Images.dropdown} style={{marginTop:10}} />
                      </Col>
                    </Row>
                  </View>
                </ModalDropdown>

                <View style={styles.dropboxInputLine}>
                </View>
              </View>
            </View>
            <View style={styles.dropdownFieldContainer}>
              <View style={styles.dropbox}>
                <Label
                  style={{...Fonts.style.profileLabel,marginLeft:3,
                    color: Colors.profileInputHeadingColor,marginBottom:10}}>
                  UNIVERSITY
                </Label>
                <ModalDropdown options={['CHITKARA', 'LOVELY','AMITY']}
                  onSelect={(idx, value)=>this.setState({university:value})}
                  dropdownStyle={{width:Metrics.screenWidth - 55, height:110}}>
                  <View style={styles.dropView}>
                    <Row>
                      <Col style={{flex:0.99}}>
                        <Text style={{...Fonts.style.profileInput,color:Colors.options}}>{this.state.university}</Text>
                      </Col>
                      <Col style={{flex:0.09}}>
                        <Image source={Images.dropdown} style={{marginTop:10}} />
                      </Col>
                    </Row>
                  </View>
                </ModalDropdown>
                <View style={styles.dropboxInputLine}>
                </View>
              </View>
            </View>
            <View style={styles.dropdownFieldContainer}>
              <View style={styles.dropbox}>
                <Label
                  style={{...Fonts.style.profileLabel,marginLeft:3,
                    color: Colors.profileInputHeadingColor,marginBottom:10}}>
                  DROP POINT
                </Label>
                <ModalDropdown options={['CHANDIGARH', 'MOHALI','PANCHKULLA']}
                  onSelect={(idx, value)=>this.setState({dropPoint:value})}
                  dropdownStyle={{width:Metrics.screenWidth - 55, height:110}}>
                  <View style={styles.dropView}>
                    <Row>
                      <Col style={{flex:0.99}}>
                        <Text style={{...Fonts.style.profileInput,color:Colors.options}}>{this.state.dropPoint}</Text>
                      </Col>
                      <Col style={{flex:0.09}}>
                        <Image source={Images.dropdown} style={{marginTop:10}} />
                      </Col>
                    </Row>
                  </View>
                </ModalDropdown>
                <View style={styles.dropboxInputLine}>
                </View>
              </View>
            </View>

            <View style={styles.parentsInfo}>
              <Text  style={{...Fonts.style.profileForm,color:Colors.profileForm}}>Parents Information</Text>
            </View>
            <View style={styles.formFirstRow}>
              <View style={styles.inputContainer}>
                <Item stackedLabel style={{height:(Platform.OS === 'ios' ?  60 : 70)}}>
                  <Label style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>
                    PARENT'S NAME
                  </Label>
                  <Input
                    style={{...Fonts.style.profileInput,color:Colors.options}}
                    autoCorrect={false}
                    autoCapitalize="none"
                  />
                </Item>
              </View>
            </View>
            <View style={styles.dropdownFieldContainer}>
              <View style={styles.dropbox}>
                <Label
                  style={{...Fonts.style.profileLabel,marginLeft:3,
                    color: Colors.profileInputHeadingColor,marginBottom:10}}>
                  RELATIONSHIP
                </Label>
                <ModalDropdown options={['FATHER', 'MOTHER','BROTHER']}
                  onSelect={(idx, value)=>this.setState({relationship:value})}
                  dropdownStyle={{width:Metrics.screenWidth - 55, height:110}}>
                  <View style={styles.dropView}>
                    <Row>
                      <Col style={{flex:0.99}}>
                        <Text style={{...Fonts.style.profileInput,color:Colors.options}}>
                          {this.state.relationship}
                        </Text>
                      </Col>
                      <Col style={{flex:0.09}}>
                        <Image source={Images.dropdown} style={{marginTop:10}} />
                      </Col>
                    </Row>
                  </View>
                </ModalDropdown>
                <View style={styles.dropboxInputLine}>
                </View>
              </View>
            </View>
            <View style={styles.mobileInfo}>
              <View style={styles.inputContainer}>
                <Item stackedLabel style={{height:(Platform.OS === 'ios' ?  60 : 70)}}>
                  <Label style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>
                    MOBILE NUMBER
                  </Label>
                  <Input
                    style={{...Fonts.style.profileInput,color:Colors.options}}
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
        </Card>
      </View>

    );
  }
}