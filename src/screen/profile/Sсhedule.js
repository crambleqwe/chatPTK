import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

const Schedule = ({ data }) => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.pairNumber}>{item.pairNumber}</Text>
            <Text style={styles.timeRange}>{item.timeRange}</Text>
            <View style={styles.subjectAndTeacher}>
                <Text style={styles.subject}>{item.lesson}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()} // Ensure key is a string
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        flex: 1, // Make the item full width
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
    subjectAndTeacher: {
        flex: 1,
        flexDirection: "column", // Change to column for subject and teacher to display vertically
    },
    subject: {
        fontSize: 16,
        fontWeight: "normal",
        marginBottom: 5, // Add margin bottom for spacing between subject and teacher
    },
    teacher: {
        fontSize: 16,
        fontWeight: "normal",
    },
});

export default Schedule;
