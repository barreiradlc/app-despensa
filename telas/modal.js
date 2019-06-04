import React, { Component } from 'react';
import { ScrollView ,TextInput ,Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Form, Item, Label } from 'native-base';
import Modal from 'react-native-modal';
import deviceStorage from '../recursos/deviceStorage';

export default class Example extends Component {
    componentDidMount = () => {
        console.log('propePerfil: ',  this.props.jwt);
        console.log('estadoPerfil: ',  this.state.jwt);
      
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

        this.loadPerfil = deviceStorage.loadPerfil.bind(this);
        this.loadPerfil();

        console.log('perfilwololo',this.state.perfil);
        console.log('jwtwololo',this.state.jwt);
    }

    edicao() {
      const { data2, loading, email, username, name, perfil, id } = this.state;
        let novosDados = {}
        novosDados.username = this.state.username,
        novosDados.name = this.state.name,
        novosDados.last_name = this.state.last_name,
        novosDados.email = this.state.email,
        novosDados.password = this.state.password
        console.warn(novosDados);
        // console.warn('Id Absoluto: ',id);
        // console.warn('Id Absoluto: ',perfil.id);
        console.warn('Id Absoluto: ',perfil.id);
        var url = 'https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/users/' + perfil.id ;

    fetch(url , {
        method: 'POST',
        body: JSON.stringify(novosDados),
        headers: new Headers({
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'Authorization': 'Bearer ' + this.props.jwt
        })
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      

      .then((response) => {
        console.log(response.headers); //Returns Headers{} object
        console.log(response); //Returns Headers{} object
      
        alert("Perfil Editado com sucesso!");

      });    
    }

  _renderButton = (text, onPress) => (
    
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
      
    <View style={styles.modalContent}>
      <Text style={styles.header}>Editar Perfil</Text>
      
      <ScrollView>
      <Form>
        <Item stackedLabel>
            <Label>Usuário</Label>
        
            <TextInput 
            value={this.state.username}
            onChangeText = {(username) => this.setState({username})}
            placeholder = {this.state.username}
            style = {styles.input}
            autoFocus={true}/>

        </Item>

        <Item stackedLabel>
            <Label>Nome</Label>

                <TextInput 
                value={this.state.name}
                onChangeText = {(name) => this.setState({name})}
                placeholder = {this.state.name}
                style = {styles.input}/>
        </Item>

        <Item stackedLabel>
            <Label>Sobrenome</Label>

                <TextInput 
                value={this.state.last_name}
                onChangeText = {(last_name) => this.setState({last_name})}
                placeholder = {this.state.last_name}
                style = {styles.input}/>

</Item>

<Item stackedLabel>
            <Label>E-mail</Label>


                <TextInput 
                value={this.state.email}
                onChangeText = {(email) => this.setState({email})}
                placeholder = {this.state.email}
                style = {styles.input}/>

</Item>

 <Item stackedLabel>
            <Label>Senha</Label>

                <TextInput
                value = {this.state.password}
                onChangeText = {(password) => this.setState({password})}
                placeholder = {this.state.password}
                secureTextEntry = {true}
                style = {styles.input}/>
</Item> 

        </Form>
        </ScrollView>

      {this._renderButton('Confirmar', () => this.setState({ visibleModal: null }, () => this.edicao()))}
    </View> 
  );

  render() {

    const { data2, loading, email, username, name, perfil, last_name, jwt } = this.state;
    
    console.log('perfil',perfil);   
    console.log('jwt',jwt);
    console.log('name',name);
    console.log('username',username);
    
    
    return (
      <View style={styles.container}>
        {/* {this._renderButton('Default modal', () => this.setState({ visibleModal: 1 }))}
        {this._renderButton('Sliding from the sides', () => this.setState({ visibleModal: 2 }))}
        {this._renderButton('A slower modal', () => this.setState({ visibleModal: 3 }))}
        {this._renderButton('Fancy modal!', () => this.setState({ visibleModal: 4 }))} */}
        {this._renderButton('Editar Perfil', () => this.setState({ visibleModal: 5 }))}
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 2}
          animationIn={'slideInLeft'}
          animationOut={'slideOutRight'}
        >
          {this._renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 3}
          animationInTiming={2000}
          animationOutTiming={2000}
          backdropTransitionInTiming={2000}
          backdropTransitionOutTiming={2000}
        >
          {this._renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 4}
          backdropColor={'red'}
          backdropOpacity={1}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          {this._renderModalContent()}
        </Modal>
        <Modal isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    // padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 10,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  input: {
    width: 400,
    height: 44,
    // padding: 10,
    // borderWidth: 1,
    // borderColor: 'black',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 20
  },
  header: {
    marginTop: 15,
    color: '#fff',
    justifyContent: 'center',
 },
});