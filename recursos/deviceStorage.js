import { AsyncStorage } from 'react-native';
// import { AsyncStorage } from '@react-native-community/async-storage';rr


const deviceStorage = {

    async loadJWT() {
        try {
          const value = await AsyncStorage.getItem('userToken');
          if (value !== null) {
            this.setState({
              jwt: value,
              loading: false
            });
            console.log('deubomProp?',  this.props.jwt);
            console.log('deubomEstado?',  this.state.jwt);
          } else {
            this.setState({
              loading: false
            });
          }
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
    },
      
      async loadPerfil() {
        try {
          const value = await AsyncStorage.getItem('userPerfil');
          const item = JSON.parse(value);

          if (value !== null) {
            

            this.setState({
              perfil: item,
              
              loading: false,

              id: item.id,              
              username: item.username,
              name: item.name,
              last_name: item.last_name,        
              email: item.email,
              password: item.password
            });
            console.log('deubomPerfilPrope?',  this.props.perfil);
            console.log('deubomPerfilState?',  this.state.perfil);
            console.log('deubomName?',  id);
            console.log('id?',  this.state.name);
            console.log('deubomName?',  id);
          } else {
            this.setState({
              loading: false
            });
          }
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },

      
  
};

export default deviceStorage;   