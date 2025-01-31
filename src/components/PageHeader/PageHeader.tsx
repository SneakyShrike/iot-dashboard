import { useState } from "react";
import { IcPageHeader, IcButton, SlottedSVG } from "@ukic/react";
import {mdiPlus, mdiDelete } from '@mdi/js';
import AddWidgetDialog from "../AddWidgets/AddWidgetDialog/AddWidgetDialog";
import styles from './PageHeader.module.css'

interface PageHeaderProps
{
    headerTitle: string;
    // definition for addWidget function in BasePage
    onAdd: (newWidget: Record<string, string>) => void;
}

const PageHeader = (props: PageHeaderProps) =>
{
     // define useState hook for getting current state (isDialogOpen) and setting state (setDialogOpen function)
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

    // open the dialog
    const handleDialogOpen = () => 
    {
        // updates isDialogOpen to true 
        setDialogOpen(true);
    };
    
    // close the dialog
    const handleDialogClose = () => 
    {
        // updates isDialogOpen to false
        setDialogOpen(false);
    };

    // called in AddWidgetDialog when the user confirms, widget object is passed from AddWidgetDialog
    const handleDialogConfirm = (newWidget: Record<string, string>) => 
    {
        // calls the addWidget function in BasePage
        props.onAdd(newWidget);
        // updates isDialogOpen to false
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