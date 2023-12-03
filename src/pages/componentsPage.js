import React, {useState} from 'react';
import BaseButton from '../components/general/buttons/BaseButton';
import CurrencyButton from '../components/general/buttons/CurrencyButton';
import RoundedButton from '../components/general/buttons/RoundedButton';
import BaseInput from '../components/general/forms/BaseInput';
import BaseSelect from '../components/general/forms/BaseSelect';
import BaseInputWithSlider from '../components/general/forms/BaseInputWithSlider';

import { InputController, InputWithSliderController, SelectController } from '../components/general/forms/controllers';
import Carousel from '../components/general/carousel/Сarousel';

function ComponentsPage() {
    const [input, setInput] = useState('');
    const [select, setSelect] = useState('');
    const [sliderState, setSliderState] = useState([0, 10])

    var inputController = new InputController(input, setInput);
    var selectController = new SelectController(select, setSelect, [{name: "test1", value: 1}, {name: "test2", value: 2}, {name: "test3", value: 3}, {name: "test4", value: 4}, {name: "test5", value: 5}])
    var sliderController = new InputWithSliderController(sliderState, setSliderState)
    
    return (
        <div className='m-3'>
            "ComponentsPage"
            <BaseButton text='test' />
            <RoundedButton text='test-rounded' />
            <CurrencyButton />
            <BaseInput placeholder='BaseInput' controller={inputController}/>
            <BaseSelect nameOfSelect='baseSelect' controller={selectController}/>
            <BaseInputWithSlider name={"testName"} controller={sliderController}/>
            <Carousel />
        </div>
        
    );
}

export default ComponentsPage;