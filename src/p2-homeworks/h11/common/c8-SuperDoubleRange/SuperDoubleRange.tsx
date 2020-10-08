import React, {ChangeEvent} from "react";
import {Slider} from "antd";
import "antd/dist/antd.css";
import { DefaultInputPropsType } from "../c7-SuperRange/SuperRange";
import {SliderRangeProps} from "antd/lib/slider";



type SuperDoubleRangePropsType =  {
    onChangeRange?: (value: [number, number]) => void,
    onChangeOne?: (value: number) => void,
    marks?: {
        0: number,
        100: number
    },
    defaultValue: [number, number],
    disabled?: boolean,
    min?: number,
    max?: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        // onChangeRange,
        defaultValue,
        onChangeRange,onChangeOne,
        disabled,
        min,
        max,
        marks
    }
) => {
    // сделать самому, можно подключать библиотеки

    const onChangeHandler = (value: [number,number]) => {
        onChangeRange && onChangeRange(value);
        onChangeOne && onChangeOne(value[0]);
    }

    return (
        <>
             <Slider range marks={marks} value={defaultValue} tooltipVisible={true} disabled={disabled} min={min} max={max} onChange={onChangeHandler}  />
        </>
    );
}

export default SuperDoubleRange;
