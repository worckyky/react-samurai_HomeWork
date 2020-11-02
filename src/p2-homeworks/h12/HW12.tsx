import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, themeType} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, themeType>(state => state.theme);
    const dispatch = useDispatch();
    const onChangeHandler = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }
    return (
        <div className={s[theme.theme]}>
            
            <hr/>
            <span className={s[theme.theme + '-text']}>
                homeworks 12
            </span>
            <div className={s.themeSwitcher__block}>
                <SuperRadio name={'radio2'} options={themes} value={theme.theme} onChangeOption={onChangeHandler} />
            </div>
            <hr/>

        </div>
    );
}

export default HW12;
