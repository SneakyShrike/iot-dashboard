import styles from './BaseWidget.module.css';
import {IcSectionContainer} from "@ukic/react";

// Define the expected structure for widgetData
interface WidgetProps {
  widgetData: { name: string; description: string; location: string }; // Update to an object
  onDelete: () => void;
}

const Widget = (props: WidgetProps) => {
  const { name, description, location } = props.widgetData; // Destructure the widget data

  return (
    <div className={styles.container}>
      <IcSectionContainer aligned='center'>
        <header className={styles.headerContainer}>
          <h1>{name}</h1> {/* Render the widget's name */}
        </header>
        <main className={styles.dataContainer}>
          <p><strong>Description:</strong> {description}</p> {/* Render the description */}
          <p><strong>Location:</strong> {location}</p> {/* Render the location */}
        </main>
        <footer className={styles.footerContainer}>
          <button onClick={props.onDelete}>Delete Widget</button> {/* Delete button */}
        </footer>
      </IcSectionContainer>
    </div>
  );
};

export default Widget;
