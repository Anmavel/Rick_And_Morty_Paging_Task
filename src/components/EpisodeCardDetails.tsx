import React, {} from "react";
import "../css_components/EpisodeCard.css"
import "../css_components/EpisodeCardDetails.css"
import {Episode} from "../model/Episode";
import {Link, useParams} from "react-router-dom";

type EpisodeCardProp = {
    episodes: Episode[]
}

export default function EpisodeCard(props: EpisodeCardProp) {
    const params = useParams()
    const id: string | undefined = params.id;
    if (!id) {
        return <div>ID is undefined</div>
    }

    const foundEpisode: Episode | undefined = props.episodes.find((found) => (found.id === parseInt(id)))
    console.log(id)
    if (!foundEpisode) {
        return <div className={"episode-details"}>
            <div>
                <p>Episode not fetched yet</p>
                <Link to={"/episodes"}>Back To Episodes</Link>
            </div>
        </div>;
    }


    return (
        <div className={"episode-details"}>
            <div className={"episode-card"}>
                <h3>{foundEpisode.name}</h3>
                <p>Id:{foundEpisode.id} AirDate: {foundEpisode.air_date}</p>
                <h3>{foundEpisode.episode}</h3>
                <p>Characters in episode:</p>
                <ul>
                    {foundEpisode.characters.map(character => <li key={character}>
                        <Link to={"../characters/" + character.split("/").slice(-1)}>
                            {"Characters: "+ character.split("/").slice(-1)+" "}
                        </Link>
                    </li>)}
                </ul>
                <Link to={"/episodes"}>Back To Episodes</Link>
            </div>
        </div>
    )
}
