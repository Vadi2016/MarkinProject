import styles from './home.module.scss'
import SideBarModule from "./sidebar.module";

export default function MainLayout({children}) {
    return (
        <main className={styles.main}>
            <SideBarModule/>
            {children}
        </main>
    )
}
