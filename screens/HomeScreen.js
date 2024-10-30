import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ route }) => {
    const { token } = route.params;

    return(
        <View>
            <Text>Bem-vindo!</Text>
            <Text>Token de autenticação:</Text>
            <Text>{token}</Text>
        </View>
    );
};

export default HomeScreen;
