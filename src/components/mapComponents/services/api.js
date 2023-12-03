import { markersMockData } from "../mockData/markerCoordinatesMock";


class Api {

    async getUserData() {
        //apis gamodzaxeba
        return markersMockData;

    }

    async saveMarkerData({lat, lng}) {
        console.log("lat", lat);
        console.log("lng", lng);
    }
}

export default new Api();
