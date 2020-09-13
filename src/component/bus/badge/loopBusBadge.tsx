import React from "react";
import BusBadge from "./busBadge";

interface BusInfo {

}

const LoopBusBadge = () => {
    return (
        <React.Fragment>
            <BusBadge text="순환" color={"yellow"}/>
        </React.Fragment>
    )
}

export default LoopBusBadge
