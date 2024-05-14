import React, { useState } from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';
import {useDispatch} from "react-redux";
import { userLogout} from "../../redux/action/Auth";
import UpdateSchedule from "../../api/Admin/UpdateSchedule";
import UpdateReplacement from "../../api/Admin/UpdateReplacement";
import * as Print from "expo-print";
import getReportSchedule from "../../api/Admin/getReportSchedule";

export const dateParcer = (date) => {
    const dateParts = date.split("/");
    [dateParts[0], dateParts[1]] = [dateParts[1], dateParts[0]];
    return dateParts.join("/");
}
const AdminPanelScreen = ({ navigation }) => {
    const [html, setHtml] = useState()
    const date = new Date()
    const formattedDate = dateParcer(date.toLocaleDateString())

    const updateSchedule = () => {
        UpdateSchedule()
    };
    const updateReplacement = () => {
        UpdateReplacement(formattedDate)
    }
    const printToFile = async () => {
        getReportSchedule(formattedDate).then(r => console.log(r))
//const { uri } = await Print.printToFileAsync({ html });
 //       console.log('File has been saved to:', uri);
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
