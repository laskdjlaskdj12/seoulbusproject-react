import React, {useEffect, useState} from "react";
import BusLabel from "./label/busLabel";
import "../../css/bus/panel.css"
import {inject, observer} from "mobx-react";
import {BUSLINE_STORE, BusLineStore} from "../../store/bus/busLineStore";
import {toJS} from "mobx";
import WithPolyLinesWrapper from "../map/googleMapAPI";


interface PanelInjectProps {
    busLineStore?: BusLineStore
}

const Panel = inject(BUSLINE_STORE)(observer((prop: PanelInjectProps) => {
    const [busId, setBusID] = useState<string>("")
    const {busLineStore} = prop

    const submitBusLine = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()

        if (busId?.length === 0) {
            return
        }

        busLineStore!.loadBusRoute(busId!)
    }

    const busFormInput = (e: React.FormEvent<HTMLInputElement>) => {
        setBusID(e.currentTarget.value)
    }

    const showSpecifiedClickEvent = (busLine: string) => {
        console.log(`busNumber = ${busLine}`)
        busLineStore!.clickBusLine(busLine)
    }

    return (
        <div className="background">
            <div className="side-bar">
                <div className="search">
                    <form className="search-bus-station-id" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="stationID" id="station-id-input" value={busId}
                               onChange={busFormInput}/>
                        <input type="submit" value="🔍" id="station-id-button"
                               onClick={submitBusLine}/><br/><br/>
                    </form>
                </div>
                <div className="station-list">
                    {busLineStore!.busRouteList.map(((value, index) => {
                            value = toJS(value)
                            console.log("BusType")
                            console.log(value.busType)
                            return (<BusLabel busNumber={toJS(value).route_number} color={toJS(value).color}
                                              busType={value.busType}
                                              key={index}
                                              isEnable={!toJS(value).isDisable}
                                              selectBusNumber={showSpecifiedClickEvent}/>)
                        }
                    ))}
                </div>
            </div>
            <div className="main-view">
                <WithPolyLinesWrapper apiKey='AIzaSyDuVkjTHcn0qFUBtOyDErDpYJxuXtOofxQ'
                                      busLine={toJS(busLineStore!.busRouteList.filter((value) => !value.isDisable))}/>
            </div>
        </div>
    )
}));
export default Panel
