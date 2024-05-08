import React from 'react';
import {Image, Text} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "../../screen/profile/ProfileScreen";
import HomeScreen from "../../screen/home/HomeScreen";
import ChatNav from "../../screen/chat/ChatNav";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function MainTabsNavigator() {
    return (
        <Tab.Navigator   screenOptions={{
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
                display: "flex",
            },
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={({ route }) => ({
                tabBarIcon: () => <Image source={require("../../../assets/house-2icon.png")}/>

            })}/>

            <Tab.Screen
                name="Message"
                component={ChatNav}
                options={({ route }) => ({
                    tabBarVisible: getFocusedRouteNameFromRoute(route) !== "Messages",
                    tabBarIcon: () => {
                        return (<Image source={require("../../../assets/messagesicon.png")}/>)
                    },
                    title: 'Messages',
                })}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} options={({ route }) => ({
                tabBarIcon: () => {
                    return (<Image source={require("../../../assets/profileicon.png")}/>) }

            })}
            />
        </Tab.Navigator>
    );
}
