import React, {ChangeEvent} from "react";
import {useLocation} from "react-router-dom";


type SearchCharacterProps = {
    searchText: (searchText: string) => void,
    searchValue: string

}

export default function SearchCharacter(props: SearchCharacterProps) {
    const location = useLocation();
    function handleOnChangeSearchText(event: ChangeEvent<HTMLInputElement>) {
        props.searchText(event.target.value)
    }


    return location.pathname!== "/characters"? <></>: (
        <>
            <p>Search for characters</p>
            <input value={props.searchValue} onChange={handleOnChangeSearchText}/>
        </>

    )

}