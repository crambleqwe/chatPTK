import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import Schedule from "../profile/Sсhedule";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GetUserGroup from "../../api/UserInfo/GetUserGroup";
import getUserSchedule from "../../api/Schedule/GetUserSchedule";

export const splitStringBeforeDays = (arrayList) => {
    const scheduleObjectList = [];
    try {
        arrayList.forEach((day) => {
            //console.log("day : ", day);
            // Создаем новый объект для каждого дня
            const scheduleObject = {
                day: day[0],
                schedule: []
            };

            day.slice(1).forEach((element, index) => {
                const pair = element.split('|');
                scheduleObject.schedule.push({
                    id: index + 1,
                    timeRange: pair[0],
                    info: pair[1]
                });
            });

            scheduleObjectList.push(scheduleObject);
            //console.log(scheduleObjectList);
        });

        return scheduleObjectList;
    } catch (error) {
        console.log(error);
    }
};
export const getSchedule = async () => { // получаем номер группы пользователя
    const response = await getUserId();
    const temp = JSON.parse(response)
    const user_id = JSON.parse(temp).user_id // разобраться почему так работает
    console.log("user_id: ", user_id)
    const userGroupName = await GetUserGroup(user_id)
    const scheduleResponse = await getUserSchedule(userGroupName.name)
    //console.log(scheduleResponse)
    const scheduleData =  scheduleResponse.scheduleList
    //console.log(parseScheduleData)
    return splitStringBeforeDays(scheduleData)

}
export const getUserId = async () => {
    return await AsyncStorage.getItem('userInfo')
}
const HomeScreen = () => {
    const [userGroup, setUserGroup] = useState('')
    const [replacementData, setReplacementData] = useState([
        {
            id: 1,
            pairNumber: 2,
            timeRange: "10:20 - 12:00",
            subject: "Информатика",
            teacher: "Смирнов А.А.",
        },
        {
            id: 2,
            pairNumber: 4,
            timeRange: "14:35 - 16:15",
            subject: "Обществознание",
            teacher: "Коновалова Е.Е.",
        },
    ])
    const [scheduleData, setScheduleData] = useState()


    useEffect(() => {

        getSchedule().then(r => setScheduleData(r))
    }, []);
    return (
            <View style={styles.container}>
               <Schedule data={scheduleData}></Schedule>
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
        backgroundColor: "grey",
        padding: 30,
        borderRadius: 15,
        marginBottom: 10,
        alignItems: "center",
    },
    label: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
    },
});

export default HomeScreen;
