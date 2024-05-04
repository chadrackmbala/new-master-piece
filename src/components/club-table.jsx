import React, { useContext, useEffect } from "react";
import useClubStore from "../context/clubTableContext";
import Ctabe from "./c-table";

export default function ClubTable () {
    const { clubData, getClubData } = useClubStore();

    useEffect(() => {
        getClubData();
    }, []);

    const newsArray = [...clubData].reverse();

    return (
        <div className="">
            {newsArray.map((clubData, index) => (
                <Ctabe clubData={clubData} key={index} />
            ))}
        </div>
    );
}
