import style from "./modal.module.scss";

export default function ModalModule({children}) {
    return (
        <div className={style.wrapper}>
            <div className={style.modal}>
                {children}
            </div>
        </div>
    )
}
