import React from 'react';
import LoginScreen from "../../screen/LoginScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Авторизация"
                component={LoginScreen}/>
        </Stack.Navigator>
    );
};

export default AuthNavigator;
