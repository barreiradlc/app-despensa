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
        <SafeAreaView style={styles.cabecalhoContainer}>
          <View style={styles.cabecalho}>
            <TouchableOpacity

            >
              <Icon
                onPress={() => this.props.navigation.openDrawer()}
                // style={styles.tituloInterno}
                name='menu' />
            </TouchableOpacity>
          </View>
  
          <View style={styles.cabecalhoDireita}>
            <TouchableOpacity style={styles.iconeDireita}
            >
              <Icon
                onPress={() => this.props.navigation.openDrawer()}
                
                name='search' />
            </TouchableOpacity>
  

            <TouchableOpacity
            style={styles.iconeDireita}
            >
              <Icon
                onPress={() => this.props.navigation.openDrawer()}
                name='notifications' />
            </TouchableOpacity>
          </View>
  
        </SafeAreaView>
      );
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
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'flex-end',
       height: 10
    },
    tituloHeader: {
       color: '#fff',
       fontSize: 24,
    },
    cabecalho: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 15
      },
      cabecalhoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      cabecalhoDireita: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 15
      },
      iconeDireita: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // marginLeft:2
      }
 });
 
 
 