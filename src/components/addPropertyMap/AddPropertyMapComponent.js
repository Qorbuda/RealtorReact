import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import "../mapComponents/styles/map-styles.css";
import MAP_DATA from '../mapComponents/constants/MAP_DATA';
import addClickMarker from './utils/addMarkerUtil';

const AddPropertyMapComponent = () => {
    const map = useRef(null);
    const mapContainer = useRef(null);
    const [lng] = useState(MAP_DATA.STARTING_POS.lng);
    const [lat] = useState(MAP_DATA.STARTING_POS.lat);
    const [zoom] = useState(MAP_DATA.STARTING_ZOOM);
    const [API_KEY] = useState(MAP_DATA.key);

    useEffect(() => {
        if (map.current) return;
        map.current = new maplibregl.Map({
          container: mapContainer.current,
          style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
          center: [lng, lat],
          zoom: zoom
        });

        map.current.setMaxBounds(MAP_DATA.MAX_BOUNDS);
        map.current.setMinZoom(MAP_DATA.MIN_ZOOM);
        map.current.setMaxZoom(MAP_DATA.MAX_ZOOm);
        map.current.doubleClickZoom.disable();
        addClickMarker(map, mapContainer);

    }, [])

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}

export default AddPropertyMapComponent;