import React, { useContext, useEffect } from "react";
import useNewsStore from "../context/news-context";
import Actu from "./actu";

export default function News() {
    const { news, getNewsData } = useNewsStore();

    useEffect(() => {
        getNewsData();
    }, []);

    const newsArray = [...news].reverse();

    return (
        <div className="flex justify-center gap-20 flex-wrap">
            {newsArray.map((newsData, index) => (
                <Actu newsData={newsData} key={index} />
            ))}
        </div>
    );
}