

import { Card, CardContent, ThemeProvider,  createTheme } from '@mui/material';
import {useState, useEffect} from 'react';
import './cardTwo.css';


import { Key } from 'react';

type RosterType = {
    data3:{
        response:Array<{
    players: Array<{
    id: Key | number;
    name: string; 
    age: number;
    position: string;
    photo: string;
    number: number;
    }>;
    name: string;
    age: number;
    position: string;
    photo: string;
    id: Key | number;
    number: number;
    }>;
    };

}

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const theme = createTheme({
        palette: {
            background: {
                paper: '#B71515', // lfc read
            },
        },
    });


const CardTwo = () => {
    const [teamStats, setTeamStats] = useState<RosterType | null>({
        data3: { response: [] }
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    

  
    useEffect(() => {
      setIsLoading(true);
      setError(null);
  
      fetch(`${backendUrl}/api/LFCPlayers/squads`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
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

console.log('/api/LFCPlayers/squads');

{error ? (
    <>
        oh no theres an error
    </>
) : isLoading ? (
    <>
        loading...
    </>
) : <>No data</>}
return (
    <div className='card-title'>
        <ThemeProvider theme={theme}>
        <h1>Roster</h1>
        {teamStats?.data3.response && teamStats.data3.response.map((player: {
            id: Key;
            name: string;
            age: number;
            position: string;
            photo: string;
            number: number;
            players: {
                id: Key;
                name: string;
                age: number;
                position: string;
                photo: string;
            }[];
        }) => (
            <Card className='card-container' key={player.id} sx={{maxWidth:'fit-content', display: 'flex', flexDirection:'column'}}>
                
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '10px',}}>
                        
                        {player.players.map((p: {
                            [x: string]: string | number | Key;
                            name:string;
                            id: Key;
                            age: number;
                            position: string;
                            photo: string;
                           
                        }) => (
                            <div className="player-row" key={p.id}>
                                <span>
                                    <Card>
                                    <div className="player-info">
                                        {p.name}
                                        </div>
                                    </Card>
                                    <Card>
                                    <div className="player-info"> {String(p.number)} </div>
                                    </Card>
                                    <Card>
                                    <div className="player-info">{p.position} </div>
                                    </Card>
                                </span>
                                <img src={p.photo} alt="player photo" />
                            </div>
                        ))}
                        
                    </CardContent>
                
            </Card>
        ))}
        </ThemeProvider>
    </div>
);



};

export default CardTwo;