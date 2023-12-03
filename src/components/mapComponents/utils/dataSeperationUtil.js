const mapdataSeperator = (mapData) => {
    let markerData  = [];
    let polygonCors = [];
    mapData.forEach((data) => {
        const coordinate = {
            lat: data.lat, 
            lng: data.lng,
            name: data.name,
            description: data.description,
            pricePerMeterSquare: data.pricePerMeterSquare,
            price: data.price,
        }
        markerData.push(coordinate);
        polygonCors.push(data.polygonCors);

    })

    return {markerData, polygonCors};
}

export default mapdataSeperator;