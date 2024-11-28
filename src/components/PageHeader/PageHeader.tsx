import { useState } from "react";
import { IcPageHeader, IcButton, SlottedSVG } from "@ukic/react";
import {mdiPlus, mdiDelete } from '@mdi/js';
import styles from './PageHeader.module.css';
import AddWidgetDialog from "../AddView/AddWidgetDialog";

interface PageHeaderProps
{
    headerTitle: string;
    onAdd: (newWidget: string) => void;
}

const PageHeader = (props: PageHeaderProps) =>
{
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleDialogOpen = () => 
    {
        setDialogOpen(true);
    };
    
    const handleDialogClose = () => 
    {
        setDialogOpen(false);
    };
    
    const handleDialogConfirm = (newWidget: string) => 
    {
        props.onAdd(newWidget);
        setDialogOpen(false);
    };

    return (      
        <header className={styles.PageHeader}>
            <IcPageHeader size="small" aligned="full-width" border="false" heading={props.headerTitle}>  
                    <IcButton slot="actions" variant="primary" onClick={handleDialogOpen}>Add a View
                        <SlottedSVG slot='left-icon' path={mdiPlus} />              
                    </IcButton>
                    <IcButton slot="actions" variant="destructive">Delete a View
                        <SlottedSVG slot='left-icon' path={mdiDelete} />              
                    </IcButton>
            </IcPageHeader>
            <AddWidgetDialog isDialogOpen={isDialogOpen} onClose={handleDialogClose} onConfirm={handleDialogConfirm} />
        </header>
        
    );
};

export default PageHeader