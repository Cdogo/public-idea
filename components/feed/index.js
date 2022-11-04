import FeedFilter from "../feedfilter";
import IdeaFeed from "../ideafeed";

import styles from "./feed.module.css";

export default function Feed(){
    return(
    <div id = {styles.feed}>
        <FeedFilter/>
        <IdeaFeed filters = {null}/>
    </div>);
}