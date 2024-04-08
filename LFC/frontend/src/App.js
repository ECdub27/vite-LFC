import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Lottie from 'lottie-react';
import footieLottie from './footie.json';
import football from './soccerball.json';
import './App.css';
import CardOneLFCTeamStats from './Components/CardOne';
import CardThree from './Components/CardThree';
import CardTwo from './Components/CardTwo';
export const themeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#911712',
        },
        secondary: {
            main: '#00634d',
            light: '#ffe140',
            dark: '#f6f6f6',
        },
    },
};
function App() {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: 'card-parent-container', children: [_jsx("div", { id: 'animation-container', children: _jsx(Lottie, { animationData: footieLottie, height: 400, width: 400 }) }), _jsx("div", { id: 'animation-container1', children: _jsx(Lottie, { animationData: football, height: 400, width: 400 }) })] }), _jsx("h1", { className: 'head-title', children: "You Will Never Walk Alone" }), _jsx(CardOneLFCTeamStats, {}), _jsxs("div", { children: [_jsx(CardTwo, {}), _jsx("h1", { className: 'head-title', children: " Recent Results Against Chelsea" }), _jsx(CardThree, {})] })] }));
}
export default App;
