import { useState, useEffect, useRef } from "react";
import './imagesStyle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft, faTimes  } from "@fortawesome/free-solid-svg-icons"
import '@fortawesome/fontawesome-free/css/all.css';
import Draggable from "react-draggable";



const OpenHomePageImagesComponent = ({mainImageInfo, imagesInfo}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [imagesArray, setImagesArray] = useState([]);
    const [mainImage, setMainImage] = useState('');
    const [smallImages, setSmallImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragDisabled, setIsDragDisabled] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    

    const handleKeyDown = (event) => {
        if(modalOpen) {
            if (event.key === "ArrowLeft" && currentSlide !== 0) {
                setCurrentSlide(currentSlide - 1);
            } else if(event.key === "ArrowRight" && currentSlide !== imagesArray.length - 1) {
                setCurrentSlide(currentSlide + 1);
            }
        }
    };

    const isTouchDevice = () => {
        return window.matchMedia('(pointer: coarse)').matches;
    };
    
    const handleDragStop = (event, data) => {
        const x  = data.lastX;
        const threshold = 100;
      
        if (x > threshold && currentSlide !== 0) {
          setCurrentSlide(currentSlide - 1);
        } else if(x < -threshold && currentSlide !== imagesArray.length - 1) {
          setCurrentSlide(currentSlide + 1);
        }
      };

    useEffect(() => {

        setImagesArray(imagesInfo);
        setMainImage(imagesInfo[0])
        let maxSmallAmount = imagesInfo.length < 5 ? imagesInfo.length : 5;
        let smallArray = [];
        for(let i = 1; i < maxSmallAmount; i++) {
            smallArray.push(imagesInfo[i]);
        }
        setSmallImages(smallArray);

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
        
    }, [imagesInfo, modalOpen, currentSlide]);

    const toggleModal = (slideNumber = -1) => {
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
                    <Draggable
                        axis="x"
                        bounds={{ left: -window.innerWidth, right: window.innerWidth }}
                        position={{ x: 0, y: 0 }}
                        onStop={handleDragStop}
                        disabled={!isTouchDevice()}                       
                    > 
                        <img className="modal-image" src={`https://api.myflats.ge/api/image/${imagesArray[currentSlide]}`}/>
                    </Draggable>
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