import "../css_components/Navigation.css"
import {NavLink} from "react-router-dom";
export default function Navigation() {

    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox"/>
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">
                <li><NavLink to="/" className="menu__item">Home</NavLink></li>
                <li><NavLink to="/" className="menu__item">Characters Gallery</NavLink></li>
                <li><NavLink to="/episodes" className="menu__item">Episodes Gallery</NavLink></li>
                <li><NavLink to="/" className="menu__item">Contact</NavLink></li>
            </ul>
        </div>


    )


}










