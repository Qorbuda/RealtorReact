import api from "../../mapComponents/services/api";
import maplibregl from "maplibre-gl";
import PropertyAddInfoSaver from "../../../pages/PropertyAddition/propertyAddInfoSaver";

const addClickMarker = (map) => {
    let currentMarker = null;
    map.current.on('click', async (event) => {
        const lngLat = event.lngLat;
        if(currentMarker) currentMarker.remove();
        currentMarker = new maplibregl.Marker()
                .setLngLat(lngLat)
                .addTo(map.current);

        map.current.flyTo({
                    center: [lngLat.lng, lngLat.lat],
                    speed: 0.3,
                    curve: 1,
                })
        var inputInfo = PropertyAddInfoSaver().GeneralInformation;
        inputInfo.MapCordinates.latCord = lngLat.lat 
        inputInfo.MapCordinates.lngCord = lngLat.lng
        await api.saveMarkerData({lat: lngLat.lat, lng: lngLat.lng});
        
    });
} 

export default addClickMarker;