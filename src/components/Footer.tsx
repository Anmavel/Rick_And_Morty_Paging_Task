import "../css_components/Footer.css"
import React from "react";
export default function Footer(){
    const today = new Date()
    return(
        <footer className={"footer"}>
            copyright &copy;{today.getFullYear()}<br/>
            <a href="https://www.freepnglogos.com/pics/rick-and-morty">Rick And Morty from freepnglogos.com</a>
        </footer>


    )
}