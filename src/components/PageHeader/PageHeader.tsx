import { IcPageHeader, IcButton, SlottedSVG  } from "@ukic/react";
import {mdiPlus, mdiDelete } from '@mdi/js';


interface PageHeaderProps
{
    headerTitle: string;
}

const PageHeader = (props: PageHeaderProps) =>
{
    return (      
        <header>
            <IcPageHeader size="small" heading={props.headerTitle}>
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