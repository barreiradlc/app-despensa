import React from 'react';
import { TouchableOpacity, View, Text, Button, SafeAreaView,StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements'

export default class Cabecalho extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isLoading: true }
    }
  
    render() {
      return (
 <View style={styles.cabecalho}>
        <TouchableOpacity
        // onPress={() => this.logOut()}
        >
          <Icon
            style={styles.tituloInterno}
            name='edit' />
          <Text>Editar dispensa</Text>
        </TouchableOpacity>
      </View>
      );
    }
  }
  



// estilo
const styles = StyleSheet.create({
    tituloInterno: {
        marginVertical: 5,
        textAlign: 'center',
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
 });
 
 
 