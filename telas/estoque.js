import React from 'react';
import { TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, Text, View } from 'react-native';

import { Icon } from 'react-native-elements';

import Cabecalho from './cabecalho/home';

import EstoqueInicial from './EstoqueInicial';

export default class FetchExample extends React.Component {

  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <Cabecalho />,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: 'nulo'
    }
  }

  componentDidMount() {
    return fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/categories/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
        console.warn(this.state.dataSource);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )

    }
    // if (this.state.dataSource === null) {

      return (
        <View style={{ flex: 1, paddingTop: 0 }}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) =>

              <TouchableOpacity
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('Itens', {
                    itemId: item.id,
                    media: item.featured_media,
                  });
                }}
              >
                <View style={styles.card}>
                  <Text style={styles.titulo}> {item.name} </Text>
                  <Text style={styles.conteudo}> {item.description} </Text>

                </View>
              </TouchableOpacity>
            }
            keyExtractor={({ id }, index) => id}
          />

          <View style={styles.maisBot}>
            <TouchableOpacity
              style={styles.tituloInterno}
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('Dispensa', {

                });
              }}
            >
              <Icon
                style={styles.tituloInterno}
                name='add-box' />
              <Text>Adicionar dispensa</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    // } 
    // else {
    //   return (
    //     <View style={styles.container}>
    //       <Text style={styles.texto}>Adicione sua Primeira Dispensa</Text>
    //       <TouchableOpacity>
    //         <Icon name="add-circle" size={100} color="black" />
    //       </TouchableOpacity>
    //     </View>
    //   );
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    borderRadius: 4,
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
    padding: 10
  },
  card: {
    padding: 20,
    margin: 5,
    backgroundColor: '#eee',
  },
  maisBot: {
    margin: 5,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
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
    padding: 5,
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
    marginTop: 15,
    color: '#fff',
    justifyContent: 'center',
  },
  tituloHeader: {
    color: '#fff',
    fontSize: 24,
  },
  tituloInterno: {
    width: 150,
    marginVertical: 5
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
    paddingHorizontal: 15
  },
  texto: {
    color: '#000',
    textAlignVertical: 'bottom',
    margin: 70,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
