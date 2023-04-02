import style from "@/app/components/main.module.scss";

export default function WrapperLayoutModule({children}) {
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    )
}
