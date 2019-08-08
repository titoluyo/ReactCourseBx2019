import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Estados from './Estados';
import Contactos from './Contactos';
import Llamadas from './Llamadas';

export default function Body({}) {
    const [tab, setTab] = useState(0);
    const handleChangeTab = (event, newValue) => {setTab(newValue)};
    return (<div>
        <AppBar position="relative">
            <Tabs
                variant="fullWidth"
                value={tab}
                onChange={handleChangeTab}
                >
                <Tab label="Chat"/>
                <Tab label="Estados"/>
                <Tab label="Llamadas"/>

            </Tabs>
        </AppBar>

        {tab === 0 && <Contactos/>}
        {tab === 1 && <Estados/>}
        {tab === 2 && <Llamadas/>}
        Body test
    </div>)
}

