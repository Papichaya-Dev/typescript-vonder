import React, { useState, useEffect, useCallback, useMemo } from 'react';
import HomeProps_Page from '../Home/homeProps';
import styled from 'styled-components';
import Background from '../../images/background.jpg';
import { useCounter } from '../CustomHook/useCounter';
import { useCalculate } from '../CustomHook/useCalculate';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Background_App = styled.div`
    background-image: url(${Background});
    background-size: cover;
    width: 100%;
    height: 100vh;
    transform-style: flat;
`;

const Txt_Heading = styled.header`
    font-family: 'Kanit', sans-serif;
    color: black;
    font-size: 30px;
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
    background-color: white;
`;

function Calculate() {
    const { calculateComponent, calculateReset, calculate_plus, calculate_minus, calculate_multiply, calculate_divide, setInputNumber_One, setInputNumber_Two, InputNumber_One, InputNumber_Two } =
        useCalculate();
    return (
        <Container_App>
            <Txt_Heading>Calculator</Txt_Heading>
            <Input_number
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
            <Input_number
                // value={InputNumber_Two}
                onChange={(event) => {
                    setInputNumber_Two(parseInt(event.target.value));
                }}
                placeholder="input number"
            />
            <br />
            {calculateComponent}
            <Container>
                <Row className="justify-content-md-center">
                    <Button_Calculator>7</Button_Calculator>
                    <Button_Calculator>8</Button_Calculator>
                    <Button_Calculator>9</Button_Calculator>
                    <Button_Calculator onClick={calculate_plus}>+</Button_Calculator>
                </Row>
                <Row className="justify-content-md-center">
                    <Button_Calculator>4</Button_Calculator>
                    <Button_Calculator>5</Button_Calculator>
                    <Button_Calculator>6</Button_Calculator>
                    <Button_Calculator onClick={calculate_minus}>-</Button_Calculator>
                </Row>
                <Row className="justify-content-md-center">
                    <Button_Calculator>1</Button_Calculator>
                    <Button_Calculator>2</Button_Calculator>
                    <Button_Calculator>3</Button_Calculator>
                    <Button_Calculator onClick={calculate_multiply}>*</Button_Calculator>
                </Row>
                <Row className="justify-content-md-center">
                    <Button_Calculator>0</Button_Calculator>
                    <Button_Calculator onClick={calculateReset}>C</Button_Calculator>
                    <Button_Calculator onClick={calculate_divide}>/</Button_Calculator>
                </Row>
            </Container>
        </Container_App>
    );
}

export default Calculate;
