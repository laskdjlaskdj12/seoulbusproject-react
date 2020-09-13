import React from 'react';
import {cordinate} from "../../interface/cordinate";


interface MapComponentProps {
    maps: any,
    map: any,
    markers: cordinate[]
}

const PolylineComponent = (props: MapComponentProps) => {

    const renderPolyLines = () => {
        const {markers, map, maps} = props

        let geoPolyLine = new maps.PolyLine({
            path: markers,
            geodesic: false,
            strokeColor: 'rgba(238,0,0,0.76)',
            strokeOpacity: 0.7,
            strokeWeight: 10
        })

        geoPolyLine.setMap(map);
    }

    return (
        <React.Fragment>
            {/*{renderPolyLines()}*/}
        </React.Fragment>
    )
}

export default PolylineComponent;
