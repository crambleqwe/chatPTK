import React, { useState } from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';
import {useDispatch} from "react-redux";
import { userLogout} from "../../redux/action/Auth";
import UpdateSchedule from "../../api/Admin/UpdateSchedule";
import UpdateReplacement from "../../api/Admin/UpdateReplacement";
import * as Print from "expo-print";


const AdminPanelScreen = ({ navigation }) => {
    const dateParcer = (date) => {
        const dateParts = date.split("/");
        [dateParts[0], dateParts[1]] = [dateParts[1], dateParts[0]];
        return dateParts.join("/");
    }

    const updateSchedule = () => {
        UpdateSchedule()
    };
    const updateReplacement = () => {
        const date = new Date()
        const formatedDate = dateParcer(date.toLocaleDateString())
        UpdateReplacement(formatedDate)
    }
    const printToFile = async () => {
        const html = `
                <html>
                  <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
                  </head>
                  <body style="text-align: center;">
                    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
                      Hello Expo!
                    </h1>
                    <img
                      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
                      style="width: 90vw;" />
                  </body>
                </html>
        `;
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        const { uri } = await Print.printToFileAsync({ html });
        console.log('File has been saved to:', uri);
    };

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Button title="Обновить расписание" onPress={updateSchedule} />
            </View>
            <View style={styles.button}>
                <Button title="Обновить замены" onPress={updateReplacement} />
            </View>
            <View style={styles.button}>
                <Button title={"Отчет о заменах"} onPress={()=>{printToFile()}}></Button>
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
