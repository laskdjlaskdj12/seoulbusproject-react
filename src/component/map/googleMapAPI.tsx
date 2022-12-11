import {Map, GoogleApiWrapper, Polyline} from 'google-maps-react';
import React from "react";
import {BusRoute} from "../../interface/busRoute";
import BusTypeColor from "../../enum/BusTypeColor";
import {BusFactory} from "../../factory/BusFactory";

interface WithPolyLinesProps {
    apiKey: string
    busLine: BusRoute[]
}

const WithPolyLinesWrapper = (props: WithPolyLinesProps) => {

    const WithPolylLinesWrapper = GoogleApiWrapper({
        apiKey: (props.apiKey)
    })(WithPolylines)

    return (
        <WithPolylLinesWrapper busLine={props.busLine}/>
    )
}

const WithPolylines = (props: any) => {

    return (
        <Map
            google={props.google}
            style={{height: '100%', position: 'relative', width: '100%'}}
            initialCenter={{'lat': 37.6736710635, 'lng': 127.046703946}}>
            {
                props.busLine.map((busRouteInfo: BusRoute, index: number) => {
                    return <Polyline
                        fillColor={busRouteInfo.line_color_code}
                        fillOpacity={0.35}
                        path={busRouteInfo.cordination}
                        strokeColor={busRouteInfo.line_color_code}
                        strokeOpacity={1.0}
                        strokeWeight={10}
                        key={index}
                    />
                })
            }
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDuVkjTHcn0qFUBtOyDErDpYJxuXtOofxQ'
})(WithPolylines)
