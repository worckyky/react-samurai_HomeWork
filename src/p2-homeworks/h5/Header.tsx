import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css'


function Header() {

    const [show, setShow] = useState(false);

    const headerStyles = `${s.header} ${show && s.header_show}`;

    const onMouseEnterHandler = () => {
        setShow(true)
    }

    const onMouseLeaveHandler = () => {
        setShow(false)
    }
    const onMouseClick = () => {
        setShow(!show)
    }

    return (
        <div className={headerStyles} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            <div className={s.headerOpen}>
                Show menu
            </div>
            <div className={s.header__links}>

                <NavLink to={PATH.PRE_JUNIOR} className={s.header__navigationLink} activeClassName={s.header__navigationLink_active}  onClick={onMouseClick}>Pre junior</NavLink>

                <NavLink to={PATH.JUNIOR_PLUS} className={s.header__navigationLink} activeClassName={s.header__navigationLink_active}  onClick={onMouseClick}>Junior plus</NavLink>

            </div>

        </div>
    );
}

export default Header;
