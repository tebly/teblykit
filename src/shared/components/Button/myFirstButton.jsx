//Made by Adam Copeland.

import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export class Settings extends Component {
  _onPressButton() {
    Alert.alert('This is actually awesome!!')
  }

  render() {
    const bColor  =   this.props.buttonColor    ||  '#639af2';
    const width   =   this.props.buttonWidth    ||  300;
    const height  =   this.props.buttonHeight   ||  30;

    return (
      <View style={styles().container}>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles(bColor, width).button}>
            <Text style={styles(bColor, width, height).buttonText}>{this.props.buttonName}</Text>
          </View>
        </TouchableOpacity>
      </View>

    )
  }
};

const styles = (buttonColor, width, smart) => StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: width,
    alignItems: 'center',
    backgroundColor: buttonColor
  },
  buttonText: {
    padding: smart,
    color: '#FEFEFE'
  }
});

export default Settings;
