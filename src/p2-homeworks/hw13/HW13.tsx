import React from 'react'
import Request from "./Request";
import s from './request.module.css'

const HW13 = () => {
    return (
        <>
            <hr/>
            <span className={s.request__title}>
                        homework 13
                    </span>
            <div className={s.request__container}>
                <div>
                    <Request/>
                </div>
            </div>

        </>
    )
};

export default HW13