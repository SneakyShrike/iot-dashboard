import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IcDialog, IcSelect, IcTextField, SlottedSVG } from "@ukic/react";
import HomeIOTWidgetData from "../HomeIOTWidgetData/HomeIOTWidgetData";

interface AddWidgetDialogProps
{
    isDialogOpen: boolean; // passed in state from PageHeader  
    onClose: () => void; // passed in handleDialogClose function from PageHeader
    onConfirm: (newWidget: string) => void; // passed in handleDialogConfirm function from PageHeader
}

const AddWidgetDialog = (props: AddWidgetDialogProps) =>
{
    const currentPage = useLocation().pathname.replace(/\//g, '').toUpperCase();
    const [newWidgetData, setNewWidgetData] = useState('');

    const handleConfirm = () => 
    {
        if (newWidgetData.trim()) 
        {
            props.onConfirm(newWidgetData);
            setNewWidgetData(''); // Clear input after confirm
            props.onClose(); // Calls the handleDialogClose function from PageHeader
        }
      };
    
      const handleCancel = () => 
      {
        setNewWidgetData(''); // Clear input
        props.onClose(); // Calls the handleDialogClose function from PageHeader
      };

      const handleWidgetData = (data: string) => {
        setNewWidgetData(data);
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