import { IcEmptyState, IcButton } from "@ukic/react";
import { NavLink } from "react-router-dom";

function NotFound() 
{
    return (
        <IcEmptyState heading="404" subheading="Page not found">
            <IcButton slot="actions">Go to Homepage
                <NavLink to="/home-iot" slot="primary-navigation">
                </NavLink>
            </IcButton>
        </IcEmptyState>
    );
};

export default NotFound