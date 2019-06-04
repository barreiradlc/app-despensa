import React from 'react';
import { Image,StyleSheet, FlatList, ActivityIndicator, Text, View  } from 'react-native';

import postId from '../recursos/post.js';

import Moment from 'moment';
import HTML from 'react-native-render-html';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      id: '',
      dados:''
    }

    let { navigation } = this.props;
    let itemId = navigation.getParam('itemId', 'NO-ID');
    let mediaPost = navigation.getParam('media', 'some default value');
    
    console.warn('Media:',mediaPost);

    this.id = itemId;
    this.media = mediaPost;


    this.setState({
    loading: false,
      id: itemId,
    });
  }



  componentDidMount(){

    

    fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/posts/' + this.id)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dados: responseJson,
        }, function(){
          console.log('dados?', this.state.dados);
          
        });

      })
      .catch((error) =>{
        console.error(error);
      });

      console.warn('Mediaaaaaa:',this.media);

      fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/media/' + this.media)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          
          media: responseJson,
        }, function(){
          
          console.warn('media',this.state.media);
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    


    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    const { dados, media } = this.state;

    return(

      
      <View style={{flex: 1, paddingTop:20}}>
        
        

        
          
          <View style={styles.card}>
            
            {/* <Image source={{uri:media.rendered}}style={{height:200, width:200, flex:1}}/> */}

            <Text style={styles.titulo}> {dados.title.rendered} </Text>
            
            <HTML style={styles.conteudo} html={dados.content.rendered}/>
            
            <Text style={styles.data}> Publicado em: {Moment(dados.date).format('d MMM Y')}</Text>

            
          
          
          
          <Text style={styles.titulo}> {JSON.stringify(this.state.dados.meta.ingredientes)} </Text>
        

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
 tituloHeader:{
    color: '#fff',
    fontSize: 24,
 }
});
