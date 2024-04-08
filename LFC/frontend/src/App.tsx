import Lottie from 'lottie-react';
import footieLottie from './assets/lotties/footie.json';
import football from './assets/lotties/soccerball.json';
import './App.css'
import CardOneLFCTeamStats from './Components/CardOne';
import CardThree from './Components/CardThree';
import CardTwo from './Components/CardTwo';

import { ThemeOptions } from '@mui/material/styles';

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

export type AppProps = {
  team_id: number;
  name: string; 
  logo: string;
  founded: number;
  venue_name: string;
  venue_address: string;
  venue_capacity: number;
}



function App() {
 



  return (
    
    <>
    <div className='card-parent-container'>
      <div id='animation-container'>

      <Lottie animationData={footieLottie} height={400} width={400} />
      </div>
      <div id='animation-container1'>
      <Lottie animationData={football} height={400} width={400} />
      </div>
      </div>
      <h1 className='head-title'>You Will Never Walk Alone</h1>
      
      <CardOneLFCTeamStats /> 
     
        <div>
        
    
         
        
        <CardTwo />
  
     
      
     
          <h1 className='head-title'> Recent Results Against Chelsea</h1>
        <CardThree />
     
    </div>
    </>
    
  )
}

export default App
