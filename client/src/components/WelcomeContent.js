import React from 'react';
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {openEntryFormAction} from "../redux/actions/loginFormActions";
import EntryForm from "./EntryForm";

const WelcomeContent = () => {
    const dispatch = useDispatch();
    return (
        <>
            <p>Please
                <Button variant="text" onClick={() => dispatch(openEntryFormAction())}>login</Button>
            </p>
            <EntryForm/>
        </>
    );
};

export default WelcomeContent;