import { useState } from "react";
import axios from "axios";
import NewsContext from "../context/news-context";

export default function DataProvider({ children }) {

    const [newsData, setnewsData] = useState([]);

    function newsSeter(newData) {
        setnewsData(newData);
    }
    
    async function getNewsData() {
        try {
            const response = await axios.get('https://65b7cc9846324d531d558a48.mockapi.io/loangoserver');
            // setTweetData(response.data.tweets);
            newsSeter(response.data);
            console.log(response.data);
            return response;
        } catch (error) {
            return error;
        }
    }

    // getTweets();
    getNewsData();

    return (
        <NewsContext.Provider value={{ news: newsData, newsSeter }} >
            {children}
        </NewsContext.Provider>
    )
}