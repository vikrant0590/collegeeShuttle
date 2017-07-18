import React,{ Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {List, Item, Label, Input} from 'native-base';
import Modal from 'react-native-simple-modal';
import {Actions as NavAction} from 'react-native-router-flux';
import { Colors, Fonts, Metrics  } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import styles from './InformationModalStyle';

export default class InformationModal extends  Component {

  constructor(props){
    super(props);
    this.state ={
      open:true
    }
  }

  componentWillReceiveProps =() =>{
    this.setState({ open: true})
  };

  closeModal =() =>{
    this.setState({ open: false});
    NavAction.passengerDetail();
  };

  render(){
    const parentsInformation = [
      { id:1, parentsName:'Stephen Doe', mobile:'01098483900'}
    ];

    return(
      <Modal
        open={this.state.open}
        modalDidClose={()=> this.setState({open:false})}
        overlayBackground={'rgba(0, 0, 0, 0.40)'}
        modalStyle={{
          margin: 25,
          padding: 0,
        }}
        containerStyle={{
          justifyContent: 'center',
          marginBottom:Metrics.screenHeight/2,

        }}>

        <List dataArray={parentsInformation}
          renderRow={(info) =>
            <View style={styles.modalScreen}>
              <View style={styles.modalHeading}>
                <Text style={{...Fonts.style.settingHeadingText, color: Colors.white}}>INFORMATION NEEDED</Text>
              </View>
              <View style={styles.formField}>
                <View style={styles.labelContainer}>
                  <Label style={{...Fonts.style.profileLabel, color: Colors.profileInputHeadingColor}}>
                    PARENT'S NAME
                  </Label>
                </View>
                <View style={styles.inputContainer}>
                  <Item style={{height: 30}}>
                    <Input value={info.parentsName} style={{...Fonts.style.profileInput,color:Colors.black}}/>
                  </Item>
                </View>
                <View style={styles.labelContainer}>
                  <Label style={{...Fonts.style.profileLabel, color: Colors.profileInputHeadingColor}}>
                    MOBILENUMBER
                  </Label>
                </View>
                <View style={styles.inputContainer}>
                  <Item style={{height: 30}}>
                    <Input value={info.mobile} style={{...Fonts.style.profileInput,color:Colors.black}}/>
                  </Item>
                </View>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity>
                    <Text style={styles.skipButtonText}>Skip</Text>
                  </TouchableOpacity>
                  <LinearGradient
                    colors={['#FC214F', '#D32735']}
                    style={styles.linearGradientColor}>
                    <TouchableOpacity onPress={this.closeModal}
                      style={styles.proceedButton}>
                      <Text style={styles.proceedButtonText}>Proceed</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            </View>
          }/>
      </Modal>
    )
  }
}