import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const spanStyle = {
        color: "black",
        paddingRight: '16px'
    }
    const pAccent = {
        color: 'red'
    }

    const finalPeople = people.map(peep => (
        <div key={peep._id}>
            <span style={spanStyle}><span style={pAccent}>Имя:</span> {peep.name}</span>
            <span style={spanStyle}> || </span>
            <span style={spanStyle}><span style={pAccent}>Возраст:</span> {peep.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}));
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}));
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}));


    const buttonContainer = {
        display: 'flex',
    }
    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}


            <div style={buttonContainer}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={checkAge}>check 18</SuperButton></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
