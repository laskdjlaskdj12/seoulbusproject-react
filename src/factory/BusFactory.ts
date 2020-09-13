import BusTypeColor from "../enum/BusTypeColor";

export class BusFactory {
    public static getBusColor(busType:number):BusTypeColor{
        switch (busType) {
            case 0:
                return BusTypeColor.LOCAL;
            case 3:
                return BusTypeColor.TRAFFIC;
            case 4:
                return BusTypeColor.LOCAL;
            case 5:
                return BusTypeColor.LOOP;
            case 6:
            case 7:
            case 8:
                return BusTypeColor.METRO;
            default:
                return undefined!;
        }
    }
}