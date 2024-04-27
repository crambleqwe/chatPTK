import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {userLogin} from "../redux/action/Auth";
import {useDispatch, useSelector} from "react-redux";

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const userAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            // Если логин и пароль верны, перенаправляем на другой экран
            dispatch(userLogin())
            console.log(userAuthenticated)
        } else {
            // Иначе отображаем сообщение об ошибке
            Alert.alert('Ошибка', 'Неверный логин или пароль');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Логин"
                onChangeText={text => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Пароль"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            <Button title="Войти" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});

export default LoginScreen;
