import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, FlatList, View, Text, StyleSheet, Image, ActivityIndicator, Button, AsyncStorage } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import deviceStorage from '../recursos/deviceStorage.js';
// import { Font } from "expo";
import axios from 'axios';
import Carregando from '../recursos/Carregando.js';
// import Modal from './modal';
import LoginComponente from './login';
import ConteudoPerfil from './ConteudoPerfil';

class Cabecalho extends React.Component {
   render() {
       return (
           <View style={styles.cabecalho}>
               <TouchableOpacity
                   
                   onPress={() => this.logOut()} >
                   <Icon
                       style={styles.tituloInterno}
                       name='md-log-out' />
                   <Text>Sair</Text>
               </TouchableOpacity>
           </View>
       );
   }
}

export default class PerfilComponente extends Component {
   static navigationOptions = {
      // headerTitle instead of title
      headerTitle: <Cabecalho />,
   };

   logOut() {

      // const deleteUserId = async () => {
      //   try {
      //     await AsyncStorage.removeItem('userToken');
      //   } catch (error) {
      //   console.log('Token renovado');
      //     // Error retrieving data
      //     console.log(error.message);
      //   }
      // }

      AsyncStorage.removeItem('userToken', err => {
         console.log('Token renovado');
      });

      this.props.navigation.navigate('Login');
   }

   // constructor(props){
   //    super(props);


   //    this.state = {
   //      loading: true,
   //      email: '',
   //      error: '',

   //    }

   //    this.loadJWT = deviceStorage.loadJWT.bind(this);
   //    this.loadJWT();
   //  }

   constructor() {
      super();
      this.state = {
         perfil: '',
         loading: true,
         email: '',
         nome: '',
         username: '',
         data2: '',
         jwt: ''
      }
      // this.newJWT = this.newJWT.bind(this);
      // this.deleteJWT = deviceStorage.deleteJWT.bind(this);
      this.loadJWT = deviceStorage.loadJWT.bind(this);
      this.loadJWT();

   }

   // componentWillMount = () => {
   //    let cabecalho2 = {}
   //    // cabecalho.Content-Type = 'application/json',
   //    cabecalho2.Accept = 'application/json'
   //    cabecalho2.Authorization = 'Bearer ' + this.state.jwt

