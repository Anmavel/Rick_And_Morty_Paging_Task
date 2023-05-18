import React, {ReactElement} from "react";
import EpisodeCard from "./EpisodesCard";
import "../css_components/EpisodeGallery.css";
import "../App.css"
import {Episode} from "../model/Episode";
import {useParams} from "react-router-dom";

type EpisodesGalleryProps = {
    episodes:Episode[]
}

function EpisodesGallery(props:EpisodesGalleryProps){
    const params = useParams()
    const id:number|undefined = Number(params.id)

    const thereIsAParam = !!id
    const resultToMap = !!thereIsAParam ? props.episodes.filter(e => e.id === id): props.episodes
    const fancyCard:ReactElement[] = resultToMap.map((episode) => <EpisodeCard key={episode.id} episode={episode}/>)

    return (
        <div className={"episode-gallery"}>
            {fancyCard}
        </div>
    )

}

export default EpisodesGallery