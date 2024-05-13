import React, { useState } from "react";
import {View, Text, StyleSheet, FlatList, ScrollView, Dimensions} from "react-native";

const Replacement = ({ data }) => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.group}</Text>
            <Text style={styles.row_number}>{item.row_number}</Text>
            <Text style={styles.perv}>{item.perv}</Text>
            <Text style={styles.replace}>{item.replace}</Text>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.container}
        />
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    group: {
        fontSize: 14,
        fontWeight: 'bold',
        flex: 1,
    },
    row_number: {
        fontSize: 14,
        fontWeight: 'normal',
        flex: 1,
        textAlign: 'center',
    },
    replace: {
        fontSize: 14,
        fontWeight: 'normal',
        flex: 2,
        margin: 10
    },
    teacher: {
        fontSize: 14,
        fontWeight: 'normal',
        flex: 1,
        textAlign: 'right',
    },
});

export default Replacement;
