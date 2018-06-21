import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

/**
 * Em uma classe / compoente separado, adicionar antes da classe 
 * o identificador 'export default'
 * 
 * Essa classe é um exemplo de props
 * 
 */
export default class Greenting extends Component {
  render() {
    return (
      <Text style={styles.content}>Hello {this.props.name}</Text>
    );
  }
}


const styles = StyleSheet.create({
  content: {
      color:'#000',
      marginTop:5,
      marginBottom:5,
  } ,
});