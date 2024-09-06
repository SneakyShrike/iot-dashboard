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

const App = () => 
{
  return (
	<BrowserRouter>
		<SideNav></SideNav>
		<Routes>
			<Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home-iot" element={<HomeIOT />} />
			<Route path="/surveillance" element={<p>Surveillance</p>} />
			<Route path="/energy" element={<Energy />} />
			<Route path="/asset-tracking" element={<AssetTracking />} />
			<Route path="/network" element={<Network />} />
			<Route path="/sigint" element={<SigInt />} />
			<Route path="/account-settings" element={<AccountSettings />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
  ); 
};
export default App
