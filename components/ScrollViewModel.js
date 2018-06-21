import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Image } from 'react-native';

class ImageTest extends Component {
    render() {
      let pic = {
        uri : 'http://foxybar.com.br/assets/foxybar-logo.png'
      }

      return (
        <Image source={pic} style={{width:193, height:110}} />
      );
    }
  }

/** 
 * O método render() deve sempre retornar um return (<Element />) 
 */
export default class ScrollViewModel extends Component {
    
    render() {
  
      return (
        <ScrollView>
            <Text style={{fontSize:96}}>Scroll me plz</Text>
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <Text style={{fontSize:96}}>If you like</Text>
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <Text style={{fontSize:96}}>Scrolling down</Text>
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <Text style={{fontSize:96}}>What's the best</Text>
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <Text style={{fontSize:96}}>Framework around?</Text>
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <ImageTest />
            <Text style={{fontSize:80}}>React Native</Text>
            
        </ScrollView> 
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