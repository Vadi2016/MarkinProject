import LogoModule from "@/app/components/logo.module";
import style from "@/app/components/sidebar.module.scss"
import DropdownItem from "@/app/components/dropdown.item";
import lek from '@/public/lek.png'
import milk from '@/public/milk.png'
import water from '@/public/watter.png'
import shoos from '@/public/shoos.png'
import tabak from '@/public/tabak.png'
import parfum from '@/public/parfum.png'
import shorts from '@/public/shorts.png'
import photo from '@/public/photo.png'
import tiers from '@/public/tiers.png'
import shuba from '@/public/shuba.png'
import {useState} from "react";

export default function SideBarModule() {
    const [categoriesProduct] = useState([
        {
            name: "Табак",
            image: tabak,
        },
        {
            name: "Лекарства",
            image: lek,
        },
        {
            name: "Обувь",
            image: shoos,
        },
        {
            name: "Молочная продукция",
            image: milk,
        },
        {
            name: "Упакованная вода",
            image: water,
        },
        {
            name: "Парфюмерия",
            image: parfum,
        },
        {
            name: "Одежда и текстиль",
            image: shorts,
        },
        {
            name: "Фототехника",
            image: photo,
        },
        {
            name: "Шины",
            image: tiers,
        },
        {
            name: "Шуба",
            image: shuba,
        },
    ]);

    const [isShowProducts, setIsShoProducts] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState({name: 'Молочная продукция'})

    return (
        <div className={style.sidebar}>
            <LogoModule/>
            <div className={style.menu}>
                <div className={style.menuItem} onClick={() => setIsShoProducts(!isShowProducts)}>
                    <div>
                        <div className={style.dropdownTitle}>
                            Группа товаров
                        </div>
                        <div className={style.dropdownSelected}>
                            {selectedProduct.name}
                        </div>
                    </div>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1.05139 1.11444C1.37683 0.789002 1.90446 0.789002 2.2299 1.11444L7.00037 5.88491L11.7708 1.11444C12.0963 0.789002 12.6239 0.789002 12.9494 1.11444C13.2748 1.43988 13.2748 1.96751 12.9494 2.29295L7.58963 7.65268C7.26419 7.97811 6.73655 7.97811 6.41112 7.65268L1.05139 2.29295C0.725953 1.96751 0.725953 1.43988 1.05139 1.11444Z"
                              fill="#75808A"/>
                    </svg>
                    {isShowProducts &&
                        <div className={style.dropdownMenu}>
                            {categoriesProduct.map(({image, name}, index) =>
                                <DropdownItem key={index} onClick={() => setSelectedProduct({name: name})} image={image} name={name} className={style.dropdownItem}/>)
                            }
                        </div>
                    }

                </div>

                <div className={style.menuItem}>
                    <div>
                        <div className={style.dropdownTitle}>
                            Производитель
                        </div>
                        <div className={style.dropdownSelected}>Домик в деревне</div>
                    </div>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1.05139 1.11444C1.37683 0.789002 1.90446 0.789002 2.2299 1.11444L7.00037 5.88491L11.7708 1.11444C12.0963 0.789002 12.6239 0.789002 12.9494 1.11444C13.2748 1.43988 13.2748 1.96751 12.9494 2.29295L7.58963 7.65268C7.26419 7.97811 6.73655 7.97811 6.41112 7.65268L1.05139 2.29295C0.725953 1.96751 0.725953 1.43988 1.05139 1.11444Z"
                              fill="#75808A"/>
                    </svg>
                </div>
                <div className={style.menuItem}>
                    <div>
                        <div className={style.dropdownTitle}>
                            Поставщик
                        </div>
                        <div className={style.dropdownSelected}>ООО Ромашка</div>
                    </div>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1.05139 1.11444C1.37683 0.789002 1.90446 0.789002 2.2299 1.11444L7.00037 5.88491L11.7708 1.11444C12.0963 0.789002 12.6239 0.789002 12.9494 1.11444C13.2748 1.43988 13.2748 1.96751 12.9494 2.29295L7.58963 7.65268C7.26419 7.97811 6.73655 7.97811 6.41112 7.65268L1.05139 2.29295C0.725953 1.96751 0.725953 1.43988 1.05139 1.11444Z"
                              fill="#75808A"/>
                    </svg>
                </div>
                <div className={style.menuItem}>
                    <div className="">
                        <div className={style.dropdownTitle}>Период</div>
                        <div className={style.dropdownSelected}>25.03-01.04.2023</div>
                    </div>
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.7587 2.42199C12.0842 2.09656 12.0842 1.56892 11.7587 1.24348C11.4333 0.918044 10.9057 0.918044 10.5802 1.24348L6.0026 5.8211L1.42222 1.24072C1.09679 0.915284 0.569148 0.915284 0.243711 1.24072C-0.0817257 1.56616 -0.0817252 2.0938 0.243711 2.41923L4.82409 6.99961L0.243711 11.58C-0.0817251 11.9054 -0.0817257 12.4331 0.243711 12.7585C0.569148 13.0839 1.09679 13.0839 1.42222 12.7585L6.0026 8.17812L10.5802 12.7557C10.9057 13.0812 11.4333 13.0812 11.7587 12.7557C12.0842 12.4303 12.0842 11.9027 11.7587 11.5772L7.18111 6.99961L11.7587 2.42199Z"
                            fill="#75808A"/>
                    </svg>
                </div>
                <button className={style.acceptBtn}>
                    Применить
                </button>
            </div>
        </div>
    )
}

