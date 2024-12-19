import { useState } from "react";
import PageHeader from '../../PageHeader/PageHeader';
import BaseWidget from '../../Widgets/BaseWidget/BaseWidget';
import styles from './BasePage.module.css';

interface BasePageProps 
{
    pageName: string;
}

const BasePage = (props: BasePageProps) =>
{
    const [widgets, setWidgets] = useState<string[]>([]); // State to store widgets

    const addWidget = (newWidget: string) => 
    {
        setWidgets((prevWidgets) => [...prevWidgets, newWidget]);
    };

    const deleteWidget = (index: number) => 
    {
        setWidgets((prevWidgets) => prevWidgets.filter((_, i) => i !== index));
    };

    return (
      <div className={styles.container}>
        <header className={styles.headerContainer}>
          <PageHeader headerTitle={props.pageName} onAdd={addWidget}></PageHeader>
        </header>
        <main className={styles.widgetsContainer}>
          {widgets.map((widget, index) => (
            <BaseWidget
              key={index}
              widgetData={widget}
              onDelete={() => deleteWidget(index)}/>))}
        </main>
      </div>
    );
};

export default BasePage