import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

const Txt_Home = styled.p`
 font-family: 'Kanit', sans-serif;
 color: black;
 font-weight: bold;
 font-size: 20px;
 padding-top: 20px;
`
const Button_useEffect = styled.button`
  border-radius: 10px;
  color: black;
  width: 100px;
  height: 30px;
  margin-left: 10px;
`

interface HomeProps {
    window: number;
    homeName: string;
    resetCount: () =>void;
}
const HomeProps_Page = ({ window, homeName, resetCount}: HomeProps) => {
    return (
        <div>
            <Txt_Home>Home : {homeName}</Txt_Home>
            <Txt_Home>Home : {window}</Txt_Home>
            <Button_useEffect onClick={resetCount}>resetCount</Button_useEffect>
        </div>
    )
}

export default HomeProps_Page