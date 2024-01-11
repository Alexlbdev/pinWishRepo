import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {closeEntryFormAction, loginAction} from "../redux/actions/loginFormActions";
import {useDispatch, useSelector} from "react-redux";

const EntryForm = () => {
    const entryFormIsOpen = useSelector(state => state.entryFormIsOpen);
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const handleClickSignIn = (user) => {
        const userData = user + "_data"; //fetch
        dispatch(loginAction(userData));
    }
    return (
        <>
            <Dialog open={entryFormIsOpen} aria-labelledby="Login-dialog">
                <DialogTitle style={{ cursor: 'move' }} id="Login-dialog">
                    Login
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <p>Please, enter your user name</p>
                    </DialogContentText>
                    <TextField autoFocus id="user-name" label="user" variant="standard" onChange={e => setUserName(e.target.value)}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => dispatch(closeEntryFormAction())}>
                        Cancel
                    </Button>
                    <Button onClick={() => handleClickSignIn(userName)}>Sign in</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default EntryForm;