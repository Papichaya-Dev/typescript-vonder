import React from 'react';
import styled from 'styled-components';

const Container_useContext = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const exampleuseContext = () => {
    return (
        <div>
            <Container_useContext>Example useContext</Container_useContext>
        </div>
    );
};

export default exampleuseContext;
