import React from "react";
import BusBadge from "./busBadge";

interface BusInfo {

}

const TrafficBusBadge = () => {
    return (
        <React.Fragment>
            <BusBadge text="간선" color={"blue"}/>
        </React.Fragment>
    )
}

export default TrafficBusBadge
