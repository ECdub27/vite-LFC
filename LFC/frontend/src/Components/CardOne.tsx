
import React, { Key } from "react";
import './StyleCard.css';
import {useState, useEffect} from 'react';
import { Card, CardContent } from "@mui/material";
import { ThemeProvider,  createTheme } from '@mui/material';
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
score:Array<object>;
events:Array<[]>;
venue: object; // include other properties as needed
  }>;
};
players:Array<object>; 
age: number;
position: string;
photo:string;
}

type VenueType = {
    name: string;
    address: string;
    capacity: number;
    image: string;
  };
  
  type TeamType = {
    name: string;
    logo: string;
    id: number;
    founded: number;
    venue: VenueType;
    team: {
      id: number;
      name: string; 
      code: string;
      country: string;
      founded: number;
      national: boolean;
      logo: string;
    }
  };
  
  type DataType = {
    data1: {
      response: TeamType[];
    };
  };
 
  const theme = createTheme({
    palette: {
        background: {
            paper: '#B71515', // lfc read
        },
    },
});
  
const CardOneLFCTeamStats:React.FC= ():JSX.Element => {
    
   
   const [data, setData] = useState<DataType | null>({ data1: { response: [] } });
   const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
   
  useEffect(() =>{
   fetch(import.meta.env.VITE_BACKEND_URL + '/api/LFCTeams')
   .then(response => {
    if(response.ok){
        return response.json();
    } else {
        throw new Error('Something went wrong');
    }
   }).then(data => {
    setData(data);
    setIsLoading(false);
   }).catch((error) =>{
    setError(error.message);
    setIsLoading(false);
   })
},[]);
   
{error ? (
    <>
        oh no theres an error

        {error}
        
    </>
) : isLoading ? (
    <>
        loading...
      
    </>
) : <>No data</>}


    return (

<>
    {error ? (
      <>
        oh no theres an error
        {error}
      </>
    ) : isLoading ? (
      <>
        loading...
      </>
    ) : (
      <>
        { data && data.data1.response.map((team:TeamType, index:Key) => (
            <div className="card" key={index}>
              <ThemeProvider theme={theme}>
            <Card>
              <CardContent>
            <h1 className='title'>{team.team.name}</h1>
            <img src={team.team.logo} alt="team logo" />
            </CardContent>
            <CardContent>
            <ul>
              <li>
    
                <img src={(team.venue as { name: string, address: string, capacity: number, image: string }).image} />
                <li>Founded: {team.team.founded}</li>
                <li>Venue: {(team.venue.name as unknown as { name: string, address: string, capacity: number, image: string }).name}</li>
                <li>Address: {(team.venue.address as unknown as { name: string, address: string, capacity: number, image: string }).address}</li>
                <li>Capacity: {(team.venue.capacity as unknown as { name: string, address: string, capacity: number, image: string }).capacity}</li>
              </li>
            </ul>
            </CardContent>
            </Card>
            </ThemeProvider>
          </div>
        ))}
      </>
    )}
  </>
    );

};
export default CardOneLFCTeamStats;