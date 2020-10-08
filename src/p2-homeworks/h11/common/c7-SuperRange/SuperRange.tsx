import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./SuperRange.module.css";

// тип пропсов обычного инпута
export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRangeOne?: (value: number) => void,
    onChangeRangeTwo?: (value: [number, number]) => void,
    defaultSecondPoint: number
    RangeValue: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRangeOne,
        RangeValue,
        onChangeRangeTwo,
        className,
        defaultSecondPoint,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e); // сохраняем старую функциональность
        onChangeRangeOne && onChangeRangeOne(+e.currentTarget.value);
        onChangeRangeTwo && onChangeRangeTwo([+e.currentTarget.value , defaultSecondPoint]);
        // console.log(defaultSecondPoint)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ""}`;

    return (
        <>
            <input
                type={"range"}
                value={RangeValue}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </>
    );
}

export default SuperRange;
