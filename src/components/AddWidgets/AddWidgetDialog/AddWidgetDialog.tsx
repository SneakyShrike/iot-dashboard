import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IcDialog, IcSelect, IcTextField, SlottedSVG } from "@ukic/react";
import HomeIOTWidgetData from "../HomeIOTWidgetData/HomeIOTWidgetData";

interface AddWidgetDialogProps
{
    // passed in state from PageHeader
    isDialogOpen: boolean;
     // definition for handleDialogClose function in PageHeader
    onClose: () => void; 
    // definition for handleDialogConfirm function in PageHeader
    onConfirm: (newWidget: { name: string; description: string; location: string }) => void;
}

const AddWidgetDialog = (props: AddWidgetDialogProps) =>
{   
    // gets the the current page the user is on
    const currentPage = useLocation().pathname.replace(/\//g, '').toUpperCase();

    // define useState hook for getting current state (widgetData) and setting state (setWidgetData function)
    const [widgetData, setWidgetData] = useState<{ name: string; description: string; location: string }>
    ({
      // initialise object data as empty strings
      name: '',
      description: '',
      location: ''
    });

    // updates the widgetData with the latest data by calling setWidgetData, this is called in WidgetData components where the form data is passed
    const handleWidgetData = (data: { name: string; description: string; location: string }) => 
    {
      // updates widgetData value
      setWidgetData(data); 
    };

  // when the user confirms add a new widget
  const handleConfirm = () => 
  {
    // calls handleDialogConfirm function in PageHeader and pass it object with form data
    props.onConfirm(widgetData); 
    // clear object data after confirm
    setWidgetData({ name: '', description: '', location: '' }); 
    // call the handleDialogClose function in PageHeader
    props.onClose();
  };

  // when the user cancels clear the form and close the dialog
  const handleCancel = () => 
  {
    // clear object data after confirm
    setWidgetData({ name: '', description: '', location: '' }); 
     // call the handleDialogClose function in PageHeader
    props.onClose(); // Close the dialog
  };
    
    return (
        <IcDialog
            size="large"
            open={props.isDialogOpen} 
            onIcDialogClosed={handleCancel}
            onIcDialogConfirmed={handleConfirm}
            onIcDialogCancelled={handleCancel}>
            {<h1>Add a new widget</h1>}
            <section>
                {currentPage === 'HOME-IOT' && (<HomeIOTWidgetData widgetData={handleWidgetData}/>)}
            </section>
        </IcDialog>

    );
};

export default AddWidgetDialog