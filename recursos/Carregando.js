import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Loading, Button, AsyncStorage } from 'react-native';

export default class Carregando extends React.Component {
  render() {
    return (
  <View style={styles.container}>
    <Text style={styles.texto}>Carregando...</Text>
    <ActivityIndicator style={styles.bloco} size={45}/>
  </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        borderRadius: 4,
        // borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginTop: 25,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
      },
  
  bloco: {
    flex: 2,
    marginTop: 25,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },
});
