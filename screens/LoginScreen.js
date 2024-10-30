import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
//import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://reqres.in/api/login', {
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if(response.ok) {
                await AsyncStorage.setItem('token', data.token);
                navigation.navigate('Users');
            } else {
                Alert.alert('Login falhou', data.error);
            }
        } catch (error){
            Alert.alert('Erro!');
        }
    };

    return(
        <View>
            <Text>Login</Text>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button title='Entrar' onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;