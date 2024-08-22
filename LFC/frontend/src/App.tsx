import Lottie from 'lottie-react';
import footieLottie from './assets/lotties/footie.json';
import football from './assets/lotties/soccerball.json';
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
   <div className="hero bg-red-500 text-white py-12 px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          You Will Never Walk Alone
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="animation-container w-full md:w-1/2 lg:w-1/3">
            <Lottie animationData={footieLottie} height={400} width={400} />
          </div>
          <div className="animation-container w-full md:w-1/2 lg:w-1/3">
            <Lottie animationData={football} height={400} width={400} />
          </div>
        </div>
      </div>
      <CardOneLFCTeamStats /> 
    
     
        <div>
        
    
         
        
        <CardTwo />
  
       
      
     
          <h1 className='head-title'> Recent Results Against Chelsea</h1>
        <CardThree />
         <div className='h-10 w-screen bg-red-500'>
            <h1 className='text-center text-white'> Footer</h1>
         </div>
    </div>
    </>
    
  )
}

export default App
