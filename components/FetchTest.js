import React, { Component } from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View } from 'react-native';

/**
 * Modelo para setar uma lista de itens e utilizar em
 * um looping/lista
 * 
 * items - variável setada para classe (acessada via this.items)
 *  
 * Test url:https://jsonplaceholder.typicode.com/posts/1 
 */
export default class FetchTest extends Component {
    
    constructor(props) {
        super(props);
        this.state = { isLoading:true }
    }

    componentDidMounth() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then( (response) => response.json() )
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson
                });
            })
            .catch((error) => {
                console.log(error);        
            });
    }   

    render() {
        /*
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        }
        */
        this.componentDidMounth();

        return (
        <View style={styles.container}>   
            
            <Text style={styles.title}>Posts</Text>

            <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <Text style={styles.item}>{item.id} - {item.title}</Text>} 
                 />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     padding: 20
    },
    title: {
        fontSize:22,
        margin:10
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })