import React, { useEffect, useState } from 'react';

import BootstrapCarousel  from 'react-bootstrap/Carousel';
import axios from 'axios';

import "./Carousel.css"

function Carousel(imagePath) {
    const [imageUrls, setImageUrls] = useState([]);
    
    useEffect(() => {
        axios.get(`https://167.86.75.34/api/Image/get-image-list?folderPath=${imagePath.imagePath}`)
            .then(response => {
                const data = response.data;
                setImageUrls(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [imagePath]);

    return (
        <div>
            { !imageUrls || imageUrls.length === 0 ? (
                <BootstrapCarousel interval={null} indicators={false} style={{width: "384px"}}>

                    <BootstrapCarousel.Item>
                        <img src="http://dummyimage.com/384x273" className="d-block w-100" style={{borderRadius: "30px 30px 0px 0px"}} alt="..." />
                    </BootstrapCarousel.Item>

                    <BootstrapCarousel.Item>
                        <img src="http://dummyimage.com/384x273" className="d-block w-100" style={{borderRadius: "30px 30px 0px 0px"}} alt="..." />
                    </BootstrapCarousel.Item>

                    <BootstrapCarousel.Item>
                        <img src="http://dummyimage.com/384x273" className=" w-100" style={{borderRadius: "30px 30px 0px 0px"}} alt="..." />
                    </BootstrapCarousel.Item>

                </BootstrapCarousel>
            ) 
            : 
            (
                <BootstrapCarousel interval={null} indicators={false}>
                    {imageUrls.map((item, index) => (
                        <BootstrapCarousel.Item>
                            <img src={`https://167.86.75.34/api/image/${item}`} className="d-block w-100" alt={`Image ${index + 1}`} style={{borderRadius: "30px 30px 0px 0px", maxHeight:"286px", minHeight:"286px", minWidth:"384px"}} />
                        </BootstrapCarousel.Item>
                    ))}
                </BootstrapCarousel>
            )}
        </div>
    );
}

export default Carousel;