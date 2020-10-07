import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from './Ranges.module.css'

function HW11() {
    const [value1, setValue1] = useState(50);
    const [value2, setValue2] = useState([40,60]);

    return (
        <div className={s.hw11}>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.simpleRange__block}>
                <span>{value1}</span>
                <SuperRange onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.doubleRange}>
                <div className={s.doubleRange__sum}>
                    <span>{value2[0]}</span>
                    <span>{value2[1]}</span>
                </div>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                    onChangeRange={setValue2}
                    min={0}
                    max={100}
                    defaultValue={[value2[0], value2[1]]}
                    marks={{0: 0, 100: 100}}
                />

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
