import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {
    const [text, setText] = useState<string>("");
    const showAlert = () => {
        if (error) {
            alert("введите текст...");
        } else {
            alert(`Вы ввели: ${text}`); // если нет ошибки показать текст
        }
    }
    const error = text ? "" : "Текст отсутствует";
    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                {/*should work (должно работать)*/}
                <div className={s.section_wrapper}>
                    <SuperInputText
                        value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}
                        // inputclassName={s.blue} // проверьте, рабоет ли смешивание классов
                    />
                    {/*should work (должно работать)*/}
                    <SuperButton
                        red // пропсу с булевым значением не обязательно указывать true
                        onClick={showAlert}
                        error={error}
                    >
                        {error ? 'Укажите текст' : 'Вывести текст'} {/*// название кнопки попадёт в children*/}
                    </SuperButton>
                </div>

                {/*should work (должно работать)*/}
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    Один стейт изменяет два чекбокса {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}>
                    Один стейт изменяет два чекбокса
                </SuperCheckbox>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    );
}

export default HW4;
