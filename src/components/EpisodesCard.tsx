import React, {} from "react";
import "../css_components/EpisodeCard.css"
import {Episode} from "../model/Episode";
import {Link} from "react-router-dom";

type EpisodeCardProp = {
    episode: Episode,
}

function EpisodeCard(props:EpisodeCardProp){



    return (
        <div className={"episode-card"}>
            <h3>{props.episode.name}</h3>
            <p>Id:{props.episode.id}  AirDate: {props.episode.air_date}</p>
            <div>{props.episode.characters.map(character=> <Link key={character} to={"../characters/"+character.split("/").slice(-1)}>
                {"Character: "+character.split("/").slice(-1)+" "}</Link>)}</div>


        </div>
    )
}


export default EpisodeCard