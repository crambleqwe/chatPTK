import {DB_HOST} from "../Config";

const GetUserGroup = async (user_id) => {
    const url = `${DB_HOST}/api/group/${user_id}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
}
export default GetUserGroup;
