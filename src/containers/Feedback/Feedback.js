import React,{ Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
}from 'react-native';
import {
  Content,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,

} from 'native-base';
import { Colors, Fonts, Images } from '../../theme';
import styles from './FeedbackStyle';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';

export default class Feedback extends  Component {

  render(){

    return(
      <View style={{backgroundColor:Colors.white, flex:1}}>
        <LinearGradient colors={['#FC214F', '#D32735']}>
          <Header style={{backgroundColor: Colors.transparent, borderBottomWidth: 0}}>
            <Left>
            </Left>
            <Body>
              <Title style={{color: Colors.white, ...Fonts.style.title }}>Feedback</Title>
            </Body>
            <Right>
            </Right>
          </Header>
        </LinearGradient>
        <Content style={{marginLeft:10, marginRight:10,marginTop:20}}>
          <View style={styles.container}>

            <View style={styles.wishesBox}>
              <Text style={styles.wishiesText}>We hope you had a good jouney with us</Text>
            </View>

            <View style={styles.underlineStyle}/>

            <View style={styles.emotionsHeadingBox}>
              <Text style={styles.emotionsHeadingText}>
                Rate our Service
              </Text>
            </View>

            <View style={styles.emotionImageContainer}>
              <Image source={Images.moody} style={styles.imagesGap}/>
              <Image source={Images.dump} style={styles.imagesGap}/>
              <Image source={Images.sad} style={styles.imagesGap}/>
              <Image source={Images.cute} style={styles.imagesGap}/>
              <Image source={Images.smile}/>
            </View>

            <View style={styles.improvementContainer}>
              <Text style={styles.improvementText}>What Should be improved?</Text>
            </View>

            <View style={styles.feedbackButtonContainer}>
              <Button rounded transparent style={styles.serviceTextButton}>
                <Text style={styles.serviceText}>Service</Text>
              </Button>
              <Button rounded transparent style={styles.behaviorTextButton}>
                <Text style={styles.behaviorText}>Behaviour</Text>
              </Button>
              <Button rounded transparent style={styles.otherstextButton }>
                <Text style={styles.othersText}>Others</Text>
              </Button>

            </View>

            <View style={styles.submitButtonContainer}>
              <LinearGradient
                colors={['#FC214F','#D32735']}
                style={styles.submitButton}>
                <TouchableOpacity
                  style={styles.submitButtonDefaultColor}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

          </View>
        </Content>
      </View>
    )
  }
}