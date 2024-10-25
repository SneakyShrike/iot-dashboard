import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SideNav from './components/pages/SideNav/SideNav';
import Login from './components/pages/Login/Login';
import HomeIOT from './components/pages/HomeIOT/HomeIOT';
import Surveillance from './components/pages/Surveillance/Surveillance';
import Energy from './components/pages/Energy/Energy';
import AssetTracking from './components/pages/AssetTracking/AssetTracking';
import Network from './components/pages/Network/Network';
import SigInt from './components/pages/SigInt/SigInt';
import AccountSettings from './components/pages/AccountSettings/AccountSettings';
import NotFound from './components/pages/NotFound/NotFound';

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
