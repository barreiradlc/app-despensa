import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';



export default class Inicio extends React.Component {

    componentDidMount = () => {

        // fetch
        fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/users/me', {
           method: 'POST',
           headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + this.props.jwt 
          },
        })
        .then((response) => response.json())
        .then((responseJson) => {
              this.setState({
                id: responseJson.id,
                perfil: responseJson,
                name: responseJson.name,
                email: responseJson.email,
                username: responseJson.username,
                loading: false
           });

           console.log('id :', this.state.id);
        //    AsyncStorage.setItem('userPerfil', JSON.stringify(responseJson));
           
        })
        .catch((error) => {
           console.error(error);
        });
  
    }  
    
    constructor(props) {
        super(props);
           this.state = {
            visibleModal: null,
            username:'',
            password:'123123123',
            perfil: '',
            
            email: '',
            name:'',
            last_name:'Agosto',
            id: '',
            loading: true
        };
    }

    render() {
      const { perfil } = this.state;

      return (
         <View style={styles.container}>
                  <ScrollView>
               
               <View style={styles.container}>
                  {/* <Text style={styles.titulo}> Usuário: {perfil.username} </Text> */}
                  <Text style={styles.titulo}>Bem vindo(a): {perfil.name} </Text>
                  {/* <Text style={styles.titulo}> Sobrenome: {perfil.last_name} </Text>                   */}
                  {/* <Text style={styles.conteudo}> E-mail: {perfil.email} </Text> */}
                  
               </View>               
               
            </ScrollView>
         </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height:80
  },
  titulo: {
   fontSize: 21,
   fontWeight: 'bold',
  alignItems: 'center',
   justifyContent: 'center',
   color: '#000',
   // paddingVertical: 5
 },

});


