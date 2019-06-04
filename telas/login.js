import React, {
  Component
} from 'react';
import {
  Alert,
  Button,
  TextInput,
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

var usuarioUsuario;
var senhaUsuario;

export default class App extends Component {

  _showAlert = () => {
    Alert.alert(
      'Usuário não cadastrado',
      'Deve ter se confundido de algua forma com suas credenciais ou este usuário não existe, caso esse seja o caso cadastre-se aqui.',
      [
        {text: 'Me cadastrar', onPress: () => this.props.navigation.navigate('Other')},
        {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      username: 'Exemplo',
      //   email: '',
      password: '123123123',
    };
  }

  submeter() {

    const deleteUserId = async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (error) {
      console.log('Token renovado');
        // Error retrieving data
        console.log(error.message);
      }


    }


      
    let collection = {}
    collection.username = this.state.username,
    //   collection.email=this.state.email,
    collection.password = this.state.password
    console.warn(collection);

    AsyncStorage.setItem('usernameHeader', collection.username);
    AsyncStorage.setItem('senhaHeader', collection.password);

    AsyncStorage.getItem("usernameHeader").then((value) => {
      this.setState({"usernameHeader": value});
      console.log('headerArmazenadoPerfil: ',value);

      usuarioUsuario = value;

       console.log('CabecalhosColuser: ',usuarioUsuario);

   }).done();


   AsyncStorage.getItem("senhaHeader").then((value) => {
    this.setState({"senhaHeader": value});
    console.log('headerArmazenadoPerfilSenha: ',value);
    senhaUsuario = value;
    console.log('CabecalhosColsenha: ',senhaUsuario);

 }).done();
    var url = 'http://portifolio-xerozo.000webhostapp.com/wp-json/jwt-auth/v1/token';
    fetch(url, {
      method: 'POST',
        body: JSON.stringify(collection),
        headers: new Headers({
          'Content-Type': 'application/json',
          'accept': 'application/json',
          // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcG9ydGlmb2xpby14ZXJvem8uMDAwd2ViaG9zdGFwcC5jb20iLCJpYXQiOjE1NTAzNjgxNDQsIm5iZiI6MTU1MDM2ODE0NCwiZXhwIjoxNTUwOTcyOTQ0LCJkYXRhIjp7InVzZXIiOnsiaWQiOiI1In19fQ.KGJqbDzYpHBa8QCp3PgjSQLREVKveoW-DKWKFJCEFgU'
        })
      })

      .then(res => res.json())
      .catch(error => alert('Email ou senha incorretos:', error))
      .then((response) => {
        console.log('dados: ', response.token); //Returns Headers{} object
        console.log('dados absolutos: ', response); //Returns Headers{} object       

        var erro = response.token;

        if (erro !== null ) {
          
          this.props.navigation.navigate('DashBoard');
        } else {
          this._showAlert();          
        }
        AsyncStorage.setItem('userToken', response.token);
      });
  }

  render() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.tituloHeader}>Login</Text>

        <TextInput 
        value={this.state.username}
        onChangeText = {(username) => this.setState({username})}
        placeholder = {'Usuário'}
        style = {styles.input}/>



        <TextInput

        value = {this.state.password}
        onChangeText = {(password) => this.setState({password})}
        placeholder = {'Senha'}
        secureTextEntry = {true}
        style = {styles.input}/>

        <Button title = {'Login'}
        style = {styles.input}
        onPress = {() => this.submeter()}/> 

      <Text></Text>
      <Text></Text>
      <Text></Text>
        
      
      <TouchableOpacity 
      style={styles.registro}
			
			onPress={() => this.props.navigation.navigate('Registro')} >
      <Text>Novo por aqui? Cadastre-se </Text>
      </TouchableOpacity>

      </View>
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
  registro: {
    color: '#ecf0f1',
    borderColor: 'transparent',
    backgroundColor: 'transparent'

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
    borderRadius: 20
  },
  tituloHeader:{
    color: '#555',
    fontSize: 24,
    paddingVertical: 2
 }
});