import React from "react";
import "../css_components/Header.css"

type HeaderProps = {
    tittle: string
}

export default function Header (props: HeaderProps) {

    return (
        <header className="header">
            <img className={"header-logo"} src="/rick-and-morty-31042.png" alt={"logo"}/>
            <h1>{props.tittle}</h1>
        </header>
    )
}