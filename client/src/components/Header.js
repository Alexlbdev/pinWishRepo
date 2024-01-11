import React from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch, useSelector} from "react-redux";
import {logoutAction, openEntryFormAction} from "../redux/actions/loginFormActions";

const Header = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const buttonType = (user) => {
        if (user){
            return <Button color="inherit" onClick={() => dispatch(logoutAction())}>Logout</Button>
        } else {
            return <Button color="inherit" onClick={() => dispatch(openEntryFormAction())}>Login</Button>
        }
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PinWish
                    </Typography>
                    {buttonType(user)}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;