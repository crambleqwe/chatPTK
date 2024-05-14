import React, {useState, useEffect, useRef} from "react";
import {View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import io from "socket.io-client";
import {DB_HOST} from "../../api/Config";
import {getUserId} from "../home/HomeScreen";
const MessageScreen = ({ route, navigation }) => {
    const chat = route.params.chat;
    const [userID, setUserID] = useState('')
    const [socket, setSocket] = useState('')
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const getUserID = async() =>{
            const response = await getUserId();
            const temp = JSON.parse(response)
            return  JSON.parse(temp).user_id // разобраться почему так работает
        }
        getUserID()
            .then(r => setUserID(r))


        const socketConnection = io(`${DB_HOST}`);
        setSocket(socketConnection)
        socketConnection.on("connect", () => {
            console.log("socket connect status: ", socketConnection.connected)
            socketConnection.emit("join", { first_name: "Данил" }, () => {
                socketConnection.emit("joinRoom", { id: 1, name: "1992" })
            })
            socketConnection.emit("takeMessages", { room_id: 1, row: 0 })
            socketConnection.on("getMessages", async (response) => {
                console.log(response)
                setMessages(response)
            })
            socketConnection.on("message", async (message) => {
                console.log(message)
                setMessages((prevMessages) => [...prevMessages, message]);
            })
        })
        navigation.setOptions({ title: chat.name });
    }, []);
    const messageObjectCreator= (message) => {
        const messageObject = {}
        messageObject.user_id = userID
        messageObject.text = message.trim()
        messageObject.time = new Date()
        messageObject.room = { id: 1, name: "1992" }
        messageObject.room_id = 1
        messageObject.is_read = false
        return messageObject
    }
    const sendMessage = () => {
        if (message.trim().length > 0) {
            const fixedMessage = messageObjectCreator(message)
            socket.emit("createMessage", fixedMessage );
            setMessage("");
        }
    };

    const renderMessage = ({ item }) => (
        <View style={item.user_id === userID ? styles.myMessage : styles.otherMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );
    const flatList = React.useRef(null)
    return (
        <View style={styles.container}>
            <View style={styles.messagesContainer}>
                <FlatList
                    data={messages}
                    renderItem={renderMessage}
                    keyExtractor={item => item.id}
                    ref={flatList}
                    onContentSizeChange={() => {
                        flatList.current.scrollToEnd({animated: true});
                    }}

                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Сообщение"
                />
                <TouchableOpacity onPress={sendMessage}>
                    <Text style={styles.sendButton}>отправить</Text>
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
        backgroundColor: "#cdeae5",
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    messageText: {
        fontSize: 16,
        color: "black",
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