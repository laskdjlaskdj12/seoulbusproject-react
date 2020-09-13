import React from "react";
import BusBadge from "./busBadge";

interface BusInfo {

}

const MetroPolitanBusBadge = () => {
    return (
        <React.Fragment>
            <BusBadge text="광역" color={"red"}/>
        </React.Fragment>
    )
}

export default MetroPolitanBusBadge
