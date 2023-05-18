import React, {} from "react";
import "../css_components/EpisodeCard.css"
import {Episode} from "../model/Episode";
import {Link, useParams} from "react-router-dom";

type EpisodeCardProp = {
    episode: Episode,
}

function EpisodeCard(props:EpisodeCardProp){

    const charactersIdsInTheGivenEpisode = props.episode.characters.map(character => character.split("/").slice(-1))

    const params = useParams()
    const id:number|undefined = Number(params.id)



    return (
        <div className={"episode-card"}>
            <h3>{props.episode.name}</h3>
            <p>Id:{props.episode.id}  AirDate: {props.episode.air_date}</p>
            <a href={props.episode.episode}>{props.episode.name}</a>
            <p>Characters in episode:</p>
            <ul>
                {charactersIdsInTheGivenEpisode.map(characterId => <li>
                    <Link to={"../characters/" + characterId}>
                        Character No. {characterId}
                    </Link>
                </li>)}
            </ul>

        </div>
    )
}


export default EpisodeCard