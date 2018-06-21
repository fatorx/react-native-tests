import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {text:''};
    }

    render() {
        return (
            <View style={{padding:10}}>
                <TextInput 
                    style={{height:40, marginTop:50}}
                    placeholder="Type here to translate"
                    onChangeText={(text) => this.setState({text})}
                    />

                <Text style={{padding:10, fontSize:42}}>
                    {this.state.text.split(' ').map((word) => word && 'pizza').join(' ')}
                </Text>

            </View>  

        );
    };
}