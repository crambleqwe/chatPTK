import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from "./ChatScreen";
import MessageScreen from "./MessageScreen";

const Stack = createNativeStackNavigator();

const ChatNav = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Chats"
                component={ChatScreen}
            />
            <Stack.Screen
                name="Messages"
                component={MessageScreen}
                navigationOptions={{
                    tabBarStyle: {display:"none"},
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
export default ChatNav