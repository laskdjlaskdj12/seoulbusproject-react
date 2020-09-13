import {action, observable} from "mobx";
import {BusRoute} from "../../interface/busRoute";
import Axios from "axios";
import {BACKEND_URL} from "../../config/Envirorment";

export const BUSLINE_STORE = 'busLineStore'

export class BusLineStore {

    @observable
    public busRouteList: BusRoute[] = [];

    @observable
    public googleMapAPIKey: string = "";

    @action
    public loadGoogleMapAPI() {
        const header = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                withCredentials: 'true',
                credentials: 'include',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept"
            }
        }

        Axios.get(`${BACKEND_URL}/laskdjos/bus/googleapi`,
            header)
            .then(response => {
                if (response.status !== 200) {
                    console.log("Google API 로딩 실패")
                    return
                }

                this.googleMapAPIKey = response.data.googleMapAPI
            })
            .catch(reason => {
                if (reason.status !== 200) {
                    console.log("Exception발생으로 인한 Google API 로딩 실패")
                    return
                }
            })

    }

    @action
    public loadBusRoute(busStationId: string) {
        const data = {
            station_id: busStationId
        }

        const header = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                withCredentials: 'true',
                credentials: 'include',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept"
            }
        }

        Axios.post(`${BACKEND_URL}/laskdjos/bus/busRoute/station/search`, data, header)
            .then(response => {
                if (response.status !== 200) {
                    console.log("데이터 로딩 실패")
                    return
                }

                console.log(response.data)
                this.busRouteList = response.data
            })
            .catch(reason => {
                if (reason.status !== 200) {
                    console.log(reason.message)
                    console.log(reason.status)
                    console.log("Exception발생으로 인한 데이터 로딩 실패")
                    return
                }
            })
    }
}