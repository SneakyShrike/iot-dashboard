import { useState } from "react";
import PageHeader from '../PageHeader/PageHeader';
import Widget from '../Widget/Widget';

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
        <>
          <PageHeader headerTitle={props.pageName} onAdd={addWidget}></PageHeader>
          <div>
            {widgets.map((widget, index) => (
              <Widget
                key={index}
                widgetData={widget}
                onDelete={() => deleteWidget(index)}/>))}
          </div>
        </>
    );
};

export default BasePage