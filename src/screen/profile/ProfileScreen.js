import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {userLogout} from "../../redux/action/Auth";
import {getSchedule, getUserId} from "../home/HomeScreen";
import Schedule from "./Sсhedule";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getUserSchedule from "../../api/UserInfo/GetUserSchedule";
import {log} from "expo/build/devtools/logger";
import getUserProfile from "../../api/UserInfo/GetUserProfile";
const ProfileScreen = () => {
    const [scheduleData, setScheduleData] = useState()
    const [userInfo, setUserInfo] = useState('');
    const dispatch = useDispatch()
    const date = new Date()
    const todayIndex = date.getDay() - 1


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
    }, []);
    const logoutButtonPressed = () =>
    {
        dispatch(userLogout())
    }
    return (
        <View style={styles.container}>
            <View style={styles.boxStyle}>
                <Text style={styles.label}>
                    {userInfo.first_name} {userInfo.last_name }
                </Text>
            </View>
            <Schedule data={scheduleData}></Schedule>

            <View style={styles.container}>
                <Button style={styles.button} title="выйти" onPress={logoutButtonPressed} />
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});

export default ProfileScreen