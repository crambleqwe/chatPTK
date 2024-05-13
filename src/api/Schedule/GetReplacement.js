import { DB_HOST } from "../Config";

const GetReplacement = async (date) => {
    const url = `${DB_HOST}/api/replacement/11.05.2024`; //дата поставлена потому что на день, когда снимается видео работы приложения замен нет
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
export default GetReplacement;
