import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Container, Content, Row, Col, Icon, Item, Input, Card, CardItem, Body, Left, Right  } from 'native-base';
import { Colors, Images, Fonts } from '../../theme';
import styles from './RoundTripCustomStyle';

export default class RoundTripCustom extends Component {
    constructor(){
        super();
        this.state ={

        }
    }

    render(){
        return(
            <View>
                <Text>Round Trip Custom</Text>
            </View>
        );
    }

}
