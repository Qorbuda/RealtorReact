import React, { useState, useEffect } from 'react';
import './pageStyle/openHomePage.css';
import './aboutUsPage/aboutUsPageStyle.css';
import SearchBarHome from '../components/homePage/searchBarHome.js';
import AddPropertyMapComponent from '../components/addPropertyMap/AddPropertyMapComponent.js';
import PropertyCard from '../components/homePage/propertyCard';
import SendMessage from '../contactMessage/sendMessage';
import SearchFullInfo from "../components/homePage/searchFullInfo";

function AboutUsPage() {
    const [properties, setProperties] = useState([]);
    const [clickCount, setClickCount] = useState(1);


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
                <div className='main-search-container'>
                    <SearchBarHome fromHome={true} setItems={setProperties} clickCount={setClickCount}/>
                    <div className='properties_container'>
                        {properties.length > 0 && <PropertyCard apartmentInfo={properties[0]}/>}
                        {properties.length > 1 && <PropertyCard apartmentInfo={properties[1]}/>} 
                    </div>
                </div>
                <div className='main-map-container' >
                    <AddPropertyMapComponent />
                </div>
            </div> 
        </div>
    );
}

export default AboutUsPage;