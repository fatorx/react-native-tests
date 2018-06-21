import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

/** 
 * O método render() deve sempre retornar um return (<Element />) 
 */
export default class TouchButton extends Component {
    _onPressButton() {
      Alert.alert('You tapped the button!');
    }

    render() {
  
      return (
        <View style={styles.container}>
            
            <View style={styles.buttonContainer}>
              <Button 
                onPress={this._onPressButton} 
                title="Press Me"
                color="#841584" 
              />
            </View>
            
            <View style={styles.buttonContainer}>
              <Button 
                onPress={this._onPressButton} 
                title="This looks great!"  
              />
            </View>

            <Button
              onPress={this._onPressButton}
              title="OK!"
              color="#841584"
            />

        </View> 
      );
      
    };
  }
  
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
    },
    buttonContainer: {
      margin: 20
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  })