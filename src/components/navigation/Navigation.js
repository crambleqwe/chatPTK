import {useSelector} from "react-redux";
import MainTabsNavigator from "./MainTabsNavigator";
import AuthNavigator from "./AuthNavigator";

const Navigation = () => {
    const userAuthenticated = useSelector(state => state.auth.isAuthenticated)
    return (
        userAuthenticated ?  <MainTabsNavigator/> : <AuthNavigator />
    )
}
export default Navigation