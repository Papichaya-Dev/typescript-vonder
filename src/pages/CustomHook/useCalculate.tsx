import { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';

const Txt_Result = styled.div`
    font-family: 'Kanit', sans-serif;
    color: black;
    font-weight: bold;
    font-size: 20px;
`;

export const useCalculate = () => {
    const [InputNumber_One, setInputNumber_One] = useState<number>(0);
    const [InputNumber_Two, setInputNumber_Two] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    function clearInput() {
        setInputNumber_One(0);
        setInputNumber_Two(0);
    }

    const calculate_plus = useCallback(() => {
        setResult(InputNumber_One + InputNumber_Two);
        clearInput();
    }, [InputNumber_One, InputNumber_Two]);

    const calculate_minus = useCallback(() => {
        setResult(InputNumber_One - InputNumber_Two);
        clearInput();
    }, [InputNumber_One, InputNumber_Two]);

    const calculate_multiply = useCallback(() => {
        setResult(InputNumber_One * InputNumber_Two);
        clearInput();
    }, [InputNumber_One, InputNumber_Two]);

    const calculate_divide = useCallback(() => {
        setResult(InputNumber_One / InputNumber_Two);
        clearInput();
    }, [InputNumber_One, InputNumber_Two]);

    const calculateReset = useCallback(() => {
        setResult(0);
        setInputNumber_One(0);
        setInputNumber_Two(0);
    }, [setResult, setInputNumber_One, setInputNumber_Two]);

    const calculateComponent = useMemo(() => {
        return (
            <div>
                <Txt_Result>result: {result}</Txt_Result>
            </div>
        );
    }, [InputNumber_One, InputNumber_Two, result]);

    return { calculateComponent, setInputNumber_One, setInputNumber_Two, calculate_plus, calculate_minus, calculate_multiply, calculate_divide, calculateReset, InputNumber_One, InputNumber_Two };
};
