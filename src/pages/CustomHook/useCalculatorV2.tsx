import React, { useState, useEffect } from 'react';
import sound_click_path from './sound_click.wav';
import useSound from 'use-sound';
import sound_operator_path from './sound_operator.wav';
import sound_total_path from './sound_total.wav';
type TOperator = '+' | '-' | '*' | '/';
interface IState {
    value: number;
    operator: TOperator | null;
    total: number | null;
    display_text: string;
    previous_value: number;
    //เก็บเผื่อคน combo
    previos_base_value: number | null;
}

const useCalculatorV2 = () => {
    const [calculationState, setCalculationState] = useState<IState>({ value: 0, operator: null, total: null, display_text: '', previous_value: 0, previos_base_value: null });
    //เอาไว้เช็ค่ว่าเราเพิ่งกดปุ่ม Operator ไปหรือเปล่า
    const [isJustPressedOperator, setIsJustPressOperator] = useState<boolean>(false);
    const [isFirstUsed, setIsFirstUsed] = useState<boolean>(true);
    const [playNumberSound] = useSound(sound_click_path);
    const [playOperatorSound] = useSound(sound_operator_path);
    const [playTotalSound] = useSound(sound_total_path);

    function setCalculationValue(value: number) {
        console.log('[Debug]: set value == ' + value);

        playNumberSound();

        if (isJustPressedOperator) {
            //เก็บค่าเก่าก่อนหน้า
            setCalculationState((prevState) => {
                //ถอดจาก display_text เพราะค่า value รับเป็นเลขตัวเดียว
                return { ...prevState, previous_value: parseInt(prevState.display_text) };
            });
            //กดเลขใหม่
            clearDisplayText();
            setIsJustPressOperator(false);
            setTotal(null);
        }
        //เอาค่าของตัวเลขมาต่อกัน
        setCalculationState((prevState) => ({
            ...prevState,
            value,
            // String + Number = การเอา String ล่าสุดไปต่อ number
            display_text: prevState.display_text + value,
            //เผื่อใช้เป็น combo
            previos_base_value: parseInt(prevState.display_text + value),
        }));
    }

    //show Display Text
    function getCurrentDisplayText(): IState['display_text'] {
        //set Total !== null เพราะ 0 มองเป็น null ได้
        if (calculationState.total !== null) return calculationState.total.toString();
        else return calculationState.display_text;
    }
    //show Operator
    function setOperator(operator: TOperator) {
        console.log('[Debug]: set Operator == ' + operator);
        playOperatorSound();
        setCalculationState((prevState) => ({
            ...prevState,
            operator,
            //สิ้นสุด combo เมื่อกด operator
            previos_base_value: null,
        }));
        setIsJustPressOperator(true);
    }
    //เอา Operator ไปโชว์
    function getOperator(): IState['operator'] | '' {
        if (calculationState.operator === null) return '';
        return calculationState.operator;
    }
    function deletePrevNumber() {
        playOperatorSound();
        setCalculationState((prevState) => {
            const subbed_string = prevState.display_text.substring(0, prevState.display_text.length - 1);
            return { ...prevState, display_text: subbed_string };
        });
    }

    function clearDisplayText() {
        setCalculationState((prevState) => {
            return { ...prevState, display_text: '' };
        });
        // clear หลังคำนวณเสร็จให้กด C ได้
        setTotal(null);
    }

    function onCalculate() {
        console.log('[Debug]: Calculate');
        playTotalSound();
        //destucture ถอดรูปออกมาจาก object ให้เขียนสั้นขึ้น ลดรูป //display_text คือค่าที่เเสดงบนหน้าจอที่ parseInt เป็น number
        const { operator, previous_value, display_text, previos_base_value } = calculationState;
        console.log(parseInt(display_text), previous_value);
        let currentValue = parseInt(display_text);
        //การ combo
        if (previos_base_value !== null && !isFirstUsed) {
            currentValue = previos_base_value;
        }

        if (operator === '+') {
            let result = previous_value + currentValue;
            console.log(result);
            // setCalculationState((prevState) => ({
            //     ...prevState,
            //     value: result,
            // }));
            setTotal(result);
            // setIsJustPressOperator(true); // Flag
        } else if (operator === '-') {
            let result = previous_value - currentValue;
            console.log(result);
            setTotal(result);
        } else if (operator === '*') {
            let result = previous_value * currentValue;
            console.log(result);
            setTotal(result);
        } else if (operator === '/') {
            let result = previous_value / currentValue;
            console.log(result);
            setTotal(result);
        }
        if (isFirstUsed) {
            setIsFirstUsed(false);
        }
    }

    //TEST ONLY
    function showPreviousValue() {
        console.log(calculationState);
    }

    function setTotal(total: IState['total']) {
        console.log('[Debug]: set Total == ' + total);
        // total มีค่า
        if (total) {
            console.log('Case 1');
            //ทุกๆครั้งที่ total เปลี่ยนให้เก็บ display_text = total เพราะมันยังไม่ได้ assign ค่าให้ display text
            setCalculationState((prevState) => ({ ...prevState, total, previous_value: total, display_text: total.toString() }));
        }
        //total เป็น null ไม่ต้อง set
        else {
            console.log('Case 2');

            setCalculationState((prevState) => ({
                ...prevState,
                total,
            }));
        }
    }

    const action = { showPreviousValue, setCalculationValue, setOperator, setCalculationState, getCurrentDisplayText, deletePrevNumber, clearDisplayText, onCalculate, getOperator };

    return action;
};

export default useCalculatorV2;
