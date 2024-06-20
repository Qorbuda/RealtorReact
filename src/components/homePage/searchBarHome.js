
import React, { useCallback, useEffect, useState, useRef, } from "react";

import './searchBarStyle.css';
import './searchFieldStyle.css';
import BaseInput from "../general/forms/BaseInput";
import BaseInputInt from "../general/forms/BaseInputInt";
import BaseSelect from "../general/forms/BaseSelect";
import BaseInputWithSlider from "../general/forms/BaseInputWithSlider";
import { InputController, InputWithSliderController, SelectController } from "../general/forms/controllers";
import LanguageSwitcher from "../secondary/localization/LanguageSwitcher";
import SearchFullInfo from "./searchFullInfo";
import SendMessage from '../../contactMessage/sendMessage';
import sendMessageLoginUsers from "../../contactMessage/sendMessageLoginUsers";
import getActivLanguageStatus from '../secondary/localization/getActivLanguageStatus'

import axios from 'axios';



function SearchBarHome({ fromHome, setItems, clickCount, mapSearch }) {
    var lang = getActivLanguageStatus();
    var langId = lang == "en" ? 3 : lang == "ka" ? 1 : 2;
    var textFolder = LanguageSwitcher().HomePage.searchField;
    var searchInputInfro = SearchFullInfo()

    const [dealTypeSelect, setDealTypeSelect] = useState(0);
    const [citySelect, setcitySelect] = useState(0);
    const [categoryApartmentsSelect, setCategoryApartmentsSelect] = useState(0);
    const [repairsSelect, setRepairsSelect] = useState(0);
    const [streetSelect, setStreetSelect] = useState(0)
    const [sortingSelect, setSortingSelect] = useState(0)

    const [cities, setCities] = useState([]);
    const [street, setstreet] = useState([]);

    useEffect(() => {
        axios.get(`https://api.myflats.ge/api/Appartments/get-cities?langId=${langId}`)
            .then(response => {
                const citiesData = response.data;
                setCities(citiesData);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        // Fetch agent data when the selected office changes
        axios.get(`https://api.myflats.ge/api/Appartments/get-streets?langId=${langId}&cityId=${citySelect}`)
            .then(response => {
                const streetData = response.data;
                setstreet(streetData);
            })
            .catch(error => {
                console.log(error);
            });
    }, [citySelect]);
    const [categories, setCategories] = useState([]);
    const [dealTypes, setDealTypes] = useState([]);
    const [repairs, setRepairs] = useState([]);
    const [sorting, setSorting] = useState([{index: 1, name: langId == 1 ? "თარიღით კლება" : langId == 2 ? "По убыванию по дате" : "Descending by date"},
                                            {index: 2, name: langId == 1 ? "თარიღით ზრდა" : langId == 2 ? "Увеличение по дате" : "Increase by date"},
                                            {index: 3, name: langId == 1 ? "ფასით კლება" : langId == 2 ? "снижается в цене" : "Decreasing in price"},
                                            {index: 4, name: langId == 1 ? "ფასით ზრდა" : langId == 2 ? "увеличение цены" : "Increase in price"}])
    useEffect(() => {
        axios.get(`https://api.myflats.ge/api/Appartments/get-categories?langId=${langId}`)
            .then(response => {
                const data = response.data;
                setCategories(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios.get(`https://api.myflats.ge/api/Appartments/get-deal-types?langId=${langId}`)
            .then(response => {
                const data = response.data;
                setDealTypes(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios.get(`https://api.myflats.ge/api/Appartments/get-repairs?langId=${langId}`)
            .then(response => {
                const data = response.data;
                setRepairs(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    var dealTypeController = new SelectController(dealTypeSelect, setDealTypeSelect, dealTypes)
    var categoryApartmentsController = new SelectController(categoryApartmentsSelect, setCategoryApartmentsSelect, categories)
    var repairsController = new SelectController(repairsSelect, setRepairsSelect, repairs)
    var cityController = new SelectController(citySelect, setcitySelect, cities)
    var streetController = new SelectController(streetSelect, setStreetSelect, street)
    var sortingController = new SelectController(sortingSelect, setSortingSelect, sorting)


    const [priceFromRange, setPriceFromRange] = useState([0, 1000000])
    const [floorRange, setfloorRangeRange] = useState([0, 100])
    const [spaceRamge, setSpaceRamge] = useState([0, 1000])

    var priceFromRangeController = new InputWithSliderController(priceFromRange, setPriceFromRange)
    var floorRangeController = new InputWithSliderController(floorRange, setfloorRangeRange)
    var spaceRamgeController = new InputWithSliderController(spaceRamge, setSpaceRamge)


    const [propertyId, setPropertyId] = useState('');
    const [inputBeadroom, Beadroom] = useState('');
    const [inputBathroom, bathroom] = useState('');
    const [inputRoom, room] = useState('');
    const [inputId, id] = useState('');
    const [inputPhoneNumber, phoneNumber] = useState('');
    const [agentSelect, setagentSelect] = useState(0);
    const [agents, setAgents] = useState([]);
    
    // var inputPropertyIdController = new InputController(propertyId, setPropertyId);
    var inputRoomController = new InputController(inputRoom, room);
    var inputBeadroomController = new InputController(inputBeadroom, Beadroom);
    var inputbathroomController = new InputController(inputBathroom, bathroom);
    
    var inputIdController = new InputController(inputId, id);
    var inputPhoneNumberController = new InputController(inputPhoneNumber, phoneNumber);
    useEffect(() => {
        // Fetch agent data when the selected office changes
        axios.get(`https://api.myflats.ge/api/Agents/get-office-aggents?officeId=${0}`)
          .then(response => {
            const agentData = response.data;
            setAgents(agentData);
          })
          .catch(error => {
            console.error(error);
          });
    }, []);
    var agentController = new SelectController(agentSelect, setagentSelect, agents)
    searchInputInfro.agentId = agentController.state

    const agentObject = agentController.options.find(x => x.index == searchInputInfro.agentId);
    
    searchInputInfro.dealType.index = dealTypeController.state
    searchInputInfro.categoryApartments.index = categoryApartmentsController.state
    searchInputInfro.repairs.index = repairsController.state
    searchInputInfro.sorting.index = sortingController.state

    searchInputInfro.city.index = cityController.state
    searchInputInfro.street.index = streetController.state

    searchInputInfro.room = inputRoomController.state
    searchInputInfro.beadroom = inputBeadroomController.state
    searchInputInfro.bathroom = inputbathroomController.state

    searchInputInfro.idNum = inputIdController.state
    searchInputInfro.phoneNum = inputPhoneNumberController.state

    searchInputInfro.price.min = getMinAndMaxValue(priceFromRangeController.state[0], useState(priceFromRangeController.state[1]))
    searchInputInfro.price.max = getMinAndMaxValue(priceFromRangeController.state[1], useState(priceFromRangeController.state[1]))

    searchInputInfro.floor.min = getMinAndMaxValue(floorRangeController.state[0], useState(floorRangeController.state[1]))
    searchInputInfro.floor.max = getMinAndMaxValue(floorRangeController.state[1], useState(floorRangeController.state[1]))

    searchInputInfro.space.min = getMinAndMaxValue(spaceRamgeController.state[0], useState(spaceRamgeController.state[1]))
    searchInputInfro.space.max = getMinAndMaxValue(spaceRamgeController.state[1], useState(spaceRamgeController.state[1]))



    return (

        <div className='search-bar-container'>
            <div className="search-bar-input-full-div">
                <div className='search-bar-row'>
                    <BaseSelect placeholder={textFolder.dealType} controller={dealTypeController} />
                    <BaseSelect placeholder={textFolder.apartmentCategory} controller={categoryApartmentsController} />
                    <BaseSelect placeholder={textFolder.repairs} controller={repairsController} />
                </div>

                <div className='search-bar-row'>
                    <BaseSelect placeholder={textFolder.city} controller={cityController} />
                    <BaseSelect placeholder={textFolder.street} controller={streetController} />
                </div>

                <div className='search-bar-row'>
                    <BaseInputInt placeholder={textFolder.room} controller={inputRoomController} />
                    <BaseInputInt placeholder={textFolder.Beadroom} controller={inputBeadroomController} />
                    <BaseInputInt placeholder={textFolder.bathroom} controller={inputbathroomController} />
                </div>

                <div className='search-bar-row'>
                    <BaseInputInt placeholder={textFolder.idSerch} controller={inputIdController} />
                    <BaseSelect nameOfSelect={textFolder.Agent} controller={agentController} placeholder={textFolder.Agent} />
                    <BaseSelect nameOfSelect={textFolder.Sorting} controller={sortingController} placeholder={textFolder.Sorting} />

                    {/* <BaseInputInt placeholder={textFolder.phoneNumber} controller={inputPhoneNumberController} /> */}
                </div>

                <div className='search-system-slider'>
                    <div className="slider-box">
                        <BaseInputWithSlider name={textFolder.priceFrom} controller={priceFromRangeController} delimiter={"to"} />
                    </div>
                    <div className="slider-box">
                        <BaseInputWithSlider name={textFolder.Floor} controller={floorRangeController} delimiter={"to"} />
                    </div>
                    <div className="slider-box">
                        <BaseInputWithSlider name={textFolder.Space} controller={spaceRamgeController} delimiter={"to"} />
                    </div>
                </div>

            </div>


            <button className='search-system-search-btn' onClick={searchItems}>
                <p className="search-system-search-btn-title">{textFolder.search}</p>

            </button>
        </div>

    );
    async function searchItems() {

        var props = fromHome ? await SendMessage(mapSearch ? 0 : 1, searchInputInfro) : await sendMessageLoginUsers(mapSearch ? 0 : 1, searchInputInfro);
        setItems([])

        setItems(props)
        clickCount(1)
    }
}

function getMinAndMaxValue(statusValue, aqtivMaxSizeValue) {
    if (statusValue > 100) {
        statusValue = 100
    }


    return (aqtivMaxSizeValue[0] / 100 * statusValue);
}

export default SearchBarHome;