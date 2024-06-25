import styles from "./Header.module.css"
import logo from "../assets/ignite_simbol.svg"
export function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src={logo} alt="Logo"></img>
                <strong >Ignite Feed</strong>
            </header>
        </>
    );
}