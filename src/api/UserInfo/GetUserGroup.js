import { DB_HOST } from "../Config";

const GetUserGroup = async function (user_id) {
    try {
        const response = await fetch(`${DB_HOST}/api/group/${user_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data ?? false;
    } catch (error) {
        console.log(error);
    }
    return false;
};
export default GetUserGroup;
