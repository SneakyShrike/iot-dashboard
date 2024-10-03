import { IcPageHeader, IcButton, SlottedSVG  } from "@ukic/react";
import {mdiPlus, mdiDelete } from '@mdi/js';

const PageHeader = ({headerTitle}) =>
{
    return (
        <header>
            <IcPageHeader size="small" heading={headerTitle}>
                <IcButton slot="actions" variant="primary">Add a View
                    <SlottedSVG slot='left-icon' path={mdiPlus} />              
                </IcButton>
                <IcButton slot="actions" variant="destructive">Delete a View
                    <SlottedSVG slot='left-icon' path={mdiDelete} />              
                </IcButton>      
            </IcPageHeader>
        </header>  
    );
};

export default PageHeader