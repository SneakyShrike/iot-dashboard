import {IcSelect, IcTextField} from "@ukic/react";
import styles from './AddViewForm.module.css';

interface AddViewFormProps
{

}
const AddViewForm = (props: AddViewFormProps) =>
{  
    return (
        <>
            <IcSelect 
                label="Type of IOT view"
                helperText="Temperture, Air Quality etc."
                placeholder="Temperture"                        
                showClearButton>
            </IcSelect>
        </>
    );      
};

export default AddViewForm