import React from 'react';
import { TouchableOpacity, View, Text, Button } from 'react-native';


import { Icon } from 'react-native-elements'

export default class Cabecalho extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.item}
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
       justifyContent: 'flex-end',
       height: 10
    },
    tituloHeader: {
       color: '#fff',
       fontSize: 24,
    },
 });
 
 
 