import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

/**
 * Modelo para setar uma lista de itens e utilizar em
 * um looping/lista
 * 
 * items - variável setada para classe (acessada via this.items)
 * 
 */
export default class FlatListModel extends Component {
  items = [
    {key:'Devin'},
    {key:'Jackson'},
    {key:'James'},
    {key:'Joel'},
    {key:'John'},
    {key:'Jillian'},
    {key:'Jimmy'},
    {key:'Julie'}
  ];

  render() {
      
    return (
      <View style={styles.container}>   
        <Text>Uma lista de itens</Text>
        <FlatList
            data={this.items}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })