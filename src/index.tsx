import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import '@jswork/react-digital/dist/style.css';

const AppWithRouter = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
ReactDOM.render(
    <React.StrictMode>
        <AppWithRouter />
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
