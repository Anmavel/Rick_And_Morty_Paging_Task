import React, {} from "react";
import "../css_components/EpisodeCard.css"
import {Episode} from "../model/Episode";
import {useNavigate} from "react-router-dom";

type EpisodeCardProp = {
    episode: Episode,
}

export default function EpisodeCard(props: EpisodeCardProp) {

    const navigate=useNavigate()
    function onClick(){
        navigate("/episodes/" +props.episode.id)
    }

    return (
        <div className={"episode-card"}>
            <h3>{props.episode.name}</h3>
            <p>Id:{props.episode.id} AirDate: {props.episode.air_date}</p>
            <h3>{props.episode.episode}</h3>
            <button onClick={onClick}>DETAILS</button>
        </div>
    )
}
