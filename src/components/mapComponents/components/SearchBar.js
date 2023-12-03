import {  GeocodingControl } from "@maptiler/geocoding-control/maplibregl";
import MAP_DATA from '../constants/MAP_DATA';
import "@maptiler/geocoding-control/style.css";

const SearchBar = ( map ) => {
    const gc = new GeocodingControl({
      apiKey: MAP_DATA.key,
      maplibregl: map,
      country: "GE",
    });

    map.addControl(gc);

    return null
};

export default SearchBar;
