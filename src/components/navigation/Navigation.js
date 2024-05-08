import {useDispatch, useSelector} from "react-redux";
import MainTabsNavigator from "./MainTabsNavigator";
import AuthNavigator from "./AuthNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {userLogin} from "../../redux/action/Auth";
import {useEffect} from "react";

const Navigation = () => {
    const dispath = useDispatch()
    const userAuthenticated = useSelector(state => state.auth.isAuthenticated)
    useEffect(() => {
        // Загружаем состояние аутентификации из хранилища
        AsyncStorage.getItem('isAuthenticated').then(
            (response) => {
                console.log(response)
                if(response === 'true') {dispath(userLogin())}
            }
        );
    }, []);
    return (
        userAuthenticated ?  <MainTabsNavigator/> : <AuthNavigator />
    )
}
export default Navigation