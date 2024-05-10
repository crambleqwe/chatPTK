import { DB_HOST } from "../Config";

const GetUserGroup = async (user_id) => {
    const url = `https://viseliza.site/api/group/${user_id}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    console.log(data)
    return data;
}
export default GetUserGroup;
