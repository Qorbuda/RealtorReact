import { useState, useEffect } from "react";
import './imagesStyle.css';
import { getImages } from "./mockApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft, faTimes  } from "@fortawesome/free-solid-svg-icons"
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';



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

    const toggleModal = () => {
        setModalOpen(!modalOpen);
        document.body.style.overflow = modalOpen ? "auto" : "hidden";
    }

    return (
        <div>
            {modalOpen && <div className="image-modal-container">
                <div> 
                    <img className="modal-image" src={`http://167.86.75.34/api/image/${imagesArray[currentSlide]}`} />
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
                <img className="main-picture" src={`http://167.86.75.34/api/image/${mainImage}`} />
                <div className="small-picture-container">
                    {smallImages.map((image, index) => (
                        <img className="small-picture" src={`http://167.86.75.34/api/image/${image}`} key={index} />
                    ))}
                </div>
                <button onClick={toggleModal}>
                    Show All
                    <img src="showAllButton.svg"/>
                </button>
            </div>
        </div>
    )
}

export default OpenHomePageImagesComponent;