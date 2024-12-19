import styles from './BaseWidget.module.css';
import {IcSectionContainer} from "@ukic/react";



interface WidgetProps 
{
    widgetData: string;
    onDelete: () => void;
}

const Widget = (props: WidgetProps) =>
{
    return (
        <div className={styles.container}>
            <IcSectionContainer aligned='center'>
                <header className={styles.headerContainer}>
                    <h1>This is a Widget</h1>
                </header>
                <main className={styles.dataContainer}>
                    <p>{props.widgetData}</p>
                </main>
            </IcSectionContainer>
        </div>
    );
};

export default Widget