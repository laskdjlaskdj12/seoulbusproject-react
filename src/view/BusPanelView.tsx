import React from 'react'
import Panel from "../component/bus/panel";
import {Provider} from "mobx-react";
import {BusLineStore} from "../store/bus/busLineStore";

const BusPanelView = () => {
    const store = {
        busLineStore: new BusLineStore()
    }
    
    return (
        <Provider {...store}>
            <Panel/>
         </Provider>
    )
}

export default BusPanelView;