
import React, { useCallback, useEffect, useState, useRef, } from "react";

import { Col, Input, InputGroup, InputNumber } from 'rsuite';
import PropTypes from "prop-types";
import './searchFieldStyle.css';
import './slider.less';

import LanguageSwitcher from "../secondary/localization/LanguageSwitcher";




const MultiRangeSlider = ({ min, max, onChange, textleft, iconstatus }) => {

    var textFolder = LanguageSwitcher().HomePage.searchField;


    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);
    const [value, setValue] = React.useState([minVal, maxVal]);
    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (

        <div className="search-home-page-conteiner">
            <div className='board-baner-texts-and-info'>
                <div className='balasne-text'>
                    <svg width="20" height="20" viewBox="0 0 18 19" fill="none">
                        <rect y="0.877441" width="18" height="18" rx="9" fill="#03001e" />
                        <path d="M8.52423 14.0107C8.03965 14.0019 7.56828 13.9622 7.11013 13.8918C6.65198 13.8125 6.28194 13.7067 6 13.5746V12.4512C6.29956 12.5922 6.68282 12.7155 7.14978 12.8213C7.61674 12.927 8.07489 12.9843 8.52423 12.9931V10.3235C8.09251 10.2001 7.71366 10.068 7.38767 9.927C7.07048 9.77722 6.81057 9.60982 6.60793 9.4248C6.40529 9.23978 6.2511 9.02832 6.14537 8.79044C6.04846 8.54374 6 8.2618 6 7.94462C6 7.5129 6.10132 7.14286 6.30396 6.83449C6.51542 6.52612 6.81057 6.28383 7.18943 6.10762C7.56828 5.9226 8.01322 5.81687 8.52423 5.79044V4.62744H9.37004V5.77722C9.837 5.78603 10.2599 5.8389 10.6388 5.93581C11.0264 6.02392 11.3789 6.13405 11.696 6.26621L11.3392 7.24418C11.0573 7.12964 10.7445 7.03273 10.4009 6.95343C10.0661 6.86533 9.72247 6.80806 9.37004 6.78163V9.43801C9.95154 9.60541 10.4361 9.78603 10.8238 9.97986C11.2115 10.1649 11.5022 10.3984 11.696 10.6803C11.8987 10.9534 12 11.3103 12 11.7508C12 12.3675 11.7709 12.8697 11.3128 13.2574C10.8546 13.6363 10.207 13.8697 9.37004 13.9578V15.4248H8.52423V14.0107ZM9.37004 12.927C9.88987 12.8741 10.2687 12.7552 10.5066 12.5702C10.7445 12.3763 10.8634 12.1296 10.8634 11.8301C10.8634 11.6098 10.8194 11.4292 10.7313 11.2882C10.6432 11.1385 10.489 11.0107 10.2687 10.905C10.0573 10.7992 9.75771 10.6979 9.37004 10.601V12.927ZM8.52423 6.80806C8.20705 6.82568 7.94714 6.88295 7.74449 6.97986C7.54185 7.06797 7.38767 7.18691 7.28194 7.33669C7.18502 7.48647 7.13656 7.65828 7.13656 7.85211C7.13656 8.08119 7.17621 8.27942 7.25551 8.44682C7.34361 8.60542 7.48899 8.74198 7.69163 8.85652C7.89427 8.96224 8.17181 9.05916 8.52423 9.14727V6.80806Z" fill="white" />
                    </svg>
                    <h3 className='h3-class-text'>{textFolder.priceFrom}</h3>
                </div>
                <div className="slider-infot-text-div-min">
                    <Input type="number"
                        className="slider-test-barel"
                        min={min}
                        max={max}
                        value={minVal}
                        onChange={(event) => {
                            const value = Math.min(Number(event.target.value), maxVal - 1);
                            setMinVal(value);
                            minValRef.current = value;
                        }}>

                    </Input>

                </div>
                <div className="slider-infot-text-div">
                    <InputGroup.Addon>to</InputGroup.Addon>
                </div>
                <div className="slider-infot-text-div-max">
                    <Input type="number"
                        className="slider-test-barel"
                        min={min}
                        max={max}
                        value={maxVal}
                        onChange={(event) => {
                            const value = Math.max(Number(event.target.value), minVal + 1);
                            setMaxVal(value);
                            maxValRef.current = value;
                        }}
                    />
                </div>

            </div>

            <div className='slider-barel'>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(event) => {
                        const value = Math.min(Number(event.target.value), maxVal - 1);
                        setMinVal(value);
                        minValRef.current = value;
                    }}
                    className="thumb thumb--left"
                    style={{ zIndex: minVal > max - 100 && "5" }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(event) => {
                        const value = Math.max(Number(event.target.value), minVal + 1);
                        setMaxVal(value);
                        maxValRef.current = value;
                    }}
                    className="thumb thumb--right"
                />

                <div className="slider">
                    <div className="slider__track" />
                    <div ref={range} className="slider__range" />
                </div>
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};





