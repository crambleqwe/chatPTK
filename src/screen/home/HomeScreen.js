import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import Schedule from "../profile/Sсhedule";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GetUserGroup from "../../api/UserInfo/GetUserGroup";
import getUserSchedule from "../../api/Schedule/GetUserSchedule";

export const schedulePacer = (arrayList) => {
    const scheduleObjectList = [];
    try {
        arrayList.forEach((day) => {
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
    return schedulePacer(scheduleData)

}
export const getUserId = async () => {
    return await AsyncStorage.getItem('userInfo')
}
const HomeScreen = () => {
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
