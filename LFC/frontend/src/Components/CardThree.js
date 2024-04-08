import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from '@mui/material/Card';
import './CardThree.css';
import CardContent from '@mui/material/CardContent';
import { useState, useEffect } from 'react';
import { ThemeProvider, Typography, createTheme } from '@mui/material';
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
const theme = createTheme({
    palette: {
        background: {
            paper: '#B71515', // lfc read
        },
    },
});
const CardThree = () => {
    const [teamFixtures, setTeamFixtures] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetch(import.meta.env.VITE_BACKEND_URL + '/api/LFCFixtures/headtohead')
            .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('Error: ' + response.status);
            }
        })
            .then(data => {
            const seasons = [2019, 2020, 2021, 2022, 2023, 2024];
            const teams = ['Liverpool', 'Chelsea'];
            const score = 1;
            const filteredData = data.data2.response.filter((item) => seasons.includes(item.league.season) &&
                teams.includes(item.teams.home.name) &&
                teams.includes(item.teams.away.name) &&
                item.score.fulltime.home === score &&
                item.score.fulltime.away === score);
            setTeamFixtures(filteredData);
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
    return (_jsx(Card, { children: _jsx(ThemeProvider, { theme: theme, children: _jsx(CardContent, { children: teamFixtures && teamFixtures?.map((fixture, index) => (_jsx("div", { className: 'fixture-card', children: _jsx(Card, { children: _jsx(CardContent, { style: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }, children: _jsxs("div", { className: 'card-content', children: [_jsx("div", { className: 'season-title', children: _jsxs("p", { children: ["Season: ", fixture.league.season] }) }), _jsxs(Typography, { textAlign: 'center', color: '#f6f6f6', fontFamily: 'League Spartan', variant: 'body1', children: [_jsxs("p", { children: ["Home Team - ", fixture.teams.home.name] }), _jsx("img", { src: fixture.teams.home.logo, alt: "Home team logo" }), _jsxs("p", { children: ["Away Team - ", fixture.teams.away.name] }), _jsx("img", { src: fixture.teams.away.logo, alt: "Away team logo" }), _jsxs("p", { children: ["Home Team Goals-", fixture.goals.home] }), _jsxs("p", { children: ["Away Team Goals - ", fixture.goals.away] })] })] }) }) }) }, index))) }) }) }));
};
export default CardThree;
