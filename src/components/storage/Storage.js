import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
    setUserInfoLocally: async (userInfo) => {
        try {
            let userInfoJson = JSON.stringify(userInfo);
            await AsyncStorage.setItem("userInfo", userInfoJson);
        } catch (e) {
            console.error("Ошибка при сохранении данных пользователя в AsyncStorage:", e);
        }
    },
    getUserInfoLocally: async () => {
        try {
            let user = await AsyncStorage.getItem("userInfo");
            return JSON.parse(user);
        } catch (e) {
            console.error("Ошибка при получении данных пользователя из AsyncStorage:", e);
            return null;
        }
    },

    getUserAuth: async () => {
        try {
            let user = await AsyncStorage.getItem("isAuthenticated");
            return await JSON.parse(user);
        } catch (e) {
            console.error("Ошибка при получении данных аунтификации из AsyncStorage:", e);
            return null;
        }
    },
    setUserAuth: async (isAuth) => {
        try {
            let userAuthJson = JSON.stringify(isAuth);
            await AsyncStorage.setItem("isAuthenticated", userAuthJson);
        } catch (e) {
            console.error("Ошибка при сохранении данных пользователя в AsyncStorage:", e);
        }
    }

}
