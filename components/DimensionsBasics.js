import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';


/**
 * Testes com dimensions and flexbox
 */
export default class DimensionsBasics extends Component {
    render() {
      return (
        <View style={styles.flexTests}>
          <View style={{width:50, height:50 , backgroundColor:'powderblue'}} />
          <View style={{width:50, height:50, backgroundColor:'skyblue'}} />
          <View style={{width:50, height:50, backgroundColor:'steelblue'}} />
        </View>  
      );
    };
  }



  const styles = StyleSheet.create({
    flexTests:{
      flex:1, 
      flexDirection:'row', 
      justifyContent:'center',
      alignItems:'center'
    }
  });
  