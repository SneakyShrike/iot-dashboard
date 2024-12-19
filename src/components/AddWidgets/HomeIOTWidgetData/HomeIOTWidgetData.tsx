import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IcDialog, IcSelect, IcTextField, SlottedSVG } from "@ukic/react";

interface HomeIOTWidgetDataProps
{
    widgetData: (newWidget: string) => void;
    // isDialogOpen: boolean; // passed in state from PageHeader  
    // onClose: () => void; // passed in handleDialogClose function from PageHeader
    // onConfirm: (newWidget: string) => void; // passed in handleDialogConfirm function from PageHeader
}

const HomeIOTWidgetData = (props: HomeIOTWidgetDataProps) =>
{
    // const currentPage = useLocation().pathname.replace(/\//g, '').toUpperCase();
    //const [newWidgetData, setNewWidgetData] = useState('');

    const onFormValueChange = (value: string) => 
    {
        //setNewWidgetData(value); 
        props.widgetData(value);
    };
    
    //   const handleCancel = () => 
    //   {
    //     setNewWidgetData(''); // Clear input
    //     props.onClose(); // Calls the handleDialogClose function from PageHeader
    //   };
    
    return (
        // <IcDialog
        //     size="large"
        //     open={props.isDialogOpen} 
        //     onIcDialogClosed={handleCancel}
        //     onIcDialogConfirmed={handleConfirm}
        //     onIcDialogCancelled={handleCancel}>
        //     {<h1>Add a new widget</h1>}
        <>
            {/* <IcTextField 
                label="Name" 
                placeholder="Living Room" 
                helperText="Kitchen, Garage etc."
                onIcChange={(event) => setNewWidgetData(event.detail.value)}
            /> */}
            <IcTextField 
                label="Name" 
                placeholder="Living Room" 
                helperText="Kitchen, Garage etc."
                onIcChange={(event) => onFormValueChange(event.detail.value)}
            />
        </>    
    );
};

export default HomeIOTWidgetData