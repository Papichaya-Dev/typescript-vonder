import React, { useState, useEffect, useCallback, useMemo } from 'react';
import HomeProps_Page from '../Home/homeProps';
import styled from 'styled-components';
import Background from '../../images/background.jpg';
import { useCounter } from '../CustomHook/useCounter';
import { useCalculate } from '../CustomHook/useCalculate';
import { Row, Col } from 'react-bootstrap';

const Background_App = styled.div`
    /* background-image: url(${Background}); */
    background-size: cover;
    width: 100%;
    height: 100vh;
    transform-style: flat;
`;

const Container_ReactHookPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Txt_Heading_Topic = styled.header`
    font-family: 'Kanit', sans-serif;
    color: black;
    font-size: 30px;
    padding-top: 20px;
    justify-content: center;
    align-items: center;
`;

const Txt_Heading_useState = styled.h1`
    font-family: 'Kanit', sans-serif;
    color: black;
    font-weight: bold;
    font-size: 20px;
    padding-top: 20px;
`;

const Input_useState = styled.input`
    font-family: 'Kanit', sans-serif;
    border-radius: 20px;
    color: black;
    width: 200px;
    height: 30px;
    align-items: center;
`;

const Input_useState_plus = styled.input`
    font-family: 'Kanit', sans-serif;
    border-radius: 20px;
    color: black;
    width: 200px;
    height: 30px;
    align-items: center;
    margin-left: 60px;
`;
const Button_useEffect = styled.button`
    font-family: 'Kanit', sans-serif;
    border-radius: 10px;
    color: black;
    width: 60px;
    height: 30px;
    margin-left: 10px;
`;
const Button_useEffect_plus = styled.button`
    border-radius: 10px;
    color: black;
    width: 60px;
    height: 30px;
    margin-left: 5px;
`;
const Button_useState = styled.button`
    font-family: 'Kanit', sans-serif;
    border-radius: 10px;
    color: black;
    width: 60px;
    height: 30px;
    margin-left: 10px;
`;

const Button_Increment = styled.button`
    font-family: 'Kanit', sans-serif;
    border-radius: 10px;
    color: black;
    width: 140px;
    height: 30px;
    margin-left: 10px;
`;

function Home() {
    const [homeName, setHome] = useState('');
    const [count, setCount] = useState(0);
    const [isClose, setisClose] = useState<boolean>(false);
    const [isShowText, setShowText] = useState(true);
    const [InputNumber_One, setInputNumber_One] = useState<number>(0);
    const [InputNumber_Two, setInputNumber_Two] = useState<number>(0);
    const [result, setResult] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    //useCounter
    const { counterComponent, increaseCounter, decreaseCounter, resetValue } = useCounter();
    const { calculateComponent, calculate_plus } = useCalculate();
    // console.log('isClose :', isClose)
    // console.log("Is use effect" ,isShowText)
    // console.log(InputNumber_One)
    // console.log(InputNumber_Two)
    // console.log(InputNumber_One+InputNumber_Two)
    // console.log(result)
    // console.log("re-render parent component");
    // console.log([InputNumber_One + InputNumber_Two].reduce((a, b) => a+b))

    useEffect(() => {
        setHome('Is use Effect' + Math.random() * 999);
        // console.log("render");
    }, []);

    useEffect(() => {
        // console.log(typeof InputNumber_One)
        setResult(InputNumber_One + InputNumber_Two);
        // console.log(InputNumber_One + InputNumber_Two)
        // console.log("render");
    }, [InputNumber_One, InputNumber_Two]);
    //useCallback
    const resetCount = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);
    //useMemo
    const renderList = useMemo(() => {
        console.log('render list');
        return Array.from(Array(100).keys()).map((key) => {
            return <h3 key={key}>{key} count</h3>;
        });
    }, []);
    return (
        <div className="App">
            <Container_ReactHookPage>
                <Txt_Heading_Topic>Learning React Hook</Txt_Heading_Topic>
                <HomeProps_Page window={10} homeName={homeName} resetCount={resetCount} />
                <p>Count: {count}</p>
                <Txt_Heading_useState>useState</Txt_Heading_useState>
                <Input_useState onChange={({ target: { value } }) => setHome(value)} placeholder="Input text " />
                <Button_useState onClick={() => setisClose(true)}>Close</Button_useState>
                <Button_useEffect onClick={() => setShowText((prevState) => !prevState)}>Click</Button_useEffect>
                <p>
                    {count1} {count2} {count3}
                </p>
                <Button_Increment onClick={() => setCount1(count1 + 1)}>Increment count1</Button_Increment>
                <Button_Increment onClick={() => setCount2(count2 + 1)}>Increment count2</Button_Increment>
                <Button_Increment onClick={() => setCount3(count3 + 1)}>Increment count3</Button_Increment>
                {counterComponent}
                <Button_Increment onClick={increaseCounter}>+</Button_Increment>
                <Button_Increment onClick={() => decreaseCounter()}>-</Button_Increment>
                <Button_Increment onClick={() => resetValue()}>reset</Button_Increment>
            </Container_ReactHookPage>
        </div>
    );
}

export default Home;
