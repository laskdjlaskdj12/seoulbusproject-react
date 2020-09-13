import React from 'react';
import "../../../css/bus/color.css"
import {BusRouteColorFactory} from "../../../factory/BusRouteColorFactory";

interface BadgeInfoProps {
    text: string
    color: string,
}

const BusBadge = (props: BadgeInfoProps) => {
    return (
        <div className={BusRouteColorFactory.getRouteColorCode(props.color)+ " bus-badge"}>
            {props.text}
        </div>
    )
}

export default BusBadge
