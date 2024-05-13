import { DB_HOST } from "../Config";

const GetUserSchedule = async (groupName) => {
    const url = `${DB_HOST}/api/schedule/${groupName}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    //console.log(data)
    return data;
}
export default GetUserSchedule;
