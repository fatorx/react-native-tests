import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

/**
 * Modelo para setar uma lista de itens e utilizar em
 * um looping/lista
 * 
 * sections - variável setada para classe (acessada via this.sections)
 * 
 */
export default class SectionListModel extends Component {
  sections = [
    {title: 'D', data: ['Devin']},
    {title: 'F', data: ['Fabio']},
    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'João','Joel', 'John', 'Julie']},
    {title: 'M', data: ['Maria', 'Marcos', 'Marcelo']},
  ];

  render() {
      
    return (
      <View style={styles.container}>   
        <Text>Uma lista de itens</Text>
        <SectionList
            sections={this.sections}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})