import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, ThemeProvider, createTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import './cardTwo.css';
const theme = createTheme({
    palette: {
        background: {
            paper: '#B71515', // lfc read
        },
    },
});
const CardTwo = () => {
    const [teamStats, setTeamStats] = useState({
        data3: { response: [] }
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetch(import.meta.env.VITE_BACKEND_URL + '/api/LFCPlayers/squads')
            .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('Error: ' + response.status);
            }
        })
            .then(data => {
            setTeamStats(data);
            setIsLoading(false);
        })
            .catch(error => {
            setError(error.message);
            setIsLoading(false);
        });
    }, []);
    {
        error ? (_jsx(_Fragment, { children: "oh no theres an error" })) : isLoading ? (_jsx(_Fragment, { children: "loading..." })) : _jsx(_Fragment, { children: "No data" });
    }
    return (_jsx("div", { className: 'card-title', children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx("h1", { children: "Roster" }), teamStats?.data3.response && teamStats.data3.response.map((player) => (_jsx(Card, { className: 'card-container', sx: { maxWidth: 'fit-content', display: 'flex', flexDirection: 'column' }, children: _jsx(CardContent, { sx: { display: 'flex', flexDirection: 'row', gap: '10px', }, children: player.players.map((p) => (_jsxs("div", { className: "player-row", children: [_jsxs("span", { children: [_jsx(Card, { children: _jsx("div", { className: "player-info", children: p.name }) }), _jsx(Card, { children: _jsxs("div", { className: "player-info", children: [" ", String(p.number), " "] }) }), _jsx(Card, { children: _jsxs("div", { className: "player-info", children: [p.position, " "] }) })] }), _jsx("img", { src: p.photo, alt: "player photo" })] }, p.id))) }) }, player.id)))] }) }));
};
export default CardTwo;
