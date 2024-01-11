import { useState, useEffect } from "react";
import './imagesStyle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft, faTimes  } from "@fortawesome/free-solid-svg-icons"
import '@fortawesome/fontawesome-free/css/all.css';



const OpenHomePageImagesComponent = ({mainImageInfo, imagesInfo}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [imagesArray, setImagesArray] = useState([]);
    const [mainImage, setMainImage] = useState('');
    const [smallImages, setSmallImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
                setImagesArray(imagesInfo);
                setMainImage(imagesInfo[0])
                let maxSmallAmount = imagesInfo.length < 5 ? imagesInfo.length : 5;
                let smallArray = [];
                for(let i = 1; i < maxSmallAmount; i++) {
                    smallArray.push(imagesInfo[i]);
                }
                setSmallImages(smallArray);
    }, [imagesInfo]);

    const toggleModal = (slideNumber = -1) => {
        console.log(slideNumber);
        if(slideNumber !== -1) { 
            setCurrentSlide(slideNumber)
        }
        setModalOpen(!modalOpen);
        document.body.style.overflow = modalOpen ? "auto" : "hidden";
    }

    return (
        <div>
            {modalOpen && <div className="image-modal-container">
                <div> 
                    <img className="modal-image" src={`https://api.myflats.ge/api/image/${imagesArray[currentSlide]}`} />
                    <button className="close-button" onClick={toggleModal}>
                        CLOSE <FontAwesomeIcon icon={faTimes} className="custom-icon" />
                    </button>
                    {currentSlide !== 0 && <div>
                        <div className="left-button-box" onClick={() => setCurrentSlide(currentSlide - 1)}/>
                        <button className="left-button" onClick={() => setCurrentSlide(currentSlide - 1)}>
                            <FontAwesomeIcon icon={faCaretLeft} size="2x" />
                        </button>
                    </div>}
                    {currentSlide !== (imagesArray.length -1) && <div>
                        <div className="right-button-box" onClick={() => setCurrentSlide(currentSlide + 1)}/>
                        <button className="right-button" onClick={() => setCurrentSlide(currentSlide + 1)}>
                            <FontAwesomeIcon icon={faCaretRight} size="2x"/>
                        </button>
                    </div>}
                </div>
            </div>}
            <div className="image-container">
                <img className="main-picture" src={`https://api.myflats.ge/api/image/${mainImage}`} onClick={() => toggleModal(0)} />
                <div className="small-picture-container">
                    {smallImages.map((image, index) => (
                        <img className="small-picture" src={`https://api.myflats.ge/api/image/${image}`} key={index} onClick={() => toggleModal(index+1)}/>
                    ))}
                </div>
                {/* <button onClick={toggleModal()}>
                    Show All
                    <img src={process.env.PUBLIC_URL + '/showAllButton.svg'}/>
                </button> */}
            </div>
        </div>
    )
}

export default OpenHomePageImagesComponent;