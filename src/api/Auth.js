import axios from 'axios';

const login = async function (login: string, password: string) {
    try {
        const response = await axios({
            method: 'POST',
            url: 'https://portal.novsu.ru/s.login/',
            data: new URLSearchParams({
                json: '1',
                uid: login,
                password
            }).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        return await response.data?.user ?? false;
    } catch (error) {
        console.log(error);
    }
    return false;
};

export default login