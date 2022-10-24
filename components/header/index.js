import styles from './header.module.css'

export default function Header(){
    return(
        <>
            <header id = {styles.header}>
                <h1 id = {styles.logo}>Public Idea</h1>
                <nav id = {styles.navbar}>
                </nav>
            </header>
        </>
    )
}