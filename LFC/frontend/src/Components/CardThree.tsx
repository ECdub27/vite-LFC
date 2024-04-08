
import  Card  from '@mui/material/Card';
import './CardThree.css';
import  CardContent  from '@mui/material/CardContent';
import {useState, useEffect} from 'react';
import { ThemeProvider,  Typography,  createTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material';




export const themeOptions: ThemeOptions = {
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
  type Fixture = {
    fixture: {
      id: number;
      referee: string;
      timezone: string;
      date: string;
      timestamp: number;
      periods: {
        first: number;
        second: number;
      };
      venue: {
        id: number | null;
        name: string;
        city: string;
      };
      status: {
        long: string;
        short: string;
        elapsed: number;
      };
    };
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string | null;
      season: number;
      round: string;
    };
    teams: {
      home: {
        id: number;
        name: string;
        logo: string;
        winner: boolean;
      };
      away: {
        id: number;
        name: string;
        logo: string;
        winner: boolean;
      };
    };
    goals: {
      home: number;
      away: number;
    };
    score: {
      halftime: {
        home: number;
        away: number;
      };
      fulltime: {
        home: number;
        away: number;
      };
      extratime: {
        home: number;
        away: number;
      };
      penalty: {
        home: number;
        away: number;
      };
    };
  };




  const theme = createTheme({
    palette: {
        background: {
            paper: '#B71515', // lfc read
        },
    },
});


const CardThree = () => {
  const [teamFixtures, setTeamFixtures] = useState<Fixture[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      setError(null);
  
      fetch(import.meta.env.VITE_BACKEND_URL + '/api/LFCFixtures/headtohead')
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error: ' + response.status);
          }
        })
        .then(data => {
          const seasons = [2019,2020,2021,2022,2023,2024];
          const teams = ['Liverpool', 'Chelsea'];
          const score = 1;
          const filteredData = data.data2.response.filter((item: Fixture) => 
            seasons.includes(item.league.season) &&
            teams.includes(item.teams.home.name) &&
            teams.includes(item.teams.away.name) &&
            item.score.fulltime.home === score &&
            item.score.fulltime.away === score );
          setTeamFixtures(filteredData);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setIsLoading(false);
        });
    }, []);



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
    <Card>
      <ThemeProvider theme={theme}>
    <CardContent>
      {teamFixtures && teamFixtures?.map((fixture: Fixture, index: number) => (
        <div className='fixture-card' key={index}>
          <Card>
            <CardContent style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <div className='card-content'>
                <div className='season-title'>
              <p>Season: {fixture.league.season}</p>
              </div>
              <Typography textAlign='center'color='#f6f6f6' fontFamily= 'League Spartan'variant='body1'>
              
              <p>Home Team - {fixture.teams.home.name}</p>
              <img src={fixture.teams.home.logo} alt="Home team logo" />
              <p>Away Team - {fixture.teams.away.name}</p>
              <img src={fixture.teams.away.logo} alt="Away team logo" />
              
              <p>Home Team Goals-{ fixture.goals.home}</p>
              <p>Away Team Goals - {fixture.goals.away}</p>
              </Typography>
              {/* Add more properties as needed */}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </CardContent>
    </ThemeProvider>
  </Card>
  );
}
    
    export default CardThree;