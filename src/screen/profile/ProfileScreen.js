import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/action/Auth";
import { getSchedule, getUserId } from "../home/HomeScreen";
import Schedule from "./Sсhedule";
import getUserProfile from "../../api/UserInfo/GetUserProfile";
import getReplacement from "../../api/Schedule/GetReplacement";
import Replacement from "./Replacement";

export const replacementParser = (data) => {
    const dataArray = data.split('\n\n');
    const formatedData = [];
    
    for (let i = 0; i < dataArray.length; i++) {
        const data = dataArray[i].split('\n');
        formatedData[i] = {};
        formatedData[i].id = i;
        formatedData[i].group = data[0];
        formatedData[i].row_number = data[1];
        formatedData[i].perv = data[2];
        formatedData[i].replace = data[3];
    }
    return formatedData;
}
const ProfileScreen = () => {
    const [scheduleData, setScheduleData] = useState()
    const [userInfo, setUserInfo] = useState('');
    const [replacement, setReplacement] = useState('')
    const dispatch = useDispatch()
    const date = new Date()
    const todayIndex = date.getDay() - 1
    const [isEditingStatus, setIsEditingStatus] = useState(false);
    const [editedStatus, setEditedStatus] = useState('');

    useEffect(() => {
        const getUserProfileInfo = async() =>{
            const response = await getUserId();
            const temp = JSON.parse(response)
            const user_id = JSON.parse(temp).user_id // разобраться почему так работает
            getUserProfile(user_id)
                .then(r => setUserInfo(r))
        }
        getUserProfileInfo().then(r => console.log(r))
        getSchedule()
            .then((r) =>  {
                setScheduleData([r[todayIndex]])
            })
        getReplacement(1).then(r => {
            const formatedReplacement = replacementParser(r.text)
            setReplacement(formatedReplacement)
        })
    }, []);
    const logoutButtonPressed = () =>
    {
        dispatch(userLogout())
    }

    const editStatus = () => {
        setIsEditingStatus(true);
        setEditedStatus(userInfo.status);

    };

    const saveStatus = () => {
        setIsEditingStatus(false);

        // Здесь выполните функцию по изменению статуса с помощью editedStatus
    };

    return (
        <View style={styles.container}>
            <View style={styles.boxStyle}>
                <Text style={styles.label}>
                    {userInfo.first_name} {userInfo.last_name }
                </Text>
                <View style={styles.inputContainer}>
                    {isEditingStatus ? (
                        <TextInput
                            style={styles.input}
                            value={editedStatus}
                            onChangeText={(text) => setEditedStatus(text)}
                            multiline={true}
                        />
                    ) : (
                        <TouchableOpacity onPress={editStatus}>
                            <Text style={userInfo.status ? styles.status: styles.nullableStatus}>{userInfo.status ?? "расскажите о себе"}</Text>
                        </TouchableOpacity>
                    )}
                    {isEditingStatus && (
                        <Button style={styles.button} title="Сохранить" onPress={saveStatus} />
                    )}
                </View>

            </View>
            <Schedule data={scheduleData}></Schedule>
            <Text style={styles.label}>Замены</Text>
            <Replacement data={replacement}></Replacement>

            <View style={styles.container}>
                <Button style={styles.button} title="выйти" onPress={logoutButtonPressed} />
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {  flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    boxStyle: {
        borderRadius: 15,
        marginBottom: 10,
        alignItems: "flex-start",
    },
    label: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
    },
    inputContainer: {
      flexDirection: "row"
    },
    input: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        width: 200,
        maxWidth:200,

    },
    status: {
        fontSize: 16,
    },
    nullableStatus: {
        fontSize: 16,
        color:"grey"
    },
    button: {
        height: 100,
        width: 100
    }
});

export default ProfileScreen;