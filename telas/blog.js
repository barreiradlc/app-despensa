import React from 'react';
import { Button, StyleSheet, FlatList, ActivityIndicator, Text, View } from 'react-native';
import HTML from 'react-native-render-html';
// import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Cabecalho from './cabecalho/home';

export default class FetchExample extends React.Component {

  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <Cabecalho />,
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentWillMount() {
    return fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/posts?tags=9')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {
          console.log(responseJson);
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
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('Post', {
                    itemId: item.id,
                    media: item.featured_media,
                  });
                }}>
                <Text style={styles.titulo}> {item.title.rendered} </Text>
                <HTML style={styles.conteudo} html={item.excerpt.rendered} />
              </TouchableOpacity>
            </View>
          }
          keyExtractor={({ id }, index) => id}
        />
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
    marginTop: 25,
    marginBottom: 15,
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
    // fontSize: 15,
    // fontWeight: 'bold',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    margin: 5,
    backgroundColor: '#eee',
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    // paddingVertical: 5
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
  }
});
