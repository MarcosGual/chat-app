import React, { useState } from "react";
import { StyleSheet, Text, Alert, Image, View, SafeAreaView, Button } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { auth } from "../config/firebase";
const backImage = require('../assets/technology-background.png');

export default function Signup({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');

    const onHandleSignup = () => {
        // Aquí puedes realizar la lógica para enviar los datos del formulario al servidor
        // Por ejemplo, puedes hacer una solicitud HTTP POST utilizando fetch()
        // y enviar los datos en el cuerpo de la solicitud

        if (email !== '' && password !== '') {

            createUserWithEmailAndPassword(auth, email, password)
                .then(() => console.log('Signup success'))
                .catch(err => Alert.alert('login error ', err.message));
        } else {
            Alert.alert('Falta completar los campos')
        }
    };

    return (
        <View style={styles.container}>
            <Image source={backImage} style={styles.backImage} />
            <View style={styles.whiteSheet} />
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Registro</Text>
                <TextInput style={styles.input}
                    placeholder="Ingresar Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput style={styles.input}
                    placeholder="Ingresar Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    autoFocus={true} v
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <TextInput style={styles.input}
                    placeholder="Ingresar Nombre de Usuario"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    autoFocus={true} v
                    value={username}
                    onChangeText={text => setUserName(text)}
                />
                <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}>Registrarse</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        bacgroundColor: '#fff'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'orange',
        alignSelf: 'center',
        paddingBottom: 24,
    },
    input: {
        backgroundColor: '#F6F7FB',
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
    },
    backImage: {
        width: '100%',
        height: 340,
        position: 'absolute',
        top: 0,
        resizeMode: 'cover'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
        top: 80
    },
    button: {
        backgroundColor: '#f57c00',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60
    }
})