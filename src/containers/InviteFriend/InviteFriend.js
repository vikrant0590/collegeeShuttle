import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Container, Content, Icon, List, ListItem, Header, Button, Left, Body, Title, Right, Item, Input, Row, Col } from 'native-base';
import styles from './InviteFriendStyle';
import { Colors, Images, Fonts } from '../../theme';
import { Actions } from 'react-native-router-flux';
import CustomMultiPicker from "react-native-multiple-select-list";

const userList = {
    "123":"Tom",
    "124":"Michael",
    "125":"Christin"
}

export default class InviteFriend extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    onPressSearchList = () =>{

    };

    render() {
        return(
            <Container style={{ backgroundColor: Colors.base }}>
                <Header style={{backgroundColor:'#fc214f',borderBottomWidth:0}}>
                    <Left/>
                    <Body>
                    <Title style={{color:'white'}}>Invite Friends</Title>
                    </Body>
                    <Right>
                        <Right>
                            <Button transparent onPress={()=> Actions.pop()}>
                                <Text style={{ color: Colors.white, fontSize: Fonts.size.medium, fontFamily: Fonts.lato.bold}}>Cancel</Text>
                            </Button>
                        </Right>
                    </Right>
                </Header>
                <Row style={{ flex: 1, height: 40, marginLeft: 15, marginTop: 15, marginRight: 15}}>
                    <Col style={{ flex: 0.85, height: 40 }}>
                        <Row style={{ height: 40, borderColor: Colors.settingHeadingTextColor, borderWidth: 1, flex: 1, borderRadius: 4, backgroundColor: Colors.white }}>
                            <Col style={{ flex: 0.92 }}>
                            <TextInput
                                style={{ flex: 1, backgroundColor: Colors.white }}
                                onChangeText={(text) => this.setState({text})}
                                placeholderTextColor = {{ color: Colors.settingHeadingTextColor}}
                                value={this.state.text}
                            />
                            </Col>
                           <Col style={{ flex: 0.08, alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                            <Image style={{}} source={Images.searchicon} />
                           </Col>
                        </Row>
                    </Col>
                    <Col style={{ flex: 0.15, height: 40 }}>
                        <Button transparent onPress={this.onPressSearchList()}>
                            <Image style={{}} source={Images.inviteaddfriendicon} />
                        </Button>
                    </Col>
                </Row>
                <Content>
                    <CustomMultiPicker
                        options={userList}
                        search={false} // should show search bar?
                        multiple={true} //
                        placeholder={"Search"}
                        placeholderTextColor={'#757575'}
                        returnValue={"label"} // label or value
                        callback={(res)=>{ console.log(res) }} // callback, array of selected items
                        rowBackgroundColor={"#eee"}
                        rowHeight={40}
                        rowRadius={5}
                        iconColor={"#00a2dd"}
                        iconSize={30}
                        selectedIconName={"ios-checkmark-circle-outline"}
                        unselectedIconName={"ios-radio-button-off-outline"}
                        scrollViewHeight={130}
                        selected={[1,2]} // list of options which are selected by default
                    />

                </Content>
            </Container>
        )
    }
}