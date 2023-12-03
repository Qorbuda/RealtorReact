import "../styles/map-styles.css";

const CustomPopup = ({data}) => {
    return (
        <div>
            <div>
                <h2>{data.name}</h2>
                <div>
                    <h3>აღწერა: </h3>
                    <p>{data.description}</p>
                </div>
                <div>
                    <h3>ფასი მ^2: {data.pricePerMeterSquare}</h3>
                </div>
                <div>
                    <h3>ფასი: {data.price}</h3>
                </div>
            </div>
        </div>
    )
}

export default CustomPopup;