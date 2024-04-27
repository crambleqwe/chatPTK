import React from 'react';
import {Image, Text} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../../screen/HomeScreen";
import ProfileScreen from "../../screen/ProfileScreen";
import MessageScreen from "../../screen/MessageScreen";

const Tab = createBottomTabNavigator();

export default function MainTabsNavigator() {
    return (
        <Tab.Navigator  tabBarOptions={{
            style:{ backgroundColor: 'black' },
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
        }}
        >
            <Tab.Screen name="Profile" component={ProfileScreen} options={({ route }) => ({
                tabBarIcon: () => {
                    return (<Image source={require("../../../assets/profileicon.png")}/>) }

            })}
            />
            <Tab.Screen name="Message" component={MessageScreen} options={({ route }) => ({
                tabBarIcon: () => {
                    return (<Image source={require("../../../assets/messagesicon.png")}/>) }
            })}
            />
            <Tab.Screen name="Home" component={HomeScreen} options={({ route }) => ({
            tabBarIcon: () => <Image source={require("../../../assets/house-2icon.png")}/>

        })}/>
        </Tab.Navigator>
    );
}
