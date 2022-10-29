import styles from './feedfilter.module.css'

export default function FeedFilter(){
    const handleClick = e => {
        e.currentTarget.classList.toggle(styles.Clicked);
        return 0;
    }
    return(
    <div id = {styles.Filter}><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" onClick = {handleClick}><path d="M6.062 13 5 11.938l5-5 5 5L13.938 13 10 9.062Z"/></svg>
        
    </div>);
}