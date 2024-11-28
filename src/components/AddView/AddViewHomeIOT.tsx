import {IcSelect, IcTextField} from "@ukic/react";
import styles from './AddViewForm.module.css';

interface AddViewFormProps
{

}
const AddViewForm = (props: AddViewFormProps) =>
{  
    return (
        <>
            <IcTextField 
                label="Room"
                helperText="Bedroom, Kitchen, Garden etc."
                placeholder="Living Room">
            </IcTextField>          
        </>
    );      
};

export default AddViewForm