import React from 'react';
import LoginScreen from "../../screen/auth/LoginScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminPanelScreen from "../../screen/admin/AdminPanelScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Авторизация"
                component={LoginScreen}/>
            <Stack.Screen
                name="Администратор"
                component={AdminPanelScreen}/>
        </Stack.Navigator>
    );
};

export default AuthNavigator;
