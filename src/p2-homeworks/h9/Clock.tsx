import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './timer.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<String>('Нажми на "start" и увидишь актуальное время (͡° ͜ʖ ͡°)');
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            // setDate
            let time = new Date().toLocaleTimeString();
            setDate(time)
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };
    let stringTime = date;
    const stringDate = new Date().toLocaleDateString(); // fix with date

    return (
        <div className={s.timer__container}>
            <div className={s.timer__block}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>


            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
