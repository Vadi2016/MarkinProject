import style from "@/app/components/logo.module.scss"
import Image from "next/image";
import logo from "../../public/logo.png"

export default function LogoModule() {
    return (
        <div className={style.logo}>
            <Image src={logo} alt="logo"/>
        </div>
    )
}
