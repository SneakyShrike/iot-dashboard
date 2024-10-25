import {IcSelect, IcTextField} from "@ukic/react";
import styles from './AddViewForm.module.css';

interface AddViewSurveillanceProps
{

}
const AddViewSurveillance = (props: AddViewSurveillanceProps) =>
{  
    return (
        <>
            <IcTextField
                label="Camera name / location"
                helperText="Choose a camera name either by area or name"
                required
                placeholder="Garage Camera...">
            </IcTextField>
            <IcSelect 
                label="Camera Feed"
                helperText="Choose which camera you wish to view"                    
                showClearButton>
            </IcSelect>
        </>   
    );      
};

export default AddViewSurveillance