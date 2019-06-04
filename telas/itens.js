import React from 'react';
import { SafeAreaView, TouchableOpacity, Button, StyleSheet, FlatList, ActivityIndicator, Text, View } from 'react-native';

import HTML from 'react-native-render-html';
import Moment from 'moment';

import { Icon } from 'react-native-elements';

import Cabecalho from './cabecalho/dispensa';

export default class FetchExample extends React.Component {

  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <Cabecalho />,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: ''
    }

    let { navigation } = this.props;
    let itemId = navigation.getParam('itemId', 'NO-ID');


    console.warn('ID:', itemId);

    this.id = itemId;
    // this.media = mediaPost;


    this.setState({
      loading: false,
      id: itemId,
    });

  }

  componentDidMount() {
    return fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/posts?categories=' + this.id)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {
          console.log('dados dlc:', this.state.dataSource);
        });

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

    return (
      <View style={{ flex: 1, paddingTop: 0 }}>
        <FlatList

          data={this.state.dataSource}
          renderItem={({ item }) =>




            <View style={styles.cardItem}>

              <View style={styles.cardTitulo}>
                <Text style={styles.titulo}> {item.title.rendered} </Text>
              </View>

              <View style={styles.card}>

                <View style={styles.quantidade}>
                  <Text style={styles.itemMenor}> QUANTIDADE: </Text>
                </View>

                <View style={styles.quantidade}>
                  <Text style={styles.itemMenor}> VALIDADE: </Text>
                </View>

              </View>

              <View style={styles.card}>

                <View style={styles.quantidade}>
                  <Text style={styles.itemMenor}> {item.meta.qtd} {item.meta.medida}</Text>


                </View>

                <View style={styles.quantidade}>


                  <Text style={styles.itemMenor}> {Moment(item.meta.validade).format('DD/MM/Y')} </Text>

                </View>


                {/* <View style={styles.quantidade}>
                <Text style={styles.itemMenor}> {item.meta.qtd} </Text>
                <Text style={styles.itemMenor}> {item.meta.medida} </Text>
              </View> */}

                {/* <HTML style={styles.conteudo} html={item.excerpt.rendered} /> */}



              </View>
              <TouchableOpacity
                style={styles.maisBot}
                onPress={() => {

                  this.props.navigation.navigate('Edicao', {
                    itemEspecificoId: item.id,
                    catId: this.id,

                  });
                }}
              >
                <Icon
                  style={styles.tituloInterno}
                  name='edit' />
                <Text
                  style={styles.tituloInterno}
                >Editar</Text>
              </TouchableOpacity>

            </View>

          }
          keyExtractor={({ id }, index) => id}
        />


        <View style={styles.maisBot}>
          <TouchableOpacity
            style={styles.tituloInterno}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Item', {

              });
            }}
          >
            <Icon
              style={styles.tituloInterno}
              name='add-box' />
            <Text>Abastecer dispensa</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    borderRadius: 4,
    // borderWidth: 0.5,
    borderColor: '#d6d7da',
    // marginTop: 25,
    // marginBottom: 15,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    // paddingBottom: 5,
    margin: 5
  },
  cardTitulo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',

  },
  tituloInterno: {
    textAlign: 'center'
  },
  titulo: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold'
  },
  maisBot: {
    // fontSize: 15,
    // fontWeight: 'bold',
    paddingTop: 5,
    marginTop: 5,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
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