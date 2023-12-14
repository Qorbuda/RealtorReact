import api from "../services/api";
import maplibregl from "maplibre-gl";

const addDoubleClickMarker = (map) => {
    let currentMarker = null;
    map.current.on('dblclick', async (event) => {
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
        await api.saveMarkerData({lat: lngLat.lat, lng: lngLat.lng});
        
    });
} 

export default addDoubleClickMarker;