import React from 'react';
import { ScrollView, StyleSheet, Text, View, Loading, Button, AsyncStorage } from 'react-native';

export default class BoasVindasComponente extends React.Component {
	constructor() {
		super();
		this.state = {
			
		}
		// this.newJWT = this.newJWT.bind(this);
		// this.deleteJWT = deviceStorage.deleteJWT.bind(this);
		// this.loadJWT = deviceStorage.loadJWT.bind(this);
		// this.loadJWT();
	}

  render() {
    return (
      <ScrollView style={styles.conteudo}>
      <View style={styles.apresentacao}>
        <Text>Olá, este app é puramente explicativo 
					e nele utilizo diversos componentes 
        	para exemplificar meu conhecimento 
        	com a ferramenta em questão.
        	Se guie pelos blocos abaixo. 
					</Text>
        <Text></Text>
		    <Text></Text>
				</View>


				<View style={styles.sessao}>
			<Text></Text>
			<Text>Por aqui poderá se cadastrar para que possa se logar, recurso que aqui estou desenvolvendo 
						para que tenha acesso à seu Perfil e à publicação
						de artigos</Text>
			<Text></Text>
			<Button 
			title="Registro" 
			onPress={() => this.props.navigation.navigate('Autenticacao')} />
		</View>   


		<View>
			<Text></Text>
			<Text></Text>
			<Text></Text>
		</View>
	

		<View style={styles.sessao}>
			<Text></Text>
			<Text>Aqui jaz um mapa consumindo uma API 
			 publica de bicicletas em Nova York</Text>
			<Text></Text>
			<Button 
			title="mapa" 
			onPress={() => this.props.navigation.navigate('Mapa')} />
		</View>

		<View>
			<Text></Text>
			<Text></Text>
			<Text></Text>
		</View>
	
		<View style={styles.sessao}>
			<Text></Text>
			<Text>Nesta sessão um exemplo de consumo de API de um blog regenciado por mim no endereço: https://portifolio-xerozo.000webhostapp.com</Text>
			<Text></Text>
			<Button 
			title="Blog" 
			onPress={() => this.props.navigation.navigate('Blog')} />
		</View>        

    <View>
			<Text></Text>
			<Text></Text>
			<Text></Text>
		</View>
	     
        

  </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#fff',
		// marginTop: 30,
		
    
  },
  sessao: {
    backgroundColor: '#eee',
		padding: 15,
		marginVertical: 5
	},
	apresentacao: {
    // backgroundColor: '#eee',
		padding: 15,
		// marginVertical: 5
  },
});

