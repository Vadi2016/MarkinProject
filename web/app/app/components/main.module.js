import style from "./main.module.scss";


import dynamic from "next/dynamic"
import WrapperLayoutModule from "./wrapper.layout.module";
import logout from "../../public/logout.png"
import user from "../../public/user.png"
import Image from "next/image";

const MapModule = dynamic(() => import("./map.module"), { ssr:false })

export default function MainModule( {geo} ) {
    return (
        <div className={style.main}>
            <div className={style.topbar}>
                    <div className={style.item}>Admin</div>
                    <Image className={style.item} src={user} alt="Hello"/>
                    <Image className={style.item} src={logout} alt="Hello" style={{marginRight: 40}}/>
            </div>
            <WrapperLayoutModule>
                <div className={style.title}>Некачественный товар</div>
                <MapModule geo={geo}/>
            </WrapperLayoutModule>
        </div>
    )
}
