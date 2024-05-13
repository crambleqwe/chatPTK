import {DB_HOST} from "../Config";

const UpdateReplacement = async (date) => {
    const url = `${DB_HOST}/api/admin/update/replacement/${date}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
}
export default UpdateReplacement;
