import { useState } from "react";
import { IcPageHeader, IcButton, SlottedSVG } from "@ukic/react";
import {mdiPlus, mdiDelete } from '@mdi/js';
import styles from './PageHeader.module.css';
import AddView from "../AddView/AddView";

interface PageHeaderProps
{
    headerTitle: string;
}

const PageHeader = (props: PageHeaderProps) =>
{
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const handleDialogOpen = () => setOpenDialog(true);
    const handleDialogClose = () => setOpenDialog(false);

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
            <AddView openDialog={openDialog} onClose={handleDialogClose} />
        </header>
        
    );
};

export default PageHeader