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
  // define useState hook for getting current state (widgets) and setting state (setWidgets function)
  // this defines an array of widget objects
  //const [widgets, setWidgets] = useState<{ name: string; description: string; location: string }[]>([]);
  const [widgetsByPage, setWidgetsByPage] = useState<{ [key: string]: { name: string; description: string; location: string }[] }>({});

  // called in PageHeader when the user confirms, widget object data is passed from PageHeader
  // const addWidget = (newWidget: { name: string; description: string; location: string }) => 
  // {
  //   // setWidgets takes in an arrow function with the parameter prevWidgets
  //   setWidgets((prevWidgets) =>  [...prevWidgets, newWidget]); // arrow function body
  //   // prevWidgets is the value of widgets
  //   // adds a new newWidget object to the widgets array that uses the spread (...) operator to copy the widget object data to new widget object
  // };

  const addWidget = (newWidget: { name: string; description: string; location: string }) => 
  {
    setWidgetsByPage((prevWidgets) => 
    {
      const currentWidgets = prevWidgets[props.pageName] || [];
        return {
          ...prevWidgets,
          [props.pageName]: [...currentWidgets, newWidget],
        };
    });
  };

  // const deleteWidget = (index: number) => 
  // {
  //     setWidgets((prevWidgets) => prevWidgets.filter((_, i) => i !== index));
  // };

  const deleteWidget = (index: number) => 
  {
    setWidgetsByPage((prevWidgets) => 
    {
      const currentWidgets = prevWidgets[props.pageName] || [];
      return {
        ...prevWidgets,
        [props.pageName]: currentWidgets.filter((_, i) => i !== index),
      };
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <PageHeader headerTitle={props.pageName} onAdd={addWidget}></PageHeader>
      </header>
      <main className={styles.widgetsContainer}> 
        {/* iterate through the widgets array and for each render a new BaseWidget */}
        {widgetsByPage[props.pageName]?.map((widget, index) => 
        (
          <BaseWidget key={index} widgetData={widget} onDelete={() => deleteWidget(index)} />
        ))}
      </main>
    </div>
  );
};

export default BasePage