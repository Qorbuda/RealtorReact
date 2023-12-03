const createPolygons = (map, polygonCors) => {
    
    polygonCors.forEach((polygonCoordinate, index) => {
        const sourceId = `polygon-source-${index}`;
        const layerId = `polygon-layer-${index}`;

        map.current.addSource(sourceId, {
            type: 'geojson',
            data: {
                type: 'Feature',
                geometry: {
                    type: 'Polygon',
                    coordinates: [polygonCoordinate],
                },
            },
        });

        map.current.addLayer({
            id: layerId,
            type: 'fill',
            source: sourceId,
            layout: {},
            paint: {
                'fill-color': '#3374FF', // Polygon fill color
                'fill-opacity': 0.3, // Polygon fill opacity
                
            },
        });
    });
};

export default createPolygons;