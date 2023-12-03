import maplibregl from 'maplibre-gl';
import ReactDOM from 'react-dom/server';
import CustomMarker from '../components/CustomMarkerComponent';
import CustomPopup from '../components/CustomPopupComponent';
import 'maplibre-gl/dist/maplibre-gl.css';

const createMarkers = (markersData, map) => {
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


        const marker = new maplibregl.Marker(markerElement).setLngLat([data.lng, data.lat]).setPopup(popup).addTo(map.current);
        
        const polygonLayerId = `polygon-layer-${index}`;

        // Change the polygon color when the popup is opened
        popup.on('open', () => {
            map.current.setPaintProperty(polygonLayerId, 'fill-color', '#03001e');
        });

        // Reset the polygon color when the popup is closed
        popup.on('close', () => {
            map.current.setPaintProperty(polygonLayerId, 'fill-color', '#3374FF');
        });

    });
}

export default createMarkers;