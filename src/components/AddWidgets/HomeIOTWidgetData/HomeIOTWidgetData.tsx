import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IcDialog, IcSelect, IcTextField, SlottedSVG } from "@ukic/react";

interface HomeIOTWidgetDataProps
{
    // definition for handleWidgetData function in AddWidgetDialog
    widgetData: (data: { name: string; description: string; location: string }) => void;
}

const HomeIOTWidgetData = (props: HomeIOTWidgetDataProps) =>
{
    // define useState hook for getting current state (formData) and setting state (setFormData function)
    const [formData, setFormData] = useState<{ name: string; description: string; location: string }>
    ({
      // initialise object data as empty strings
      name: '',
      description: '',
      location: ''
    });

    // updates the formData with the latest data by calling setFormData
  const handleInputChange = (field: string, value: string) => 
  {
    // takes in an arrow function with the parameter prev
    setFormData((prev) => 
    // arrow function body
    { 
      // creates a new object updatedData (immutable) that uses the spread (...) operator that copies all the key-value pairs from the prev object
      const updatedData = { ...prev, [field]: value };
      // call the handleWidgetData function in AddWidgetDialog and pass it the new object
      props.widgetData(updatedData); 
      // updates the formData value with updatedData
      return updatedData; 
    });
  };
   
    return (
        <>
        <IcTextField
        label="Widget Name"
        placeholder="Living Room"
        helperText="Enter the name of the widget"
        value={formData.name}
        onIcChange={(event) => handleInputChange('name', event.detail.value)}
      />
      <IcTextField
        label="Description"
        placeholder="A brief description"
        helperText="Enter a short description"
        value={formData.description}
        onIcChange={(event) => handleInputChange('description', event.detail.value)}
      />
      <IcTextField
        label="Location"
        placeholder="Kitchen, Garage"
        helperText="Enter the location of the widget"
        value={formData.location}
        onIcChange={(event) => handleInputChange('location', event.detail.value)}
      />
    </>   
    );
};

export default HomeIOTWidgetData