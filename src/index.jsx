import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './Router';
import './style/css/style.css';

/** Create root element with "root" Id by adding a router component to it */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
