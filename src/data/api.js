import axios from "axios";

const fetchData = async () => {
    try {
        const response = await axios.get('https://65b7cc9846324d531d558a48.mockapi.io/actus');
        return response.data;
    } catch (error) {
        return error;
    }
};

export default fetchData;