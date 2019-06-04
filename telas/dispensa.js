
import React, { Component } from 'react';
import {SafeAreaView,TouchableOpacity ,Text, Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default class App extends Component {
	
  constructor() 
  {
		super();	
		this.state = {
		  username: '',
		  email: '',
          password: '',
          
          name:'',
          description:'',
          categories:''
            
		};
	}
	
    submeter(){
      let collection={}
      collection.username=this.state.name,
      collection.email=this.state.description,
      collection.password=this.state.categories
      console.warn(collection);

      var url = 'https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/categories';
      
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(collection),
        headers: new Headers({
          'Content-Type':'application/json'
        })
      })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));


    }

    registro(){
		fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/users/register', {
  			method: 'POST',
  				headers: {
    				Accept: 'application/json',
    				'Content-Type': 'application/json',
  		},
  			body: JSON.stringify({
				username: '',
				email: '',
				password: ''
  		}),
		}).then((response) => response.json())
    		.then((responseJson) => {
      	return responseJson.movies;
    	})
    	.catch((error) => {
      		console.error(error);
    	});
    }

//   onLogin() {
//     const { username, email, password } = this.state;

//     Alert.alert('Credentials', `${username} + ${email}`);
//   }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.tituloHeader}>Nova dispensa</Text>

        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}  
          placeholder={'Nome'}
          style={styles.input}
        />

        <TextInput
          value={this.state.description}
          onChangeText={(description) => this.setState({ description })}    
          placeholder={'Sobre'}
          style={styles.textInput}
        />

        
        <Button
          title={'Adicionar'}
          style={styles.input}
          onPress={()=>this.submeter()}
        />

        <Text></Text>
        <Text></Text>

        
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5
    },
    textInput: {
      width: 200,
      height: 88,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
      
      borderRadius: 5
    },
    tituloHeader:{
      color: '#555',
      fontSize: 24,
      paddingVertical: 2
   },
   registro: {
    color: '#ecf0f1',
    borderColor: 'transparent',
    backgroundColor: 'transparent'

  }
  });
  