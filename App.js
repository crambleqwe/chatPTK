import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Provider, useDispatch} from "react-redux";
import store from "./src/redux/store/store";
import Navigation from "./src/components/navigation/Navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {userLogin} from "./src/redux/action/Auth";

const App = () => {
    return (
        <Provider store={store}>

            <NavigationContainer>
                <Navigation>

                </Navigation>
            </NavigationContainer>

        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App
