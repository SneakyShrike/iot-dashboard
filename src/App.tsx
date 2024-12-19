import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SideNav from './components/Pages/SideNav/SideNav';
import Login from './components/Pages/Login/Login';
import HomeIOT from './components/Pages/HomeIOT/HomeIOT';
import Surveillance from './components/Pages/Surveillance/Surveillance';
import Energy from './components/Pages/Energy/Energy';
import AssetTracking from './components/Pages/AssetTracking/AssetTracking';
import Network from './components/Pages/Network/Network';
import SigInt from './components/Pages/SigInt/SigInt';
import AccountSettings from './components/Pages/AccountSettings/AccountSettings';
import NotFound from './components/Pages/NotFound/NotFound';

const App = () => 
{
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
