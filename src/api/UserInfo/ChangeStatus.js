import {DB_HOST} from "../Config";

const ChangeStatus = async (user_id, valueStatus) => {
    const respone = await fetch(`https://viseliza.site/api/profile/${user_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            status: valueStatus
        })
    })
    return await respone.json()
}


    export default ChangeStatus;
