import React, { useState, useEffect } from 'react';
import './pageStyle/openHomePage.css';
import './aboutUsPage/aboutUsPageStyle.css';
import SearchBarHome from '../components/homePage/searchBarHome.js';
import AddPropertyMapComponent from '../components/addPropertyMap/AddPropertyMapComponent.js';
import PropertyCard from '../components/homePage/propertyCard';
import SendMessage from '../contactMessage/sendMessage';
import SearchFullInfo from "../components/homePage/searchFullInfo";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripHorizontal, faX } from  "@fortawesome/free-solid-svg-icons"

function AboutUsPage() {
    const [properties, setProperties] = useState([]);
    const [clickCount, setClickCount] = useState(1);
    const [showSearchContainer, setShowSearchContainer] = useState(false);

    const handleToggle = () => {
        setShowSearchContainer(!showSearchContainer);
    }


    useEffect(() => {
        async function fetchData() {
            const filter = SearchFullInfo();
            const properties = await SendMessage(clickCount, filter);
            setProperties(properties);
        }
        fetchData();  
    }, [])

    return (
        <div className='post-property-page'>
            <div className='about-us-page-main'>
                <FontAwesomeIcon icon={faGripHorizontal} className='toggle-style' size='3x' onClick={handleToggle}/>
                {showSearchContainer && <FontAwesomeIcon icon={faX} className='toggle-x' onClick={handleToggle} size='1x'/> }
                {showSearchContainer && <div className='main-search-container modal-style'>
                    
                    <SearchBarHome fromHome={true} setItems={setProperties} clickCount={setClickCount}/>
                    <div className='properties_container'>
                        {properties.length > 0 && <PropertyCard apartmentInfo={properties[0]}/>}
                        {properties.length > 1 && <PropertyCard apartmentInfo={properties[1]}/>} 
                    </div>
                </div>}
                <div className='main-map-container'>
                    <AddPropertyMapComponent properties={properties}/>
                </div>
            </div> 
        </div>
    );
}

export default AboutUsPage;