export const createMarkerData = (properties) => {
    let result = [];
    if (properties){
        properties.forEach((property) => {
            const markerData = {
                lat: property.latitude, 
                lng: property.longtitude,
                name: property.email,
                description: property.estateCategory,
                pricePerMeterSquare: Math.floor(property.price.usd / property.areaSizeFull),
                price: property.price.usd,
            }
            result.push(markerData)
            
        });
    }
    return result;
}