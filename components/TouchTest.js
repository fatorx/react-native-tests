import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

/** 
 * O método render() deve sempre retornar um return (<Element />) 
 */
export default class TouchTest extends Component {
    render() {
  
      return (
        <View style={styles.container}>
            <Button onPress={() => Alert.alert('You tapped the button!')} title="Press Me" />
        </View> 
      );
      
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });