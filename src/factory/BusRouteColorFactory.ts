import BusTypeColor from "../enum/BusTypeColor";

export class BusRouteColorFactory{
    public static getRouteColorCode(colorType: string):string{
        switch (colorType){
            case "green":
                return "green-bus-color"
            case "red":
                return "red-bus-color"
            case "blue":
                return "blue-bus-color"
            case "yellow":
                return "yellow-bus-color"
            case "dark-red":
                return "dark-red-bus-color"
            case "salgu":
                return "salgu-bus-color"
            case "yellowgreen":
                return "yellowgreen-bus-color"
            case "pink":
                return "pink-bus-color"
            default:
                return undefined!;
        }
        return ""
    }
}
