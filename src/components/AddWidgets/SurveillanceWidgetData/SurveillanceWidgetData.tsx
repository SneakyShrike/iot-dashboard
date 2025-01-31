import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IcDialog, IcSelect, IcTextField, SlottedSVG } from "@ukic/react";

interface SurveillanceWidgetDataProps
{
    // definition for handleWidgetData function in AddWidgetDialog
    widgetData: (data: Record<string, string>) => void;
}

const SurveillanceWidgetData = (props: SurveillanceWidgetDataProps) =>
{

  const options = [
    { label: "Camera 1", value: "camera 1"},
    { label: "Camera 2", value: "camera 2" },
    { label: "Camera 3", value: "camera 3"},
  ];

    // define useState hook for getting current state (formData) and setting state (setFormData function)
  const [formData, setFormData] = useState<Record<string, string>>({
    // initialise object data as empty strings
    name: '',
    location: '',
    feed: ''
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
        label="Camera Name"
        placeholder="Porch Camera"
        helperText="Enter the name of the camera"
        value={formData.name}
        onIcChange={(event) => handleInputChange('name', event.detail.value)}
      />
      <IcTextField
        label="Location"
        placeholder="Kitchen, Garage"
        helperText="Enter the location of the camera"
        value={formData.location}
        onIcChange={(event) => handleInputChange('location', event.detail.value)}
      />
      <IcSelect 
        label="Camera Feed"
        options={options}
        helperText="Choose a camera feed"
        onIcChange={(event) => handleInputChange('feed', event.detail.value)}
      />
    </>   
    );
};

export default SurveillanceWidgetData