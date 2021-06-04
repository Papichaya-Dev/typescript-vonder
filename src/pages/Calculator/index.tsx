import React, { useState, useEffect, useCallback, useMemo } from 'react';
import HomeProps_Page from '../Home/homeProps';
import styled, { keyframes } from 'styled-components';
import Background from '../../images/background.jpg';
import { useCounter } from '../CustomHook/useCounter';
import { useCalculate } from '../CustomHook/useCalculate';
import { Container, Row, Col, Button } from 'react-bootstrap';
import useCalculatorV2 from '../CustomHook/useCalculatorV2';
import ReactDigital from '@jswork/react-digital';

const Background_App = styled.div`
    background-image: url('https://cdna.artstation.com/p/assets/images/images/023/099/382/original/paul-ferrin-80-s-style-animation-render-gif.gif?1578078098');
    background-size: cover;
    width: 100%;
    height: 100vh;
    transform-style: flat;
`;

const Txt_Heading = styled.header<{ color?: string; fontSize?: number }>`
    font-family: 'Kanit', sans-serif;
    color: ${(props) => props.color || 'black'};
    font-size: ${(props) => props.fontSize}px;
    padding-top: 20px;
`;
const Container_App = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input_number = styled.input`
    font-family: 'Kanit', sans-serif;
    border-radius: 20px;
    color: black;
    width: 200px;
    height: 40px;
    align-items: center;
    margin-top: 20px;
`;

const Heading_Txt = styled(ReactDigital)`
    margin-left: 5px;
    color: blue;
`;

const Input_number_calculator = styled.input`
    font-family: 'Kanit', sans-serif;
    border-radius: 10px;
    color: black;
    width: 410px;
    height: 50px;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const Button_operator = styled.button`
    font-family: 'Kanit', sans-serif;
    border-radius: 10px;
    color: black;
    width: 60px;
    height: 30px;
    margin-left: 10px;
`;
const Button_Calculator = styled.button`
    border-radius: 10px;
    color: black;
    width: 100px;
    height: 50px;
    margin-left: 5px;
    margin-top: 5px;
    font-weight: bold;
    background-color: #b4daf0;
`;

const Digit_Box = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    color: black;
    width: 410px;
    height: 80px;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 40px;
    border: solid 2px white;
    padding: 10px;
    justify-content: flex-end;
    justify-items: center;
`;

const Operator_Box = styled.div`
    font-family: 'Bungee Shade', cursive;
    font-size: 30px;
    color: white;
    margin-top: 35px;
    margin-left: 10px;
`;
const rainbow = keyframes`
		0% {
    	filter: hue-rotate(0deg);
		}
		100% {
			filter: hue-rotate(-360deg);
		}
			`;
const Rainbowed = styled.div`
    font-family: 'Bungee Shade', cursive;
    margin-top: 30px;
    font-size: 50px;
    font-weight: bolder;
    background-image: -webkit-linear-gradient(120deg, rgb(231, 102, 87), rgb(252, 214, 88), rgb(147, 214, 113));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: 2s linear 0s infinite normal none running ${rainbow};
`;
function Calculate() {
    const { calculateComponent, calculateReset, calculate_plus, calculate_minus, calculate_multiply, calculate_divide, setInputNumber_One, setInputNumber_Two, InputNumber_One, InputNumber_Two } =
        useCalculate();
    const { setCalculationValue, setOperator, getCurrentDisplayText, deletePrevNumber, clearDisplayText, onCalculate, showPreviousValue, getOperator } = useCalculatorV2();

    return (
        <Background_App>
            <Container_App>
                {/* <Input_number
                value={InputNumber_One}
                onChange={(event) => {
                    setInputNumber_One(parseInt(event.target.value));
                }}
                placeholder="input number"
            />
            <Input_number
                value={InputNumber_Two}
                onChange={(event) => {
                    setInputNumber_Two(parseInt(event.target.value));
                }}
                placeholder="input number"
            />
            <br />
            {calculateComponent} */}
                {/* <Input_number_calculator
                // value={InputNumber_Two}
                // onChange={(event) => {
                //     setInputNumber_Two(parseInt(event.target.value));
                // }}
                placeholder="input number"
            /> */}
                <Rainbowed>Calculator</Rainbowed>
                <Row>
                    <Digit_Box>
                        {/* <ReactDigital flat className="dib" value={getCurrentDisplayText()} /> */}

                        {getCurrentDisplayText()
                            //เอาค่าจาก string แปลงเป็น Array ละ 1 ตัวอักษร
                            .split('')
                            .map((value: string) => {
                                return <Heading_Txt flat className="dib" value={value} />;
                            })}
                    </Digit_Box>
                    <Operator_Box>{getOperator()}</Operator_Box>
                </Row>
                <Container>
                    <Row className="justify-content-md-center">
                        <Button_Calculator onClick={setCalculationValue.bind(null, 7)}>7</Button_Calculator>
                        <Button_Calculator onClick={setCalculationValue.bind(null, 8)}>8</Button_Calculator>
                        <Button_Calculator onClick={setCalculationValue.bind(null, 9)}>9</Button_Calculator>
                        <Button_Calculator onClick={setOperator.bind(null, '+')}>+</Button_Calculator>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Button_Calculator onClick={setCalculationValue.bind(null, 4)}>4</Button_Calculator>
                        <Button_Calculator onClick={setCalculationValue.bind(null, 5)}>5</Button_Calculator>
                        <Button_Calculator onClick={setCalculationValue.bind(null, 6)}>6</Button_Calculator>
                        <Button_Calculator onClick={setOperator.bind(null, '-')}>-</Button_Calculator>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Button_Calculator onClick={setCalculationValue.bind(null, 1)}>1</Button_Calculator>
                        <Button_Calculator onClick={setCalculationValue.bind(null, 2)}>2</Button_Calculator>
                        <Button_Calculator onClick={setCalculationValue.bind(null, 3)}>3</Button_Calculator>
                        <Button_Calculator onClick={setOperator.bind(null, '*')}>*</Button_Calculator>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Button_Calculator onClick={setCalculationValue.bind(null, 0)}>0</Button_Calculator>
                        <Button_Calculator onClick={clearDisplayText}>C</Button_Calculator>
                        <Button_Calculator onClick={setOperator.bind(null, '/')}>/</Button_Calculator>
                        <Button_Calculator onClick={deletePrevNumber}>{'<-'}</Button_Calculator>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Button_Calculator onClick={onCalculate}>=</Button_Calculator>
                    </Row>
                    {/* <button onClick={showPreviousValue}>show previous value</button> */}
                </Container>
            </Container_App>
        </Background_App>
    );
}

export default Calculate;
