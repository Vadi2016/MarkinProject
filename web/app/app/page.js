"use client"

import MainModule from "@/app/components/main.module";
import MainLayout from "@/app/components/main.layout";
import {useEffect} from "react";
import {convertGeoJsonToH3, useMyContext} from "@/app/context/state";

export default function Home({geoH3}) {
    const {addGeoWithout} = useMyContext();
    useEffect(() => {
        const geoH3 = convertGeoJsonToH3()
        addGeoWithout(geoH3)
    }, [])
    return <MainLayout>
        <MainModule/>
    </MainLayout>
}


Home.getInitialProps = async () => {
    const resp = await fetch(`http://217.107.34.8:5001/geo`,  {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'context': [1]})
    })
    const resp_geo = await resp.json()

    console.log(geo)
    return convertGeoJsonToH3(geo)
}


