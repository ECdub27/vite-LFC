import React from "react";
import './StyleCard.css';
export type APIProps = {
    data1: {
        response: Array<{
            team_id: number;
            name: string;
            logo: string;
            season: number;
            statistics: Array<[]>;
            player: Array<object>;
            fixtures: Array<object>;
            league: Array<object>;
            teams: Array<object>;
            score: Array<object>;
            events: Array<[]>;
            venue: object;
        }>;
    };
    players: Array<object>;
    age: number;
    position: string;
    photo: string;
};
declare const CardOneLFCTeamStats: React.FC;
export default CardOneLFCTeamStats;
