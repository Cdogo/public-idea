import { useState, useEffect } from "react";

import Idea from "../idea";

import styles from "./ideafeed.module.css"

export default function IdeaFeed({filter}){

    const [ideas, setIdeas] = useState([])


    useEffect( () => {
        const getIdeas = async (filters) => {
            const data = undefined;
            if (filters === null || filters === undefined){data = await fetch('/api/get-feed-data');}
            else{data = await fetch(`/api/get-feed-data?tags=${filters.join(',')}`);}
            const items = await data.json();
            return items
        }
    
        getIdeas().then((res) => {setIdeas(res); console.log(res)}); 
        
    
    }, [filter]);
    
    console.log(ideas); 
    return(
        <div id = {styles.IdeaFeed}>

            {ideas && ideas.map(idea => 
                <Idea 
                    id = {idea.key} 
                    tags = {idea.tags} 
                    title = {idea.title} 
                    content = {idea.content} 
                    timeCreated = {new Date(ideas.dateCreated)}
                />)}
        </div>
    );
}