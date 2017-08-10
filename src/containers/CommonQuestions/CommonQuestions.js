import React,{ Component } from 'react';
import { Text, View,  } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Icon, Card} from 'native-base';
import styles from './CommonQuestionsStyle';
import {Colors, Fonts } from '../../theme';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import PaymentRefunds from "../../components/PaymentRefunds/PaymentRefunds";

export default class LuggageQuestions extends Component {

  static contextTypes = {
    data: PropTypes.any,

  };

  onPressGoBack = () =>{
    Actions.pop();
  };

  render() {
    const { data } = this.props;
    return(
      <Container style={{flex:1, backgroundColor:Colors.base}}>
        <Header style={{backgroundColor:Colors.headerColor,borderBottomWidth:0}}>
          <Left>
            <Button transparent onPress={this.onPressGoBack}>
              <Icon name="arrow-back" style={{color:'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: Colors.white, ...Fonts.style.title }}>Help Support</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.cardViewStyle}>
            <Card
              style={{
                flex: 1,
                marginTop: 15,
                marginLeft: 15,
                marginRight: 15,

              }}>
              <Text style={styles.questionText}>
                {data.question}
              </Text>
            </Card>
            <Card
              style={{
                flex: 1,
                marginTop: 15,
                marginLeft: 15,
                marginRight: 15,
                marginBottom:30
              }}>

              {(data.answer === undefined ?
                <PaymentRefunds/>
                :
                (data.answer.bold ? <Text style={styles.boldAnswerText}>{data.answer.ans} </Text> :
                  <Text style={styles.answerText}>{data.answer.ans} </Text> ))}
              <Text style={styles.heading}>{data.heading}</Text>

            </Card>
          </View>
        </Content>
      </Container>
    )
  }
}