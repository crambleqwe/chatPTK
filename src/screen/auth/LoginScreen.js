import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {userLogin} from "../../redux/action/Auth";
import {useDispatch, useSelector} from "react-redux";
import login from "../../api/Auth";
import adminPanelScreen from "../admin/AdminPanelScreen";

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const userAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const handleLogin = () => {
        // login(username, password)
        //     .then((response) => {
        //         if (response) {
        //             // Пользователь успешно вошел в систему.
        //             console.log('Добро пожаловать, ' + response.name);
        //         } else {
        //             // Произошла ошибка при входе в систему.
        //             console.log('Ошибка входа в систему');
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        if (username === 'admin' && password === 'admin') {

            navigation.navigate("Администратор");
            //dispatch(userLogin())
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