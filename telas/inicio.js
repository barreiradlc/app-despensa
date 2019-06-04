import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Carregando from '../recursos/Carregando';
import App from '../App';
import deviceStorage from '../recursos/deviceStorage';

let fundo = '../assets/logo.gif';

export default class Inicio extends React.Component {
    
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
    
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };
    
    
    // constructor(){
    //     this.state = {
    //         loading: true
    //     }
            
    //     this.loadJWT = deviceStorage.loadJWT.bind(this);
    //     this.loadJWT();
    // }
  
    render() {
    
        // const { loading } = this.state;        
    
    // if (loading){
    //     return(
    //         <Image source={{ uri: fundo }}/>        
    //     );
    //   } else {

    return (
      <View style={styles.container}>
            <Carregando />
      </View>
    );
    
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


