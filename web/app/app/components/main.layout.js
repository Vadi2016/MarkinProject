import styles from '@/app/components/home.module.scss'
import SideBarModule from "@/app/components/sidebar.module";

export default function MainLayout({children}) {
    return (
        <main className={styles.main}>
            <SideBarModule/>
            {children}
        </main>
    )
}
