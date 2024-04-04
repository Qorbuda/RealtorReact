import "../styles/map-styles.css";

const CustomPopup = ({data}) => {
    return (
        <div>
            <div>
                <h2 className="popup-header">{data.name}</h2>
                <div style={{display: 'flex', gap: '10px'}}>
                    <h3>აღწერა: </h3>
                    <h3>{data.description}</h3>
                </div>
                <div>
                    <h3>ფასი მ^2: {data.pricePerMeterSquare} $</h3>
                </div>
                <div>
                    <h3>ფასი: {data.price} $</h3>
                </div>
            </div>
        </div>
    )
}

export default CustomPopup;