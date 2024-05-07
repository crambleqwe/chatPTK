import axios from "axios";
import { DB_HOST } from "./Config";

const loginToDB = async (username, password, first_name, last_name, father_name) => {
    try {
        const response = await axios.post(`https://viseliza.site/api/user/auth`, {
            data: {
                login: username,
                password: password,
                first_name: first_name,
                last_name: last_name,
                father_name: father_name,
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default loginToDB;
