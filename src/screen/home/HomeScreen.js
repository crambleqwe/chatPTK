import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {useDispatch} from "react-redux";
import {userLogout} from "../../redux/action/Auth";
const HomeScreen = () => {
    const dispath = useDispatch()
    const logoutButtonPressed = () =>
    {
        dispath(userLogout())
    }
    return (
        <View style={styles.container}>
            <Button style={styles.button} title="выйти" onPress={logoutButtonPressed} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default HomeScreen