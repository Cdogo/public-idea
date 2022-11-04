import styles from './header.module.css'

export default function Header(){
    return(
        <>
            <header id = {styles.header}>
                <h1 id = {styles.logo}>Project</h1>
                <nav id = {styles.navbar}>
                </nav>
            </header>
        </>
    )
}