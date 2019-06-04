import React, { Component } from 'react'
import { ScrollView, FlatList, View, Text, StyleSheet, Image } from 'react-native'
import { Container, Header, Left, Button, Body, Right, Icon, Title } from 'native-base';
import { Font } from "expo";

class HttpExample extends Component {   
   state = {
      data: '',
      media: '',
      cabecalho: 'Blog'
   }
   componentWillMount = () => {
      fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/users', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
      fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/media', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            media: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <Container  style={{backgroundColor: "#87cefa"}}>

            <Header hasText transparent style={styles.header}>
               <Left>
                  <Button transparent>
                     {/* <Icon name='arrow-back'/> */}
                  </Button>
               </Left>
               <Body>
                  <Title style={styles.tituloHeader}> Usuários </Title>
               </Body>
               <Right>
                  <Button transparent >
                  <Icon name='md-person' />
                  </Button>
               </Right>
            </Header>

            <ScrollView>
               <FlatList
               style={styles.item}
               data={this.state.data}
               renderItem={({item}) => 
               <View style={styles.container}>
                  
                  <Text style={styles.titulo}> {item.name} </Text>
                  <View></View>
                  {/* <Image style={styles.media} source={{ uri: item.avatar_urls.24 }} /> */}
                  <View></View>
                  <Text style={styles.data}> Link: {item.link}</Text>

               </View>               
               }
                  keyExtractor={({id}, index) => id}
               />
            </ScrollView>
         </Container>
      )
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
   tituloHeader:{
      color: '#fff',
      fontSize: 24,
   }
  });


export default HttpExample;