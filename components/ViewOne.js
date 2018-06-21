import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Greenting from './Greenting.js';
import ImageMain from './ImageMain.js';

/** 
 * O método render() deve sempre retornar um return (<Element />) 
 */
export default class ViewOne extends Component {
    render() {
  
      return (
        <View style={styles.container}>
          
          <Text style={styles.content}>De um ponto a outro com o Router1</Text>
          <Text style={styles.content}>Vamos ganhar um desconto!</Text>
          
          <ImageMain />
  
          <Greenting name="Fabio" /> 
          <Greenting name="João Roberto" />
          <Greenting name="José Henrique" />
        
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
    },
    content: {
        color:'#000',
        marginTop:5,
        marginBottom:5,
    },
    flexTests:{
      flex:1, 
      flexDirection:'column', 
      justifyContent:'center',
      alignItems:'center'
    }
  });