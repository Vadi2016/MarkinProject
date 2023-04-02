import style from "./main.module.scss";

export default function WrapperLayoutModule({children}) {
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    )
}
