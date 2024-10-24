import { IcNavigationItem, IcSideNavigation, SlottedSVG } from "@ukic/react";
import { NavLink } from "react-router-dom";
import styles from './SideNav.module.css';
import 
{ 
    mdiViewDashboard,
    mdiHomeAnalytics, 
    mdiCctv, 
    mdiHomeLightningBolt, 
    mdiCrosshairsGps,
    mdiLan,
    mdiRadioTower,
    mdiAccount
} from "@mdi/js";

function SideNav() 
{
    return (
        <main className={styles.SideNav}>
        <IcSideNavigation appTitle="The Covenant">
            <NavLink to="/" slot="app-title">Dashboard</NavLink>
            <SlottedSVG slot='app-icon' viewBox="0 0 24 24" path={mdiViewDashboard} />
            <IcNavigationItem slot="primary-navigation">
                <NavLink to="/home-iot" slot="navigation-item">
                    <SlottedSVG slot='app-icon' viewBox="0 0 24 24" height="1.5rem" width="1.5rem" fill="currentcolor" path={mdiHomeAnalytics} />
                    Home IOT
                </NavLink>
            </IcNavigationItem>
            <IcNavigationItem slot="primary-navigation"> 
                <NavLink to="/surveillance" slot="navigation-item">
                    <SlottedSVG slot='app-icon' viewBox="0 0 24 24" height="1.5rem" width="1.5rem" fill="currentcolor" path={mdiCctv} />
                    Surveillance
                </NavLink>
            </IcNavigationItem>
            <IcNavigationItem slot="primary-navigation">
                <NavLink to="/energy" slot="navigation-item">
                    <SlottedSVG slot="app-icon" viewBox="0 0 24 24" height="1.5rem" width="1.5rem" fill="currentcolor" path={mdiHomeLightningBolt} />
                    Energy
                </NavLink>
            </IcNavigationItem>
            <IcNavigationItem slot="primary-navigation">
                <NavLink to="/asset-tracking" slot="navigation-item">
                    <SlottedSVG slot='app-icon' viewBox="0 0 24 24" height="1.5rem" width="1.5rem" fill="currentcolor" path={mdiCrosshairsGps} />
                    Asset Tracking
                </NavLink>
            </IcNavigationItem>
            <IcNavigationItem slot="primary-navigation">
                <NavLink to="/network" slot="navigation-item">
                    <SlottedSVG slot='app-icon' viewBox="0 0 24 24" height="1.5rem" width="1.5rem" fill="currentcolor" path={mdiLan} />
                    Network
                </NavLink>
            </IcNavigationItem>
            <IcNavigationItem slot="primary-navigation"> 
                <NavLink to="/sigint" slot="navigation-item">
                    <SlottedSVG slot='app-icon' viewBox="0 0 24 24" height="1.5rem" width="1.5rem" fill="currentcolor" path={mdiRadioTower} />
                    SIGINT
                </NavLink>
            </IcNavigationItem>

            <IcNavigationItem slot="secondary-navigation">
                <NavLink to="/account-settings" slot="navigation-item">
                    <SlottedSVG slot='app-icon' viewBox="0 0 24 24" height="1.5rem" width="1.5rem" fill="currentcolor" path={mdiAccount} />
                    Account Settings
                </NavLink>
            </IcNavigationItem>
        </IcSideNavigation>
        </main>
    );
};

export default SideNav