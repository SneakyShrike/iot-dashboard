import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IcDialog, IcSelect, IcTextField, SlottedSVG } from "@ukic/react";

interface HomeIOTWidgetDataProps
{
    widgetData: (data: { name: string; description: string; location: string }) => void; // Send object to parent
}

const HomeIOTWidgetData = (props: HomeIOTWidgetDataProps) =>
{
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        location: '',
      });

    // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => {
      const updatedData = { ...prev, [field]: value };
      // Whenever form data changes, send it to the parent
      props.widgetData(updatedData); // Pass the entire object to the parent
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