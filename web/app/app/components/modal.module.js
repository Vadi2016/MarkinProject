import style from "@/app/components/modal.module.scss";

export default function ModalModule({children}) {
    return (
        <div className={style.wrapper}>
            <div className={style.modal}>
                {children}
            </div>
        </div>
    )
}
