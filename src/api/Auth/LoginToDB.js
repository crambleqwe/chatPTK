import {DB_HOST} from "../Config";

const LoginToDB = async function (login: string, password: string, first_name, last_name, father_name) {
    try {
        const response = await fetch(`${DB_HOST}/api/user/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login,
                password,
                first_name,
                last_name,
                father_name
            }),
        });

        const data = await response.json();
        return data ?? false;
    } catch (error) {
        console.log(error);
    }
    return false;
};

export default LoginToDB;