import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '';


    return (
        <div className={s.greetingContainer}>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <span style={{color: "red", paddingLeft: '16px', paddingRight: '16px'}}>{error}</span>
        </div>
    );
}

export default Greeting;
