import React, {ReactElement} from "react";
import EpisodeCard from "./EpisodesCard";
import "../css_components/EpisodeGallery.css";
import "../App.css"
import {Episode} from "../model/Episode";


type EpisodesGalleryProps = {
    episodes: Episode[]
}

export default function EpisodesGallery(props: EpisodesGalleryProps) {

    const episodesToDisplay: ReactElement[] = props.episodes.map((episode) => <EpisodeCard key={episode.id} episode={episode}/>)

    return (
        <div className={"episode-gallery"}>
            {episodesToDisplay}
        </div>
    )

}
