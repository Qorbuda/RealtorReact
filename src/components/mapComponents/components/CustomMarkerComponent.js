import "../styles/map-styles.css"
import HomeIcon from "../../icons/homeIcon.svg"

const CustomMarker = ({name}) => {

    return (
        <div>
            <div className="marker">
                <img src={HomeIcon} />
                <b>{name}</b>
            </div>
        </div>
            
    );
};

export default CustomMarker;