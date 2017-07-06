import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Row, Col } from 'native-base';
import styles from './HomeTabStyle';

export default class HomeTab extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <Container>
                <View style={styles.commonConatiner}>
                    <Text>Home</Text>
                </View>
                <Content>

                </Content>
            </Container>
        )
    }
}