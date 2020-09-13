import React from "react";
import BusBadge from "./busBadge";
import "../../../css/bus/color.css"

interface BusInfo {

}

const FirstBusStartBadge = () => {
    return (
        <React.Fragment>
            <BusBadge text="첫차" color={"yellowgreen"}/>
        </React.Fragment>
    )
}

export default FirstBusStartBadge
