import React from "react";
import s from './Error404.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../../Routes";

function Error404() {
    return (
        <div className={s.errorContainer}>
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <NavLink to={PATH.PRE_JUNIOR} className={s.Error__bottom}>Go home</NavLink>
        </div>
    );
}

export default Error404