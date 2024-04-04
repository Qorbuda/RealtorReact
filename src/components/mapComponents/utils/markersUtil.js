import maplibregl from 'maplibre-gl';
import ReactDOM from 'react-dom/server';
import CustomMarker from '../components/CustomMarkerComponent';
import CustomPopup from '../components/CustomPopupComponent';
import 'maplibre-gl/dist/maplibre-gl.css';

const createMarkers = (markersData, map, width, height) => {


    console.log("markers", markersData)
    let count = 0;
    let markerArray = [];
    let popupArray = [];
    markersData.forEach((data, index) => {
        
        const markerElement = document.createElement('div');
        const markerElementString = ReactDOM.renderToStaticMarkup(
            <CustomMarker name={data.name}/>
        );
        const popupHTMLString = ReactDOM.renderToStaticMarkup(
            <CustomPopup data={data}/>
        )

        markerElement.innerHTML = markerElementString;
        const popup = new maplibregl.Popup({ offset: 25}).setHTML(popupHTMLString);

        console.log(data.lng);
        const marker = new maplibregl.Marker(markerElement).setLngLat([data.lng, data.lat]).setPopup(popup).addTo(map.current);
        markerArray.push(marker);
        popupArray.push(popup);
        
        const polygonLayerId = `polygon-layer-${index}`;

        // Change the polygon color when the popup is opened
        popup.on('open', () => {
            map.current.setPaintProperty(polygonLayerId, 'fill-color', '#03001e');
        });

        // Reset the polygon color when the popup is closed
        popup.on('close', () => {
            map.current.setPaintProperty(polygonLayerId, 'fill-color', '#3374FF');
        });
        count++;

    });
    
    map.current.on('move', () => {
        const topLeft = map.current.unproject([0, 0]).toArray();
        const bottomRight = map.current.unproject([width, height]).toArray();
        const bounds = new maplibregl.LngLatBounds(bottomRight, topLeft);

        for(let i = 0; i < markerArray.length; i++) {
            const marker = markerArray[i];
            if(marker) { 
                const markerPosition = marker.getLngLat();
    
                if(bounds.contains(markerPosition)) {
                    marker.getElement().style.display = '';
                    popupArray[i].remove();
                } else {
                    marker.getElement().style.display = 'none';
                }
            }
        }
    });
    console.log("count ", count)
}

export default createMarkers;