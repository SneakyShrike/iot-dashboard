import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SideNav from './components/pages/SideNav';
import Login from './components/pages/Login';
import HomeIOT from './components/pages/HomeIOT';
import Surveillance from './components/pages/Surveillance';
import Energy from './components/pages/Energy';
import AssetTracking from './components/pages/AssetTracking';
import Network from './components/pages/Network';
import SigInt from './components/pages/SigInt';
import AccountSettings from './components/pages/AccountSettings';
import NotFound from './components/pages/NotFound';
import { IcSectionContainer } from '@ukic/react';
import { createUseStyles } from "react-jss";

const App = () => 
{
	// const useStyles = createUseStyles({divContainer: {display: "flex",},});
	// const classes = useStyles();

return (
	<BrowserRouter>
		<main>
		    <SideNav></SideNav>
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
            	<Route path="/login" element={<Login />} />
            	<Route path="/home-iot" element={<HomeIOT />} />
				<Route path="/surveillance" element={<Surveillance />} />
				<Route path="/energy" element={<Energy />} />
				<Route path="/asset-tracking" element={<AssetTracking />} />
				<Route path="/network" element={<Network />} />
				<Route path="/sigint" element={<SigInt />} />
				<Route path="/account-settings" element={<AccountSettings />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</main>
	</BrowserRouter>
  ); 
};
export default App
