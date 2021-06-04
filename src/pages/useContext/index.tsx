import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext, AppProvider } from '../Contexts/AppContexts';
import StudentBoard from './StudentBoard';
import StudentInput from './StudentInput';
const Container_useContext = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const exampleuseContext = () => {
    return (
        <div>
            <AppProvider>
                <Container_useContext>Example useContext</Container_useContext>
                <StudentInput />
                <StudentBoard />
            </AppProvider>
        </div>
    );
};

export default exampleuseContext;
