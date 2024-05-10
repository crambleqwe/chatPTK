import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from "react-native";

const MessageScreen = ({ route, navigation }) => {
    const chat = route.params.chat;
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        navigation.setOptions({ title: chat.name });
    }, []);

    const sendMessage = () => {
        if (message.trim().length > 0) {
            setMessages([{ sender: "me", message }, ...messages]);
            setMessage("");
        }
    };

    const renderMessage = ({ item }) => (
        <View style={item.sender === "me" ? styles.myMessage : styles.otherMessage}>
            <Text style={styles.messageText}>{item.message}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item, index) => index.toString()}
                inverted
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Type a message..."
                />
                <TouchableOpacity onPress={sendMessage}>
                    <Text style={styles.sendButton}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    messagesContainer: {
        flex: 1,
        padding: 20,
    },
    myMessage: {
        alignSelf: "flex-end",
        backgroundColor: "#0084ff",
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
        marginTop: 10,
    },
    otherMessage: {
        alignSelf: "flex-start",
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    messageText: {
        fontSize: 16,
        color: "#fff",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "#ccc",
    },
    input: {
        flex: 1,
        marginRight: 10,
    },
    sendButton: {
        padding: 10,
        backgroundColor: "#0084ff",
        color: "#fff",
        borderRadius: 5,
    },
});

export default MessageScreen;