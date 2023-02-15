import React from "react";

type Props={
    name:string
 }
export default function Greetings(props:Props){

    return(
        <><h1>Hello {props.name}</h1></>
    )
}

