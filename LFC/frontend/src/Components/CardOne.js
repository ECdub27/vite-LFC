import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import './StyleCard.css';
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material';
const theme = createTheme({
    palette: {
        background: {
            paper: '#B71515', // lfc read
        },
    },
});
const CardOneLFCTeamStats = () => {
    const [data, setData] = useState({ data1: { response: [] } });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3000/api/LFCTeams')
            .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('Something went wrong');
            }
        }).then(data => {
            setData(data);
            setIsLoading(false);
        }).catch((error) => {
            setError(error.message);
            setIsLoading(false);
        });
    }, []);
    {
        error ? (_jsxs(_Fragment, { children: ["oh no theres an error", error] })) : isLoading ? (_jsx(_Fragment, { children: "loading..." })) : _jsx(_Fragment, { children: "No data" });
    }
    return (_jsx(_Fragment, { children: error ? (_jsxs(_Fragment, { children: ["oh no theres an error", error] })) : isLoading ? (_jsx(_Fragment, { children: "loading..." })) : (_jsx(_Fragment, { children: data && data.data1.response.map((team, index) => (_jsx("div", { className: "card", children: _jsx(ThemeProvider, { theme: theme, children: _jsxs(Card, { children: [_jsxs(CardContent, { children: [_jsx("h1", { className: 'title', children: team.team.name }), _jsx("img", { src: team.team.logo, alt: "team logo" })] }), _jsx(CardContent, { children: _jsx("ul", { children: _jsxs("li", { children: [_jsx("img", { src: team.venue.image }), _jsxs("li", { children: ["Founded: ", team.team.founded] }), _jsxs("li", { children: ["Venue: ", team.venue.name.name] }), _jsxs("li", { children: ["Address: ", team.venue.address.address] }), _jsxs("li", { children: ["Capacity: ", team.venue.capacity.capacity] })] }) }) })] }) }) }, index))) })) }));
};
export default CardOneLFCTeamStats;
