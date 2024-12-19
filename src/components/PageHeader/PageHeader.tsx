import { useState } from "react";
import { IcPageHeader, IcButton, SlottedSVG } from "@ukic/react";
import {mdiPlus, mdiDelete } from '@mdi/js';
import AddWidgetDialog from "../AddWidgets/AddWidgetDialog/AddWidgetDialog";
import styles from './PageHeader.module.css'

interface PageHeaderProps
{
    headerTitle: string;
    onAdd: (newWidget: { name: string; description: string; location: string }) => void; // Expecting a single widget object
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
    
    const handleDialogConfirm = (newWidget: { name: string; description: string; location: string }) => 
    {
        props.onAdd(newWidget);
        setDialogOpen(false);
    };

    return (
        <header className={styles.container}>
            <IcPageHeader size="small" aligned="full-width" border="true" heading={props.headerTitle}>  
                <IcButton slot="actions" variant="primary" onClick={handleDialogOpen}>Add Widget
                    <SlottedSVG slot='left-icon' path={mdiPlus} />              
                </IcButton>
                <IcButton slot="actions" variant="destructive">Delete Widget
                    <SlottedSVG slot='left-icon' path={mdiDelete} />              
                </IcButton>
            </IcPageHeader>
            <AddWidgetDialog isDialogOpen={isDialogOpen} onClose={handleDialogClose} onConfirm={handleDialogConfirm} />
        </header>
        
    );
};

export default PageHeader