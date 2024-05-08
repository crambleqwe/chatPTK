import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {userLogout} from "../../redux/action/Auth";
const ProfileScreen = () => {
    const userInfo = useSelector((state) => state.userInfo.user);
    const dispath = useDispatch()
    const logoutButtonPressed = () =>
    {
        dispath(userLogout())
    }
    return (
        <View style={styles.container}>
            <View style={styles.boxStyle}>
                <Text style={styles.label}>
                    {userInfo.name} {userInfo.lastName} {userInfo.group}
                </Text>
            </View>
            <View style={styles.container}>
                <Button style={styles.button} title="выйти" onPress={logoutButtonPressed} />
            </View>
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
export default ProfileScreen