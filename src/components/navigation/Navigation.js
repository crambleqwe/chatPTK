import {useDispatch, useSelector} from "react-redux";
import MainTabsNavigator from "./MainTabsNavigator";
import AuthNavigator from "./AuthNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {userLogin} from "../../redux/action/Auth";
import {useEffect} from "react";

const Navigation = () => {
    const dispatch = useDispatch();
    const userAuthenticated = useSelector(state => state.userInfo.user.isAuthenticated);
    console.log('userAuthenticated: ', userAuthenticated)
    useEffect(() => {
        const loadAuthState = async () => {
            const isAuthenticated = await AsyncStorage.getItem('isAuthenticated');
            if (isAuthenticated === 'true') {
                dispatch(userLogin());
            }
        };
        loadAuthState();
    }, []);

    return (
        userAuthenticated ? <MainTabsNavigator /> : <AuthNavigator />
    );
};

export default Navigation