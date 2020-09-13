import React, {useEffect, useState} from 'react';
import "../../../css/bus/busLabel.css"
import LocalBusBadge from "../badge/localBusBadge";
import TrafficBusBadge from "../badge/trafficBusBadge";
import MetroPolitanBusBadge from "../badge/metroPolitanBusBadge";
import LoopBusBadge from "../badge/loopBusBadge";
import ScrappedBusBadge from "../badge/scrappedBusBadge";
import BusType from "../../../enum/BusType";
import FirstBusStartBadge from "../badge/firstBusStartBadge";
import EndBusStartBadge from "../badge/endBusStartBadge";

interface BusLabelProps {
    busNumber: string,
    color: string,
    busType: BusType
}

const BusLabel = (props: BusLabelProps) => {

    const busType = (busType: BusType) => {
        switch (busType) {

                //지선 (초록색버스)
            case BusType.local:
                return <LocalBusBadge/>

                //순환 (노란색 버스)
            case BusType.loop:
                return <LoopBusBadge/>

                //광역 (빨간색 버스)
            case BusType.metro:
                return <MetroPolitanBusBadge/>

                //간선 (파란색버스)
            case BusType.traffic:
                return <TrafficBusBadge/>

                //폐선버스 (다크레드)
            case BusType.scrapped:
                return <ScrappedBusBadge/>
        }
    }

    const lineColor = "line-" + props.color

    return (
        <div className="panel-container">
            <div className={lineColor}/>
            <div className="container-name">
                <div className="first">
                    <div className="badge-item">
                        {busType(props.busType)}
                        <span className="container-bus-number">
                            {props.busNumber}
                        </span>
                    </div>
                </div>
                <div className="badge-space"/>
                <div className="badge-item">
                    <FirstBusStartBadge/>
                    <span className="container-bus-number">
                        12:34
                    </span>
                </div>
                <div className="badge-item">
                    <EndBusStartBadge/>
                    <span className="container-bus-number">
                        12:34
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BusLabel;
