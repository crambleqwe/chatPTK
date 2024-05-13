import React, { useState } from "react";
import {View, Text, StyleSheet, FlatList, ScrollView, Dimensions} from "react-native";

const Schedule = ({ data }) => {
    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <Text style={styles.dayTitle}>{item.day}</Text>
            {item.schedule.map((scheduleItem) => (
                <View key={scheduleItem.id} style={styles.scheduleItem}>
                    <Text>{scheduleItem.timeRange} </Text>
                    <View style={styles.scheduleInfo}>
                        <Text >{scheduleItem.info}</Text>
                    </View>

                </View>
            ))}
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",

    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",

    },
    pairNumber: {
        fontSize: 16,
        fontWeight: "bold",
        width: 30,
        textAlign: "center",
    },
    timeRange: {
        fontSize: 16,
        fontWeight: "normal",
        width: 100,
        paddingHorizontal: 10,
    },
    dayTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'black'
    },
    scheduleItem: {
        marginLeft: 20,
        fontSize: 16,
        flexDirection:"row",
        width: Dimensions.get('window').width - 160
    },
    scheduleInfo: {
        flexWrap: "wrap",
        flexDirection: "row",
    }

});

export default Schedule;
