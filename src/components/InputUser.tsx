import {ChangeEvent} from "react";

type InputUserProps={

    setText(text:string):void
}

export default function InoutUser(props:InputUserProps){

    function handleInput(event:ChangeEvent<HTMLInputElement>){
        console.log(event.target.value);
        props.setText(event.target.value)
    }

    return(
        <input onChange={handleInput}/>
    );



}