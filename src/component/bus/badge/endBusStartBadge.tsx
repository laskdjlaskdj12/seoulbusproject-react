import React from "react";
import BusBadge from "./busBadge";

interface BusInfo {

}

const EndBusStartBadge = () => {
    return (
        <React.Fragment>
            <BusBadge text="막차" color={"salgu"}/>
        </React.Fragment>
    )
}

export default EndBusStartBadge
