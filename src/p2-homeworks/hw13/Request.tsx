import React, {ChangeEvent, useEffect, useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestStateType, setCheckBoxAC, sendRequestTC} from "./RequesReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

const Request = () => {

    const dispatch = useDispatch();

    const info = useSelector<AppStoreType, string>(state => state.request.info);
    const checked = useSelector<AppStoreType, boolean>(state => state.request.checkBox);

    const changeDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCheckBoxAC(e.currentTarget.checked))
    };


    const getDataHandler = () => {
        dispatch(sendRequestTC(checked))
    }

    return (
        <>
            <SuperButton onClick={getDataHandler}>Отправить запрос</SuperButton>
            <SuperCheckbox onChange={changeDataHandler} />
            <div>
                {info || 'Отправьте запрос'}
            </div>
        </>
    )
}


export default Request