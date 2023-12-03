import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './styles/map-styles.css';
import MAP_DATA from './constants/MAP_DATA';
import SearchBar from './components/SearchBar';
import mapdataSeperator from './utils/dataSeperationUtil';
import api from './services/api';
import createMarkers from './utils/markersUtil';
import createPolygons from './utils/polygonsUtil';
import useMapLoaded from './hooks/useMapLoaded';
import addDoubleClickMarker from '../addPropertyMap/utils/addMarkerUtil';
import useUpdateMapLocation from './hooks/useUpdateMapLocation';

const MapComponent = ({selectedCity}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
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

        map.current.addControl(new maplibregl.NavigationControl(), 'top-left');
        SearchBar(map.current);
        
    }, [API_KEY, lng, lat, zoom]);

    const isMapLoaded = useMapLoaded(map);

    useEffect(() => {
        if (!isMapLoaded) return;

        async function fetchData() {
            const data = await api.getUserData();
            const { markerData, polygonCors } = mapdataSeperator(data);
            createMarkers(markerData, map);
            createPolygons(map, polygonCors);
        }
        fetchData();
    }, [isMapLoaded]);


    useUpdateMapLocation(map, selectedCity);

    return (
        <div className="map-wrap">
          <div ref={mapContainer} className="map" />
        </div>
    );
}

export default MapComponent;