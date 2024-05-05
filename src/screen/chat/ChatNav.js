import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from "./ChatScreen";
import ChatDetailScreen from "./ChatDetailScreen";

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
                component={ChatDetailScreen}
                navigationOptions={{
                    tabBarStyle: {display:"none"}
                }}
            />
        </Stack.Navigator>
    )
}
export default ChatNav