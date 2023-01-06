import Link from "next/link";
import styles from 'styles/Header.module.css'
export default function Header() {
    return (
        <>
        <nav className={styles.sidebar2}>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
        </nav>
        </>
    )
}
