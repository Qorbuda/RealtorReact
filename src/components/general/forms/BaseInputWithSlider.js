import React, { useState, useEffect } from 'react';
import BaseInputSlider from './BaseInputSlider';

import { InputController } from './controllers';
import { Slider } from '@mui/material';

function BaseInputWithSlider({ name, delimiter = "-", controller, textComponent = "" }) {
    const [maximumValue, setMaximumValue] = useState(controller.state[1]);
    const [inputByIndexOf0, _setinputByIndexOf0] = useState(controller.state[0]);
    const [inputByIndexOf1, _setinputByIndexOf1] = useState(controller.state[1]);

    useEffect(() => {
        setinputByIndexOf1(maximumValue);
    }, []);


    function setinputByIndexOf0(newValue) {
        newValue = Number(newValue);
        if (newValue >= (controller.state[1] / 100) * maximumValue) {
            controller.setState([controller.state[1], (newValue / maximumValue) * 100]);
            _setinputByIndexOf0(inputByIndexOf1);
            _setinputByIndexOf1(newValue);
        } else {
            controller.setState([(newValue / maximumValue) * 100, controller.state[1]]);
            _setinputByIndexOf0(newValue);
        };
    };

    function setinputByIndexOf1(newValue) {
        newValue = Number(newValue);
        if (newValue <= controller.state[0]) {
            if (newValue - controller.distance <= 0) {
                controller.setState([0, 100]);
                _setinputByIndexOf0(0);
                _setinputByIndexOf1(0);
            } else {
                controller.setState([(newValue / maximumValue) * 100, controller.state[0]]);
                setinputByIndexOf0(newValue)
                _setinputByIndexOf1(inputByIndexOf0);
            }
        } else {
            controller.setState([controller.state[0], (newValue / maximumValue) * 100]);
            _setinputByIndexOf1(newValue);
        };
    };

    function setSliderState(newValue) {
        _setinputByIndexOf0(newValue[0] * maximumValue / 100);
        _setinputByIndexOf1(newValue[1] * maximumValue / 100);
        controller.setState(newValue);
    };

    var inputControllerByIndexOf0 = new InputController(inputByIndexOf0, setinputByIndexOf0);
    var inputControllerByIndexOf1 = new InputController(inputByIndexOf1, setinputByIndexOf1);

    return (
        <div className="d-flex flex-column align-items-start" style={{ gap: "32px" }}>
            <div className="d-flex flex-row align-items-center" style={{ gap: "18px" }}>

                <span className='base-select-span'>{name}</span>
                <BaseInputSlider placeholder={"plch"} controller={inputControllerByIndexOf0} />
                <span>{delimiter}</span>
                <BaseInputSlider placeholder={"plch"} controller={inputControllerByIndexOf1} />
            </div>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={controller.state}
                onChange={(event, newValue, eventSelector) => { setSliderState(newValue) }}
                disableSwap
                sx={{ color: "#03001e" }}
            />
        </div>
    );
};

export default BaseInputWithSlider;