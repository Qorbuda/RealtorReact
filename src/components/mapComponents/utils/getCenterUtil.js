import MAP_DATA from "../constants/MAP_DATA";

const getCenter = (selectedCity) => {
    return MAP_DATA.LOCATIONS[selectedCity].BASE;
}

export default getCenter;