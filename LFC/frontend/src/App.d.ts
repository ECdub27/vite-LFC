import './App.css';
import { ThemeOptions } from '@mui/material/styles';
export declare const themeOptions: ThemeOptions;
export type AppProps = {
    team_id: number;
    name: string;
    logo: string;
    founded: number;
    venue_name: string;
    venue_address: string;
    venue_capacity: number;
};
declare function App(): import("react/jsx-runtime").JSX.Element;
export default App;
