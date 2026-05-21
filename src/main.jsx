import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Gatekeeper from './components/Gatekeeper.jsx';
import './index.css';

// StrictMode is intentionally disabled — it double-invokes useEffect cleanup in
// development, which calls renderer.forceContextLoss() and then tries to attach
// OrbitControls to the dead canvas context on the second mount.
ReactDOM.createRoot(document.getElementById('root')).render(
    <Gatekeeper>
        <App />
    </Gatekeeper>
);
