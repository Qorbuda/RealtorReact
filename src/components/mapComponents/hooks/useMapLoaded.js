import { useState, useEffect } from 'react';

const useMapLoaded = (map) => {
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    useEffect(() => {
        if (!map.current) return;

        if (map.current.loaded()) {
            setIsMapLoaded(true);
        } else {
            const onLoad = () => setIsMapLoaded(true);
            map.current.on('load', onLoad);
            return () => {
                map.current.off('load', onLoad);
            };
        }
    }, [map]);

    return isMapLoaded;
};

export default useMapLoaded;