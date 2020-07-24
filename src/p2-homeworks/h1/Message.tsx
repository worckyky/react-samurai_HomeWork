import React from "react";
import style from './Message.module.css';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


const Message = (Props: MessagePropsType) => {
    return (
        <div className={style.message}>
            <div className={style.message__container}>
                <div className={style.message__image}>
                    <img src={Props.avatar} alt=""/>
                </div>
                <div className={style.message__content}>
                    <div className={style.message__wrap}>
                        <h2 className={style.message__user_name}>
                            {Props.name}
                        </h2>
                        <p className={style.message__text}>
                            {Props.message}
                        </p>
                    </div>
                    <span className={style.message__time}>
                    {Props.time}
                    </span>
                </div>

            </div>
        </div>
    );
}

export default Message;
