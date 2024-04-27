import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from "react-redux";
import store from "./src/redux/store/store";
import Navigation from "./src/components/navigation/Navigation";

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
