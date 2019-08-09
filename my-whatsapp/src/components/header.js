import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Search, MoreVert } from '@material-ui/icons';

export default function Header() {

    return (<div>
        <AppBar position='sticky'>
            <Toolbar>
                <Typography>
                    WhatsApp
                </Typography>
                <div style={{flexGrow: 1}}/>
                <IconButton edge="end" color="inherit" aria-label="menu">
                    <Search/>
                </IconButton>
                <IconButton edge="end" color="inherit" aria-label="menu">
                    <MoreVert/>
                </IconButton>
            </Toolbar>
        </AppBar>
    </div>)
}