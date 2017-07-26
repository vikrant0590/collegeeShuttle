import React,{ Component } from 'react';
import {View, Text, TouchableOpacity, Platform, StatusBar} from 'react-native';
import {
  Container,
  Content,
  Title,
  Body,
  Left,
  Right,
  Button,
  Header,
  Icon,
  Form,
  Item,
  Input,
  Label,
  List,
  Card,
  CardItem
} from 'native-base';
import {  Colors, Fonts, Metrics } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import {Actions as NavActions} from 'react-native-router-flux';
import styles from './PassengerDetailStyle';

export default class PassengerDetail extends Component {

  onPressPassengerDetails = () =>{
    NavActions.payment();
  };

  onPressGoBack = () => {
    NavActions.pop();
  };

  render(){
    const passengerDetail =[
      {id:1, firstName:'John',lastName:'Doe', mobile:'09210301030' }
    ];
    return(
      <Container>
        <StatusBar barStyle="light-content" />
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{
            backgroundColor: Colors.transparent
          }}>
            <Left style={{ flex: 0.2 }}>
              <Button transparent onPress={this.onPressGoBack}>
                <Icon name="arrow-back" style={{color: Colors.white}}/>
              </Button>
            </Left>
            <Body style={{
              flex: 0.6,
              alignItems: 'center',
              justifyContent: 'center' }}>
              <Title style={{
                color: Colors.white,
                ...Fonts.style.title,
                alignSelf: 'center'
              }}>Passenger Detail</Title>
            </Body>
            <Right style={{ flex: 0.2 }} />
          </Header>
        </LinearGradient>
        <View style={styles.backScreen}>
          <Content>
            <View style={styles.formContainer}>
              <Card>
                <CardItem>
                  <List dataArray={passengerDetail}
                    renderRow={(info) =>
                      <Form>
                        <View style={styles.passengerContainer}>
                          <View style={styles.firstPassengerHeading}>
                            <Text style={{color:Colors.passengerTextColor,...Fonts.style.profileForm}}>
                              Passenger 1
                            </Text>
                          </View>
                          <View
                            style={styles.firstPassengerDetail}>
                            <View style={styles.inputfield}>
                              <Item stackedLabel style={{height: (Platform.OS === 'ios' ?  60 : 70)}}>
                                <Label style={{...Fonts.style.profileLabel, color: Colors.profileInputHeadingColor}}>
                                  FIRST NAME
                                </Label>
                                <Input style={{...Fonts.style.profileInput, color: Colors.options}}
                                  autoCorrect={false}
                                  autoCapitalize="none"
                                  value={info.firstName}
                                />
                              </Item>
                            </View>
                            <View style={styles.inputfield}>
                              <Item stackedLabel style={{height: (Platform.OS === 'ios' ?  60 : 70)}}>
                                <Label style={{...Fonts.style.profileLabel, color: Colors.profileInputHeadingColor}}>
                                  LAST NAME
                                </Label>
                                <Input style={{...Fonts.style.profileInput, color: Colors.options}}
                                  autoCorrect={false}
                                  autoCapitalize="none"
                                  value={info.lastName}
                                />
                              </Item>
                            </View>
                          </View>
                          <View style={styles.mobileInputField}>
                            <Item stackedLabel style={{height: (Platform.OS === 'ios' ?  60 : 70)}}>
                              <Label style={{...Fonts.style.profileLabel, color:Colors.profileInputHeadingColor}}>
                                MOBILE NUMBER
                              </Label>
                              <Input style={{...Fonts.style.profileInput,color:Colors.options}}
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType='numeric'
                                value={info.mobile}
                              />
                            </Item>
                          </View>
                        </View>

                        <View style={styles.passengerContainer}>
                          <View style={styles.secondPassengerHeading}>
                            <Text style={{color:Colors.passengerTextColor, ...Fonts.style.profileForm}}>
                              Passenger 2
                            </Text>
                          </View>
                          <View
                            style={styles.secondPassengerDetail}>
                            <View style={styles.inputfield}>
                              <Item floatingLabel style={{height: 60}}>
                                <Label style={{...Fonts.style.buttonText, color: Colors.passengerLabelColor}}>
                                  FIRST NAME
                                </Label>
                                <Input style={{...Fonts.style.profileInput, color: Colors.options}}
                                  autoCorrect={false}
                                  autoCapitalize="none"
                                />
                              </Item>
                            </View>
                            <View style={styles.inputfield}>
                              <Item floatingLabel style={{height: 60}}>
                                <Label style={{...Fonts.style.buttonText, color: Colors.passengerLabelColor}}>
                                  LAST NAME
                                </Label>
                                <Input style={{...Fonts.style.profileInput,color:Colors.options}}
                                  autoCorrect={false}
                                  autoCapitalize="none"
                                />
                              </Item>
                            </View>
                          </View>
                          <View style={styles.mobileInputField}>
                            <Item floatingLabel style={{height: 60}}>
                              <Label style={{...Fonts.style.buttonText, color:Colors.passengerLabelColor}}>
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
                  onPress={this.onPressPassengerDetails}
                  style={{
                    flex: 1,
                    backgroundColor: Colors.transparent,
                  }}>
                  <Text style={styles.formButtonStyle}>Book Now</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </Content>
        </View>
      </Container>

    );
  }
}

