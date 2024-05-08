import React from "react";
import {View, Text, StyleSheet, FlatList, ScrollView} from "react-native";
import { useSelector } from "react-redux";
import Schedule from "../profile/Sсhedule";


const HomeScreen = () => {

    const scheduleData = [
        {
            id: 1,
            pairNumber: 1,
            timeRange: "08:30 - 10:10",
            subject: "Математика",
            teacher: "Иванов И.И.",
        },
        {
            id: 2,
            pairNumber: 2,
            timeRange: "10:20 - 12:00",
            subject: "Физика",
            teacher: "Петров П.П.",
        },
        {
            id: 3,
            pairNumber: 3,
            timeRange: "12:45 - 14:25",
            subject: "Русский язык",
            teacher: "Сидорова С.С.",
        },
        {
            id: 4,
            pairNumber: 4,
            timeRange: "14:35 - 16:15",
            subject: "История",
            teacher: "Васильев В.В.",
        },
        {
            id: 5,
            pairNumber: 5,
            timeRange: "16:26 - 18:05",
            subject: "Английский язык",
            teacher: "Кузнецова К.К.",
        },
    ];

    const replacementData = [
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
    ];

    return (
            <View style={styles.container}>

                <FlatList
                    data={["Расписание на сегодня", "Замены на сегодня"]}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <Text style={styles.label}>{item}</Text>
                            <Schedule data={item === "Расписание на сегодня" ? scheduleData : replacementData} />
                        </View>
                    )}
                    keyExtractor={(item) => item}
                />
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
