import mapStyle from "@/app/components/map.module.scss";
import {MapContainer, Marker, Polygon, TileLayer, useMap} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import close from '@/public/times.svg'
import {useEffect, useRef, useState} from "react";
import L from "leaflet";
import ModalModule from "./modal.module";
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
                    map.flyTo([56.2425033, 43.8506869], 17)
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
                    position={[56.2430033, 43.8467869]}
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
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h3>Информация о некачественном товаре</h3>
                        <div onClick={() => {
                            map.flyTo([56.00000, 50.000000], 4);
                            setIsShowModal(false);
                            setIsClicked(false);
                        }}>
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.7587 2.42199C12.0842 2.09656 12.0842 1.56892 11.7587 1.24348C11.4333 0.918044 10.9057 0.918044 10.5802 1.24348L6.0026 5.8211L1.42222 1.24072C1.09679 0.915284 0.569148 0.915284 0.243711 1.24072C-0.0817257 1.56616 -0.0817252 2.0938 0.243711 2.41923L4.82409 6.99961L0.243711 11.58C-0.0817251 11.9054 -0.0817257 12.4331 0.243711 12.7585C0.569148 13.0839 1.09679 13.0839 1.42222 12.7585L6.0026 8.17812L10.5802 12.7557C10.9057 13.0812 11.4333 13.0812 11.7587 12.7557C12.0842 12.4303 12.0842 11.9027 11.7587 11.5772L7.18111 6.99961L11.7587 2.42199Z"
                                    fill="#75808A"/>
                            </svg>
                        </div>
                    </div>

                    <div style={{
                        height: 300,
                        background: '#FFFFFF',
                        border: '1px solid #63666A',
                        width: '100%',
                        borderRadius: 16
                    }}>
                        <img style={{borderRadius: 16, height: 300}} src='/graph.jpg' alt="graph"/>
                    </div>
                    <h3 style={{marginTop: 25, textAlign: "left"}}>Наименование товара</h3>
                    <div style={{textAlign: "left"}}>
                        Сыр
                    </div>
                    <div style={{
                        width: 400,
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: "flex-start"
                    }}>
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
                    <div style={{
                        width: 420,
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: "flex-start"
                    }}>
                        <div style={{maxWidth: 200}}>
                            <h3 style={{marginTop: 25, textAlign: "left"}}>Количество дней до окончания срока
                                годности</h3>
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
                    <div style={{
                        width: 420,
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: "flex-start"
                    }}>
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
    const [position] = useState([56.00000, 50.000000])
    const {geo} = useMyContext()
    return (
        <div className={mapStyle.map}>
            <MapContainer center={position} zoom={4} scrollWheelZoom={false}
                          style={{height: "100%", width: "100%"}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {geo !== undefined && Object.entries(geo.geoH3).map(([key, {id, h3, val, color}], i) => {
                    return <Hexagon key={id} id={id} h3={h3} color={color}/>
                })}
            </MapContainer>
        </div>
    )
}



