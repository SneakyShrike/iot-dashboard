import { useLocation } from "react-router-dom";
import { IcDialog, IcSelect, IcTextField, SlottedSVG } from "@ukic/react";
import {mdiPlus, mdiDelete } from '@mdi/js';
import styles from './AddView.module.css';
import AddViewHomeIOT from "./AddViewHomeIOT";
import AddViewSurveillance from "./AddViewSurveillance";

interface AddViewProps
{
    openDialog: boolean;
    onClose: () => void;
}

const AddView = (props: AddViewProps) =>
{
    const currentPage = useLocation().pathname.replace(/\//g, '').toUpperCase();

    const classifications = 
    [
        {
            label: "OFFCIAL",
            value: "offcial"
        },
        {
            label: "OFFCIAL-SENSITIVE",
            value: "offcial-sensitive"
        },
        {
            label: "SECRET",
            value: "secret"
        },
        {
            label: "TOP-SECRET",
            value: "top-secet"
        }
    ];

    return (
        <IcDialog
            size="large"
            open={props.openDialog}
            onIcDialogClosed={props.openDialog && props.onClose}
            onIcDialogConfirmed={props.onClose}
            onIcDialogCancelled={props.onClose}>
            <h1>Add a new {currentPage} view</h1>
            <IcSelect 
                label="Choose a GSC"
                helperText="GSC (Govenment Security Classification)"
                placeholder="OFFICIAL"
                options={classifications} 
                showClearButton>
            </IcSelect>
            <section>
                {currentPage === 'HOME-IOT' && (<AddViewHomeIOT/>)}
                {currentPage === 'SURVEILLANCE' && (<AddViewSurveillance/>)}
            </section>
        </IcDialog>

    );
};

export default AddView