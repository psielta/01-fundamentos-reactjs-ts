import { Pen, PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';
export function Sidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <img
                    className={styles.cover}
                    src="https://images.unsplash.com/photo-1718124553687-f875b6bf6baf?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></img>
                <div className={styles.profile}>
                    <Avatar
                        src="https://images.unsplash.com/profile-1611126312800-b89dfc7f41c1image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" />
                    <strong>Nome usuário</strong>
                    <span>Profissão</span>

                </div>
                <footer>
                    <a href="#">
                        <PencilLine size="20" />
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </>
    );
}