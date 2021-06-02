import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Routing from './routes/index';

const NavLink_custom = styled(NavLink)`
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
    font-weight: bolder;
    height: 50px;
    width: 130px;
    justify-content: center;
`;

const Container_App = styled.div`
    display: flex;
    flex-direction: column;
`;
const Info_Papichaya_Dev = styled.div`
    font-family: 'Quicksand', sans-serif;
    font-weight: bolder;
    padding-right: 50px;
`;
const App = () => {
    return (
        <Container_App className="my-app">
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://github.com/Papichaya-Dev">
                            <Info_Papichaya_Dev>Papichaya-Dev</Info_Papichaya_Dev>
                            {/* <img src={process.env.PUBLIC_URL + '/images/icon-nav.png'} alt="Lookpad LOGO" width="25" height="100"/> */}
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <NavLink_custom exact to="/" activeClassName="is-active" className="navbar-item">
                                Hook
                            </NavLink_custom>
                            <NavLink_custom exact to="/calculate" activeClassName="is-active" className="navbar-item">
                                Calculator
                            </NavLink_custom>
                            <NavLink_custom exact to="/ExampleuseContext" activeClassName="is-active" className="navbar-item">
                                useContext
                            </NavLink_custom>
                        </div>
                    </div>
                </div>
            </nav>
            <Routing />
        </Container_App>
    );
};

export default App;
