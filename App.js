import React from 'react';
import { TouchableOpacity, View, Text, Button, SafeAreaView, StyleSheet } from 'react-native';
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions,
  createDrawerNavigator
} from 'react-navigation';

// icone
import { Icon } from 'react-native-elements'

// Perfil
import PerfilPagina from './telas/perfil';

// receitas
import Receitas from './telas/blog';
import Post from './telas/post';

// autenticação
import Login from './telas/login';
import Registro from './telas/registro';

// geladeira
import Estoque from './telas/estoque';
import Itens from './telas/itens';
import Item from './telas/item';
import Edicao from './telas/itemEditar';
import Dispensa from './telas/dispensa';

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Icon name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Settings') {
    iconName = `ios-options${focused ? '' : '-outline'}`;
  }
  else if (routeName === 'Perfil') {
    iconName = `account-box${focused ? '' : ''}`;
  }
  else if (routeName === 'Geladeira') {
    iconName = `archive${focused ? '' : ''}`;
  }
  else if (routeName === 'Receitas') {
    iconName = `cake${focused ? '' : ''}`;
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const Geladeira = createStackNavigator({
  Estoque: {
    screen: Estoque,
  },
  Dispensa: {
    screen: Dispensa,
  },
  Itens: {
    screen: Itens,
  },
  Item: {
    screen: Item,
  },
  Edicao: {
    screen: Edicao,
  },
}, 
  {
    initialRouteName: 'Estoque',
  });

const Auth = createSwitchNavigator({
    Registro: {
      screen: Registro,
    },
    Login: {
      screen: Login,
    },
  }, {
      initialRouteName: 'Login',
  });

const PerfilGeral = createStackNavigator({
    PerfilPagina: {
      screen: PerfilPagina,

    },
  },
  {
    initialRouteName: 'PerfilPagina',
  });

const Feed = createStackNavigator({
  Noticias: {
    screen: Receitas,
  },
  Post: {
    screen: Post,
  },

  },
    {
      initialRouteName: 'Noticias',
    });


const Dash = createBottomTabNavigator(

  {

    Geladeira: { screen: Geladeira },

    Receitas: { screen: Feed },

  },

  {
    defaultNavigationOptions: ({ navigation }) =>
      ({

        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),

      }),
    tabBarOptions:
    {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
  {
    initialRouteName: 'Geladeira',
  });



const AppNavigator = createSwitchNavigator({
  DashBoard: {
    screen: Dash,
  },
  Autenticacao: {
    screen: Auth,
  },
  Receitas: {
    screen: Feed,
  },
},
);

const MyDrawerNavigator = createDrawerNavigator({
  App: {
    screen: AppNavigator
  },
  Home: {
    screen: Login,
  },
  Notifications: {
    screen: Auth,
  },
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <SafeAreaView>
            <View style={styles.cabecalho}>
              <TouchableOpacity
              // onPress={() => this.logOut()}
              >
                <Icon
                  onPress={() => navigation.openDrawer()}
                  // style={styles.tituloInterno}
                  name='edit' />
                <Text>Menu</Text>
              </TouchableOpacity>
            </View>

          </SafeAreaView>
        )
      }
    }
  },
);


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
    justifyContent: 'flex-end',
    paddingHorizontal: 15
  },
});

export default createAppContainer(MyDrawerNavigator);