   //    console.warn(cabecalho2);
   // }
   componentDidMount = () => {
      console.log('propePerfil: ', this.props.jwt);

      console.log('estadoPerfil: ', this.state.jwt);

      // fetch
      fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/users/me', {
         method: 'POST',
         headers: {
            // 'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.props.jwt
            // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcG9ydGlmb2xpby14ZXJvem8uMDAwd2ViaG9zdGFwcC5jb20iLCJpYXQiOjE1NTE0ODUyODIsIm5iZiI6MTU1MTQ4NTI4MiwiZXhwIjoxNTUyMDkwMDgyLCJkYXRhIjp7InVzZXIiOnsiaWQiOiI1In19fQ.DzChVN8ytlmChtjk8cQ-PaE0UpesTnXzVb1tLEQSoKk'
            // 'Authorization': 'Bearer ' + tokenUsuario
         },

      })
         .then((response) => response.json())
         .then((responseJson) => {
            // console.log('Dados de perfeel',response);
            this.setState({
               perfil: responseJson,
               email: responseJson.email,
               username: responseJson.username,
               loading: false
            });
            AsyncStorage.setItem('userPerfil', JSON.stringify(responseJson));

         })
         .catch((error) => {
            console.error(error);
         });


      // axios
      const headers = {
         'Accept': 'application/json',
         'Authorization': 'Bearer ' + this.props.jwt
      };
      axios({
         method: 'GET',
         url: 'https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/users/me',
         headers: headers,
      }).then((response) => {
         //  this.setState({
         //    perfil: responseJson,
         //    email: responseJson.email,
         //    username: responseJson.username,
         //    loading: false
         // });
      }).catch((error) => {
         this.setState({
            error: 'Error retrieving data',
            loading: false
         });
      });


      // fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/media', {
      //    method: 'GET'
      // })
      // .then((response) => response.json())
      // .then((responseJson) => {
      //    console.log(responseJson);
      //    this.setState({
      //       media: responseJson
      //    })
      // })
      // .catch((error) => {
      //    console.error(error);
      // });
   }
   render() {

      // componentWillMount = () => {
      //    const getUserId = async () => {

      //       let cabecalho = {};
      //      try {
      //       cabecalho.Accept = await 'application/json'
      //       cabecalho.Authorization = await 'Bearer ' + this.state.jwt


      //       console.warn(cabecalho);
      //      } catch (error) {
      //        // Error retrieving data
      //        console.log('deu ruim',error.message);
      //      }
      //      return cabecalho;
      //    }


      // }
      // console.log('AppEstado?',  this.state.jwt);
      const { data2, loading, email, username, name, perfil, jwt } = this.state;
      //     // fetch
      // fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/users/me', {
      //    method: 'POST',
      //    headers: {
      //       // 'Content-Type': 'application/json',
      //       'Accept': 'application/json',
      //       'Authorization': 'Bearer ' + this.state.jwt
      //       // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcG9ydGlmb2xpby14ZXJvem8uMDAwd2ViaG9zdGFwcC5jb20iLCJpYXQiOjE1NTE0ODUyODIsIm5iZiI6MTU1MTQ4NTI4MiwiZXhwIjoxNTUyMDkwMDgyLCJkYXRhIjp7InVzZXIiOnsiaWQiOiI1In19fQ.DzChVN8ytlmChtjk8cQ-PaE0UpesTnXzVb1tLEQSoKk'
      //       // 'Authorization': 'Bearer ' + tokenUsuario
      //   },

      // })

      // .then((response) => response.json())

      // .then((responseJson) => {


      //    this.setState({
      //       perfil: responseJson,
      //       email: responseJson.email,
      //       username: responseJson.username,
      //       loading: false
      //    })
      //    console.log('hmmm',responseJson);
      //    console.log('name',responseJson.name);
      //    console.log('username',responseJson.username);
      //    console.log('email',responseJson.email);
      // })
      // .catch((error) => {
      //    console.error(error);
      // });

      //  // axios
      //  const headers = {
      //    'Accept' : 'application/json',
      //    'Authorization': 'Bearer ' + this.props.jwt
      //  };
      //  axios({
      //    method: 'GET',
      //    url: 'https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/users/me',
      //    headers: headers,
      //  }).then((response) => {
      //    this.setState({
      //      email: response.data.email,
      //      loading: false
      //    });
      //  }).catch((error) => {
      //    this.setState({
      //      error: 'Error retrieving data',
      //      loading: false
      //    });
      //  });



      if (loading) {
         return (

            <Carregando />
         );
      } else {
         return (
            <Container style={styles.tela}>

               <ConteudoPerfil jwt={jwt} />

            </Container>
         );
      }
   }
}

// estilo
const styles = StyleSheet.create({
   tela: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
   },
   container: {
      flexWrap: 'wrap',
      borderRadius: 4,
      // borderWidth: 0.5,
      borderColor: '#d6d7da',
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      alignItems: 'center',
   },
   conteudo: {
      fontSize: 15,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
   },
   titulo: {
      fontSize: 21,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#000',
   },
   activeTitle: {
      color: 'red',
      fontSize: 12,
   },
   data: {
      color: '#000',
      padding: 10
   },
   item: {
      margin: 15,
   },
   media:
   {
      width: 200,
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 2,
   },
   header: {
      // marginTop: 15,
      // color: '#fff',
      // justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      height: 10
   },
   cabecalho: {
      // marginTop: 15,
      // color: '#fff',
      // justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal:15   
   },
   tituloHeader: {
      color: '#fff',
      fontSize: 24,
   },
});