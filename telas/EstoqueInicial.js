import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-elements';

export default class Inicial extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
      }
  
    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Adicione sua Primeira Dispensa</Text>
        <TouchableOpacity>
          <Icon name="plus-circle" size={100} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#000',
    textAlignVertical: 'bottom',
    margin: 70,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});