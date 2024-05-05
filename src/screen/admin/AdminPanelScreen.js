import React, { useState } from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';
import {useDispatch} from "react-redux";
import { userLogout} from "../../redux/action/Auth";


const AdminPanelScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const updateSchedule = () => {
        /*todo добавить апишку расписания*/
    };

    return (
        <View style={styles.container}>
            <Button style={styles.button} title="Обновить расписание" onPress={updateSchedule} />
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

export default AdminPanelScreen;
