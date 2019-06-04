
import React, { Component } from 'react';
import { ActivityIndicator, Picker, TouchableOpacity, Text, Alert, Button, TextInput, View, StyleSheet } from 'react-native';

import DatePicker from 'react-native-datepicker'


export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',

            name: '',
            description: '',
            categories: '',

            date: "2016-05-15",
            id: '',

            isLoading: true,

            quantidade: '',
            medida: ''
        }

        let { navigation } = this.props;
        let itemId = navigation.getParam('itemEspecificoId', 'NO-ID');
        let catId = navigation.getParam('catId', 'NO-ID');


        console.warn('ID:', itemId);

        this.id = itemId;
        // this.media = mediaPost;


        this.setState({
            loading: false,
            id: itemId,
        });
    }

    componentWillMount() {
        return fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/posts/' + this.id)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,

                    name: responseJson.title.rendered,
                    description: responseJson.content.rendered,

                    categories: JSON.stringify(responseJson.categories),

                    quantidade: responseJson.meta.qtd,
                    medida: responseJson.meta.medida

                }, function () {



                    console.warn('titulo', responseJson.title.rendered);
                    console.warn('desc', responseJson.content.rendered);

                    console.warn('disp', JSON.stringify(responseJson.categories));

                    console.warn('quantidade', responseJson.meta.qtd);
                    console.warn('medida', responseJson.meta.medida);

                    //   console.warn('nome?', JSON.stringify(this.state.dataSource.name));
                });

            })
            .catch((error) => {
                console.error(error);
            });
    }




    submeter() {
        let collection = {}
        collection.name = this.state.name,
            collection.description = this.state.description,
            collection.categories = this.state.categories
        console.warn(collection);

        var url = 'https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/posts';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(collection),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));


    }

    registro() {
        fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/users/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: '',
                email: '',
                password: ''
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    //   onLogin() {
    //     const { username, email, password } = this.state;

    //     Alert.alert('Credentials', `${username} + ${email}`);
    //   }

    render() {



        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        // let desc = this.state.description;

        return (
            <View style={styles.container}>
                <Text style={styles.tituloHeader}>Editar Item</Text>

                <TextInput
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                    placeholder={'Nome'}
                    style={styles.input}
                />

                <View style={styles.inputContent}>


                    <TextInput
                        value={this.state.description}
                        onChangeText={(quantidade) => this.setState({ quantidade })}
                        placeholder={'Quantidade'}
                        style={styles.inputItem}
                    />

                    <Picker
                        style={styles.picker} itemStyle={styles.pickerItem}
                        selectedValue={this.state.language}
                        onValueChange={(itemValue) => this.setState({ language: itemValue })}
                    >
                        <Picker.Item label="Un" value="Unidade(s)" />
                        <Picker.Item label="g" value="Gramas" />
                        <Picker.Item label="Ml" value="Mililitros" />

                    </Picker>

                </View>

                <DatePicker
                    style={{ width: 200 }}
                    date={this.state.date}
                    mode="date"
                    placeholder="Vencimento"
                    format="DD-MM-YY"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => { this.setState({ date: date }) }}
                />



                <TextInput
                    value={this.state.description}
                    onChangeText={(description) => this.setState({ description })}
                    placeholder={'Sobre'}
                    style={styles.input}
                />

                <Picker
                    style={styles.picker} itemStyle={styles.pickerItem}
                    selectedValue={this.state.categories}
                    onValueChange={(itemValue) => this.setState({ language: itemValue })}
                >
                    
                    <Picker.Item label={this.state.categories} value={this.state.categories} />

                </Picker>


                <TextInput

                    value={this.state.categories}
                    onChangeText={(categories) => this.setState({ categories })}
                    placeholder={'Dispensa'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <Button
                    title={'Editar'}
                    style={styles.input}
                    onPress={() => this.submeter()}
                />

                <Text></Text>
                <Text></Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ecf0f1',
    },
    inputContent: {

        flexDirection: 'row',
        marginHorizontal: 80


    },
    inputItem: {
        flex: 3
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        // borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 20,
        color: "#000"
    },
    tituloHeader: {
        color: '#555',
        fontSize: 24,
        paddingVertical: 2
    },
    registro: {
        color: '#ecf0f1',
        borderColor: 'transparent',
        backgroundColor: 'transparent'

    },
    picker: {
        flex: 1,
        width: 20,
        backgroundColor: '#FFF',
        borderColor: 'black',
        borderWidth: 1,
        borderColor: '#555'
    },
    pickerItem: {
        color: 'red'
    },
    onePicker: {
        width: 200,
        height: 44,
        backgroundColor: '#FFF0E0',
        borderColor: 'black',
        borderWidth: 1,
    },
    onePickerItem: {
        height: 44,
        color: 'red'
    },
    twoPickers: {
        width: 200,
        height: 88,
        backgroundColor: '#FFF0E0',
        borderColor: 'black',
        borderWidth: 1,
    },
    twoPickerItems: {
        height: 88,
        color: 'red'
    },
});
