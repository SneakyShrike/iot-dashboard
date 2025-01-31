import styles from './BaseWidget.module.css';
import {IcSectionContainer} from "@ukic/react";

// Define the expected structure for widgetData
interface WidgetProps {
  widgetData: Record<string, string>; // Update to an object
  onDelete: () => void;
}

const Widget = (props: WidgetProps) => {
  const { widgetData } = props; // Destructure the widget data

  return (
    <div className={styles.container}>
      <IcSectionContainer aligned='center'>
        <header className={styles.headerContainer}>
          {/* <h1>{widgetData.name || "Unnamed Widget"}</h1> */}
        </header>
        {/* <main className={styles.dataContainer}>
          <p><strong>Description:</strong> {description}</p> 
          <p><strong>Location:</strong> {location}</p> 
        </main> */}
        <main className={styles.dataContainer}>
          {Object.entries(widgetData).map(([key, value]) => 
            key !== "name" && <p key={key}><strong>{key}:</strong> {value}</p>
          )}
        </main>
        <footer className={styles.footerContainer}>
          <button onClick={props.onDelete}>Delete Widget</button> {/* Delete button */}
        </footer>
      </IcSectionContainer>
    </div>
  );
};

export default Widget;
