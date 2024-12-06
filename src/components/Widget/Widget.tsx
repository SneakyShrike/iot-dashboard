import styles from './Widget.module.css';
import {IcSectionContainer} from "@ukic/react";

interface WidgetProps 
{
    widgetData: string;
    onDelete: () => void;
}

const Widget = (props: WidgetProps) =>
{
    return (
        <IcSectionContainer aligned='center'>
            <main>
                <h1>This is a Widget</h1>
                <p>{props.widgetData}</p>
            </main>
        </IcSectionContainer>
    );
};

export default Widget