function FastFilters() {

    return (


        <div className='search-sistem-home-page d-flex flex-column  w-100'>
            <div className='search-sistem-line d-flex align-items-center'>
                <div className='search-bar-filters'>
                    <div class="search-bar" >
                        <form method=" " action="">
                            <input class="inport-bar-gome-page" type="text" placeholder="Protecty ID" required>
                            </input>
                        </form>
                    </div>
                </div>

                <div className='search-bar-filters'>
                    <div class="input-drop-down-page" >

                        <form method="get" action="">
                            <div class='import-bar-drop-down-page-grownd'>

                                <select class="import-bar-drop-down-page">
                                    <option value="1">Category</option>
                                    <option value="3">A1</option>
                                    <option value="1">A2</option>
                                    <option value="1">A3</option>
                                </select>
                                {/* <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.87969 9.53756C3.34361 8.919 4.22113 8.79364 4.83969 9.25756L11.9997 14.6276L19.1597 9.25756C19.7782 8.79364 20.6558 8.919 21.1197 9.53756C21.5836 10.1561 21.4583 11.0336 20.8397 11.4976L12.8397 17.4976C12.3419 17.8709 11.6575 17.8709 11.1597 17.4976L3.15969 11.4976C2.54113 11.0336 2.41577 10.1561 2.87969 9.53756Z" />
                                </svg> */}

                            </div>

                        </form>
                    </div>
                </div>

                <div className='search-bar-filters'>
                    <div class="search-bar" >
                        <form method="get" action="">
                            <input class="inport-bar-gome-page" type="text" placeholder="Deal type" required>
                            </input>
                        </form>
                    </div>
                </div>

            </div>

            <div className='search-sistem-line d-flex align-items-center'>
                <div className='search-bar-filters'>
                    <div class="input-drop-down-page-from-secend-line" >
                        <form method="get" action="">
                            <div class='import-bar-drop-dow-page-grownd'>
                                <select class="import-bar-drop-down-page-big">
                                    <option value="1">Projectis of construction companies</option>
                                    <option value="3">A1</option>
                                    <option value="1">A2</option>
                                    <option value="1">A3</option>
                                </select>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div className='search-sistem-line d-flex align-items-center'>
                <div className='search-bar-filters'>
                    <div class="input-drop-down-page" >
                        <form method="get" action="">
                            <div class='import-bar-drop-dow-page-grownd'>
                                <select class="import-bar-drop-down-page">
                                    <option value="1">City</option>
                                    <option value="3">A1</option>
                                    <option value="1">A2</option>
                                    <option value="1">A3</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='search-bar-filters'>
                    <div class="search-bar" >
                        <form method="get" action="">
                            <input class="inport-bar-gome-page" type="text" placeholder="Protecty ID" required>
                            </input>
                        </form>
                    </div>
                </div>

                <div className='search-bar-filters'>
                    <div class="search-bar" >
                        <form method="get" action="">
                            <input class="inport-bar-gome-page" type="text" placeholder="Protecty ID" required>
                            </input>
                        </form>
                    </div>
                </div>
            </div>

            <div className='search-system-slider d-flex align-items-center'>
                <div className='search-bar-slider'>
                    <MultiRangeSlider
                        min={0}
                        max={1000}
                        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                    />
                </div>

            </div>
        </div>
    );
}

export default FastFilters;