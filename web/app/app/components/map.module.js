import mapStyle from "./Map.module.scss";
import {MapContainer, Marker, Polygon, TileLayer, useMap} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import {useEffect, useRef, useState} from "react";
import L from "leaflet";
import ModalModule from "./modal.module";
import Image from "next/image";
import graph from "../../public/graph.jpg"
import style from "./modal.module.scss"
import {useMyContext} from "@/app/context/state";

function Hexagon({id, h3, color}) {
    const map = useMap()
    const [isShowModal, setIsShowModal] = useState(false)


    let [pathOptions, setPathOptions] = useState({
        weight: 0.3,
        opacity: 1,
        fillOpacity: 0.5,
        fillColor: color,
        color: "#3388ff", // stroke color
    })

    let [isClicked, setIsClicked] = useState(false)
    return (
        <Polygon
            key={id}
            positions={h3.coordinates}
            pathOptions={pathOptions}
            eventHandlers={{
                click: (event) => {
                    map.flyTo([56.2425033,43.8506869], 17)
                    setTimeout(() => {
                        setIsClicked(true)
                        setPathOptions({
                            weight: 0,
                            opacity: 0,
                            fillOpacity: 0,
                            fillColor: "#fff",
                            color: "#fff", // stroke color
                        })
                    }, 5000)
                }
            }}
        >
            {isClicked ?
                <Marker
                    position={[56.2430033,43.8467869]}
                    icon={redIcon}
                    eventHandlers={
                        {
                            click: (event) => {
                                setIsShowModal(true)
                            }
                        }
                    }
                /> : null
            }
            {isShowModal ? <ModalModule style={{position: 'absolut'}}>
                <div className>
                    <h3>Информация о некачественном товаре</h3>
                    <div style={{height: 300,
                        background: '#FFFFFF',
                        border: '1px solid #63666A',
                        width: '100%',
                        borderRadius: 16}}>
                        <img style={{borderRadius: 16, height: 300}}  src='/graph.jpg' alt="graph"/>
                    </div>
                    <h3 style={{marginTop: 25, textAlign: "left"}}>Наименование товара</h3>
                    <div style={{textAlign: "left"}}>
                        Сыр
                    </div>
                    <div style={{width: 400, display: 'flex', justifyContent: "space-between", alignItems: "flex-start"}}>
                        <div>
                            <h3 style={{marginTop: 25, textAlign: "left"}}>Производитель</h3>
                            <div style={{textAlign: "left"}}>
                                Домик в деревне
                            </div>
                        </div>
                        <div>
                            <h3 style={{marginTop: 25, textAlign: "left"}}>Поставщик</h3>
                            <div style={{textAlign: "left"}}>
                                ООО Ромашка
                            </div>
                        </div>
                    </div>
                    <div style={{width: 420, display: 'flex', justifyContent: "space-between", alignItems: "flex-start"}}>
                        <div style={{maxWidth: 200}}>
                            <h3 style={{marginTop: 25, textAlign: "left"}}>Количество дней до окончания срока годности</h3>
                            <div style={{textAlign: "left"}}>
                                93
                            </div>
                        </div>
                        <div>
                            <h3 style={{marginTop: 25, textAlign: "left"}}>Срок годности</h3>
                            <div style={{textAlign: "left"}}>
                                до 07.10.2023
                            </div>
                        </div>
                    </div>
                    <div style={{width: 420, display: 'flex', justifyContent: "space-between", alignItems: "flex-start"}}>
                        <div>
                            <h3 style={{marginTop: 25, textAlign: "left"}}>Название магазина</h3>
                            <div style={{textAlign: "left"}}>
                                Перекресток, супермакет
                            </div>
                        </div>
                        <div>
                            <h3 style={{marginTop: 25, textAlign: "left"}}>Адрес магазина</h3>
                            <div style={{textAlign: "left"}}>
                                Нижний Новгород, Молодежный
                                проспект, 33
                            </div>
                        </div>
                    </div>
                    <div className={style.btn}>
                        Скачать в pdf
                    </div>
                </div>
            </ModalModule> : null}
        </Polygon>
    )
}

const redIcon = L.icon({iconUrl: "/red.svg"});
const blueIcon = L.icon({iconUrl: "/blue.svg"});

export default function MapModule() {
    const [position] = useState([60.00000, 100.000000])
    const {geo} = useMyContext()
    return (
        <div className={mapStyle.map}>
            <MapContainer center={position} zoom={4} scrollWheelZoom={false}
                          style={{height: "100%", width: "100%"}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {geo !== undefined && Object.entries(geo.geoH3).map(( [key, {id, h3, val, color}], i) => {
                    return <Hexagon key={id} id={id} h3={h3} color={color}/>
                })}
            </MapContainer>
        </div>
    )
}



