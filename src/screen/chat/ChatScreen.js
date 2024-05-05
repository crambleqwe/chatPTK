import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import emptyAvatar from "../../../assets/emptyAvatar.png";

const ChatScreen = ({ navigation }) => {
    const [chats, setChats] = useState([
        {
            id: 1,
            name: "1992",
            avatar: "../../../assets/emptyAvatar.png",
        },
        {
            id: 2,
            name: "Матвей Богданов",
            avatar: "../../../assets/emptyAvatar.png",
        },
        {
            id: 3,
            name: "Владислав Иванов",
            avatar: "../../../assets/emptyAvatar.png",
        },
        {
            id: 4,
            name: "Любовь Николаевна",
            avatar: "../../../assets/emptyAvatar.png",
        },
    ]);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Messages", { chat: item })}>
            <View style={styles.chatItem}>
                <Image style={styles.avatar} source={emptyAvatar} />
                <Text style={styles.name}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={chats}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
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
    chatItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default ChatScreen;