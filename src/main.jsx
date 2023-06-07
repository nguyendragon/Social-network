import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import 'tippy.js/dist/tippy.css';
import './assets/css/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
