import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IcDialog, IcSelect, IcTextField, SlottedSVG } from "@ukic/react";
import HomeIOTWidgetData from "../HomeIOTWidgetData/HomeIOTWidgetData";

interface AddWidgetDialogProps
{
    isDialogOpen: boolean; // passed in state from PageHeader  
    onClose: () => void; // passed in handleDialogClose function from PageHeader
    onConfirm: (newWidget: { name: string; description: string; location: string }) => void; // Expect an object
}

const AddWidgetDialog = (props: AddWidgetDialogProps) =>
{
    const currentPage = useLocation().pathname.replace(/\//g, '').toUpperCase();
    const [widgetData, setWidgetData] = useState<{ name: string; description: string; location: string }>({
        name: '',
        description: '',
        location: ''
      });

    // Handle receiving the widget data from the child
    const handleWidgetData = (data: { name: string; description: string; location: string }) => {
    setWidgetData(data); // Update widget data
  };

  // When the user confirms, pass the widget data to the parent
  const handleConfirm = () => {
    if (widgetData.name.trim()) {
      props.onConfirm(widgetData); // Send the entire widget data object
      setWidgetData({ name: '', description: '', location: '' }); // Clear data after confirm
      props.onClose(); // Close the dialog
    }
  };

  // Handle dialog cancellation
  const handleCancel = () => {
    setWidgetData({ name: '', description: '', location: '' }); // Clear data
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