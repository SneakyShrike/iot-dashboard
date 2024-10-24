import { IcPageHeader, IcButton, SlottedSVG } from "@ukic/react";
import {mdiPlus, mdiDelete } from '@mdi/js';
import styles from './PageHeader.module.css';

interface PageHeaderProps
{
    headerTitle: string;
}

const PageHeader = (props: PageHeaderProps) =>
{
    return (      
        <header className={styles.PageHeader}>
            <IcPageHeader size="small" aligned="full-width" border="false" heading={props.headerTitle}>
                {/* <header className={styles.PageHeader}> */}
                    <IcButton slot="actions" variant="primary">Add a View
                        <SlottedSVG slot='left-icon' path={mdiPlus} />              
                    </IcButton>
                    <IcButton slot="actions" variant="destructive">Delete a View
                        <SlottedSVG slot='left-icon' path={mdiDelete} />              
                    </IcButton>
                {/* </header>      */}
            </IcPageHeader>
        </header>  
    );
};

export default PageHeader