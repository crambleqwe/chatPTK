import {DB_HOST} from "../Config";

const GetUserProfile = async (userID) => {
    const url = `${DB_HOST}/api/profile/${userID}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    //console.log(data)
    return await response.json();
}
export default GetUserProfile;
