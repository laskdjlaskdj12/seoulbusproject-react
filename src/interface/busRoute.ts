import {cordinate} from "./cordinate";

export interface BusRoute {
    busType: number,
    route_number: string,
    color: string,
    line_color_code: string,
    cordintaion: cordinate[]
}