import {DB_HOST} from "../Config";

const UpdateSchedule = async () => {
    const url = `${DB_HOST}/api/admin/update/schedule`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
}
export default UpdateSchedule;
