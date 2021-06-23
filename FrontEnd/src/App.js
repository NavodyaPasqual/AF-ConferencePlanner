import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PageRoutes from "./routes/pageRoutes";

function App() {
    return (
        <div>
            <PageRoutes/>
        </div>
    )
}

ReactDOM.render (
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)