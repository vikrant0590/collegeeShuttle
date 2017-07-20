import React,{ Component } from 'react';
import {View, Text,Image, TouchableOpacity, Platform} from 'react-native';
import { Container,Content, Title, Body, Left, Right, Header,
  Form, Item, Input, Label, List, Card, CardItem, } from 'native-base';
import {  Colors, Fonts, Images } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import {Actions as NavAction} from 'react-native-router-flux';
import styles from './AddCardStyle';

export default class PassengerDetail extends Component {

  constructor(props){
    super(props);
    this.state ={
      agreed:true,
    }

  }

  agreedPolicy = () => {
    this.setState({ agreed:!this.state.agreed })
  };

  onPressAddButton = () => {
    NavAction.payment();
  };

  onPressCloseButton =() => {
    NavAction.pop();
  };

  render(){
    const passengerCardDetail =[
      {id:1, name:"John Doe", cardNumber:"5647 7484 6767", expiryDate:"01/21", cvv:'233', }
    ];

    return(
      <Container>
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{
            backgroundColor: Colors.transparent, borderBottomWidth: 0,
            shadowOffset: {height: 0, width: 0}, shadowOpacity: 0
          }}>
            <Left>
            </Left>
            <Body>
              <Title style={{color: Colors.white,}}>Add Card</Title>
            </Body>
            <Right>
              <TouchableOpacity onPress={this.onPressCloseButton}>
                <Image source={Images.closeButton} style={{marginRight:5}}/>
              </TouchableOpacity>
            </Right>
          </Header>
        </LinearGradient>

        <View style={styles.backScreen}>
          <Content>
            <View style={styles.formContainer}>
              <Card>
                <CardItem>
                  <List dataArray={passengerCardDetail}
                    renderRow={(info) =>
                      <Form>
                        <View style={styles.cardField}>
                          <Item stackedLabel style={{height: (Platform.OS === 'ios' ?  60 : 70)}}>
                            <Label style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>
                              CARD NUMBER
                            </Label>
                            <Input style={{...Fonts.style.profileInput,color:Colors.options}}
                              autoCorrect={false}
                              autoCapitalize="none"
                              value={info.cardNumber}
                            />
                          </Item>
                        </View>
                        <View
                          style={styles.expiryDetail}>
                          <View style={styles.inputfield}>
                            <Item stackedLabel style={{height: (Platform.OS === 'ios' ?  60 : 70)}}>
                              <Label style={{...Fonts.style.profileLabel, color: Colors.profileInputHeadingColor}}>
                                EXPIRY DATE
                              </Label>
                              <Input style={{...Fonts.style.profileInput, color: Colors.options}}
                                value={info.expiryDate}
                              />
                            </Item>
                          </View>
                          <View style={styles.cvvfield}>
                            <Item stackedLabel style={{height: (Platform.OS === 'ios' ?  60 : 70)}}>
                              <Label style={{...Fonts.style.profileLabel, color: Colors.profileInputHeadingColor}}>
                               CVV
                              </Label>
                              <Input style={{...Fonts.style.profileInput, color: Colors.options}}
                                value={info.cvv}
                              />
                            </Item>
                          </View>
                        </View>
                        <View style={styles.nameField}>
                          <Item stackedLabel style={{height: (Platform.OS === 'ios' ?  60 : 70)}}>
                            <Label style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>
                              NAME ON CARD
                            </Label>
                            <Input style={{...Fonts.style.profileInput,color:Colors.options}}
                              autoCorrect={false}
                              autoCapitalize="none"
                              value={info.name}
                            />
                          </Item>
                        </View>
                        <View style={styles.confirmPolicy}>
                          <View style={{flex:0.1}}>
                            {(this.state.agreed) ?
                              <TouchableOpacity onPress={this.agreedPolicy}>
                                <Image source={Images.checkbox}/>
                                <Image source={Images.tick} style={{marginLeft: 4, marginTop: -14}}/>
                              </TouchableOpacity>
                              :
                              <TouchableOpacity onPress={this.agreedPolicy}>
                                <Image source={Images.checkbox}/>
                              </TouchableOpacity>
                            }
                          </View>
                          <View style={styles.confirmFieldTextContainer}>
                            <Text style={styles.confirmField}> Securely save card details</Text>
                          </View>

                        </View>
                      </Form>
                    }/>
                </CardItem>
              </Card>
            </View>


            <View style={styles.formButtonContainer}>
              <LinearGradient
                colors={['#FC214F', '#D32735']}
                style={styles.buttonBackStyle}>
                <TouchableOpacity
                  onPress={this.onPressAddButton}
                  style={{
                    flex: 1,
                    backgroundColor: Colors.transparent,
                  }}>
                  <Text style={styles.formButtonStyle}>Add</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </Content>
        </View>
      </Container>

    );
  }
}

