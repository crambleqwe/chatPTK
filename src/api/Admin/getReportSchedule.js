import {DB_HOST} from "../Config";

const getReplacement = async (date) => {
    const url = `${DB_HOST}/api/admin/update/replacement/`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.toString();
}
export default getReplacement;
