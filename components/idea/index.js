import { useState } from 'react'

import styles from './idea.module.css'

const IdeaFooter = ({id, timeCreated}) => {
    const [favorite, setFavorite] = useState(false)

    const addFavorite = async (e) => {
        console.log(e)
        setFavorite(!favorite);
        return 0;
    }

    return (
        <>
            <div className = {styles.IdeaFooter}>      
                <p className = {styles.timeCreated}>{timeCreated.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }</p>

                <div className = {styles.favorite} onClick = {addFavorite}>
                    <p className = {styles.favorite}>Favorite</p>
                    {favorite ? <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" className = {styles.favorite} fill = '#ffdf00'><path d="m5.062 18 1.313-5.542L2 8.729l5.75-.5L10 3l2.25 5.25 5.75.479-4.375 3.729L14.938 18 10 15.062Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" className = {styles.favorite}><path d="M7.333 14.896 10 13.312l2.688 1.584-.709-3 2.313-1.979-3.063-.271L10 6.792 8.771 9.646l-3.063.271 2.334 1.979ZM5.062 18l1.313-5.542L2 8.729l5.75-.5L10 3l2.25 5.25 5.75.479-4.375 3.729L14.938 18 10 15.062ZM10 11.062Z"/></svg> }
                </div>
            </div>
        </>
    )
}
const Tag = ({key, index}) => {
    return(<>
    <span key = {key} className = {styles.tags}>{{
        "1": "💻Coding/App",
        "2": "🎶Music/Song",
        "3": "🎨Art/Design",
        "4": "👔Buisness",
        "5": "🎮Games",
    }[index]}</span>
    </>);
}
export default function Idea({id, title, tags, content, timeCreated}){
    return(
        <div key = {id} className = {styles.idea}>
            <h1 className = {styles.title}>{title}</h1>
            <div className = {styles.tags}>
                <h4 className = {styles.tags}>Tags: </h4>
                {tags && tags.map(i => <Tag key = {i} index = {i}/>)}
            </div>
            <p className = {styles.content}>{content}</p>
            <IdeaFooter id = {id} timeCreated = {timeCreated}/>
        </div>
    )
}