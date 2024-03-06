import React, { useState, useEffect } from 'react';
import fetchData from "../data/api";
import Actu from './actu';

export default function Actus() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const fetchedData = await fetchData();
                setData(fetchedData);
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, []);
    
    return (
        <>
            {
                data.map((actu, index) => {
                    return <Actu actu={actu} key={index} />
                })
            }
        </>
    )
}