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
            <View style={styles.button}>
                <Button title="Обновить расписание" onPress={updateSchedule} />
            </View>
            <View style={styles.button}>
                <Button title={"Отчет о заменах"} onPress={()=>{console.log(1)}}></Button>
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
    button: {
        margin:  10
    }
});

export default AdminPanelScreen;
