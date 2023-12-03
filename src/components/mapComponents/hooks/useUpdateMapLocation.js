import { useEffect } from "react";
import getCenter from "../utils/getCenterUtil";

const useUpdateMapLocation = (map, selectedCity) => {
    useEffect(() => {
        if(!map.current || !selectedCity) return;
        const newCenter = getCenter(selectedCity);
        if(newCenter) {
            map.current.flyTo({
                center: newCenter
            })
        }
    }, [selectedCity]);
};   

export default useUpdateMapLocation;