import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import { AppStoreType } from "./bll/store";
import {initialStateType, loadingAC} from "./bll/loadingReducer";
import loader from './image/loader.gif'

function HW10() {
    // useSelector, useDispatch
    let load = useSelector<AppStoreType,  initialStateType>(state => state.loading);
    let dispatch = useDispatch();
    const loading = load.loading;

    const setLoading = () => {
        dispatch(loadingAC(true));
        setTimeout(()=>{dispatch(loadingAC(loading))},2000);
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div ><img src={loader} alt=""/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
