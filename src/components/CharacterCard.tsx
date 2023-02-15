import React from "react";

type CharacterProp ={
    id:number,
    name:string,
    status:string,
    image:string,
    origin:Origin
}

type Origin={
    name:string
}


export default function CharacterCard(props:CharacterProp){
    return (
            <>
                <div className={"card"}>
                    <h3>{props.name}</h3>
                    <img src={props.image} height="130" width="124"/>
                    <p>Id:{props.id}  Status: {props.status}</p>
                    <p>Origin:{props.origin.name}</p>
                </div>
            </>
    )
}