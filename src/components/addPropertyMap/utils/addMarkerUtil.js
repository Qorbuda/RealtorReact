import api from "../../mapComponents/services/api";
import maplibregl from "maplibre-gl";
import PropertyAddInfoSaver from "../../../pages/PropertyAddition/propertyAddInfoSaver";

const addClickMarker = (map, mapContainer) => {
    let currentMarker = null;
    const width = mapContainer.current.offsetWidth;
    const height = mapContainer.current.offsetHeight;

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
    map.current.on('move', () => {
        const topLeft = map.current.unproject([0, 0]).toArray();
        const bottomRight = map.current.unproject([width, height]).toArray();

        if(currentMarker) {
            const bounds = new maplibregl.LngLatBounds(bottomRight, topLeft);
            const markerPosition = currentMarker.getLngLat();

            if(bounds.contains(markerPosition)) {
                currentMarker.getElement().style.display = '';
            } else {
                currentMarker.getElement().style.display = 'none';
            }
        }
    })
} 

export default addClickMarker;