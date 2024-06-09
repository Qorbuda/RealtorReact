import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import "../../mapComponents/styles/map-styles.css";
import MAP_DATA from '../../mapComponents/constants/MAP_DATA';

const OpenHomePageMapComponent = ({ coordinates }) => {
    const map = useRef(null);
    const mapContainer = useRef(null);
    const [zoom] = useState(MAP_DATA.STARTING_ZOOM);
    const [API_KEY] = useState(MAP_DATA.key);

    useEffect(() => {
        if (map.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
            center: [coordinates ? coordinates.lngCord : 0, coordinates ? coordinates.latCord : 0],
            zoom: zoom
        });

        const width = mapContainer.current.offsetWidth;
        const height = mapContainer.current.offsetHeight;

        map.current.setMaxBounds(MAP_DATA.MAX_BOUNDS);
        map.current.setMinZoom(MAP_DATA.MIN_ZOOM);
        map.current.setMaxZoom(MAP_DATA.MAX_ZOOm);
        map.current.doubleClickZoom.disable();



        const newMarker = new maplibregl.Marker().setLngLat(coordinates ? [coordinates.lngCord, coordinates.latCord] : [0, 0]).addTo(map.current);

        map.current.on('move', () => {
            const topLeft = map.current.unproject([0, 0]).toArray();
            const bottomRight = map.current.unproject([width, height]).toArray();

            if (newMarker) {
                const bounds = new maplibregl.LngLatBounds(bottomRight, topLeft);
                const markerPosition = newMarker.getLngLat();

                if (bounds.contains(markerPosition)) {
                    newMarker.getElement().style.display = '';
                } else {
                    newMarker.getElement().style.display = 'none';
                }
            }
        })

    }, [])

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />s
        </div>
    );
}

export default OpenHomePageMapComponent;