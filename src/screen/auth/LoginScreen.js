import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {userLogin} from "../../redux/action/Auth";
import {useDispatch, useSelector} from "react-redux";
import LoginToNovSU from "../../api/Auth/LoginToNovSU";
import {setUserid, setUserInfo} from "../../redux/action/User";
import loginToDB from "../../api/Auth/LoginToDB";
import GetUserGroup from "../../api/UserInfo/GetUserGroup";

const LoginScreen = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const userAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const userInfo = useSelector((state) => state.userInfo.user);

    const handleLogin = () => {
        // кидаем запрос на сайт новсу, в случае корректного ответа прокидываем в редакс данные из ответа, затем логинимся уже в своей системе
        LoginToNovSU(login, password)
            .then((response) => {
                console.log(response)
                if (response.firstName !== null && response !== false  ) {
                    //console.log('Добро пожаловать, ' + response.firstName);
                    dispatch(setUserInfo({
                        name: response.firstName,
                        lastName: response.lastName,
                        middleName: response.midName,
                        login: login,
                    }));
                    //логинимся в своей системе, получаем в ответ айди юзера, который будет использоваться в завпросах вдальнейшем
                    loginToDB(login, password, response.firstName, response.lastName, response.midName)
                        .then(
                            (response) => {
                                console.log("asdasdasd", response)
                                console.log("id user: ", response.user_id)
                                if (response.user_id) {
                                    dispatch(setUserid({
                                        user_id: response.user_id,
                                    }));
                                    if (response.role === "ADMIN") {
                                        navigation.navigate("Администратор");
                                    } else {
                                        dispatch(userLogin());
                                    }

                                } else {
                                    console.log('Ошибка входа в систему');
                                    Alert.alert('Ошибка', 'Неверный логин или пароль');
                                }

                            }
                        )
                } else {
                    console.log('Ошибка входа в систему');
                    Alert.alert('Ошибка', 'Неверный логин или пароль');
                }

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Логин"
                onChangeText={text => setLogin(text)}
                value={login}
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
