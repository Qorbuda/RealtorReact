import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BaseTab from '../components/general/buttons/BaseTab';



function PostPropertyPage(currTab) {
    const navigate = useNavigate();
    const location = useLocation();
    function setTab(tabName) {
        navigate(`/${tabName}`);
    };

    return (
        <div className='Post-property-page-div'>
            <BaseTab text='General Info' call_method={() => { setTab("post_property/general_info") }} color={currTab.currTab === '1' ? 'orange' : 'grey' } size = "totalTesT" />
            <BaseTab text='Owner' call_method={() => { setTab("post_property/owner") }} color={currTab.currTab === '2' ? 'orange' : 'grey'} size = "totalTesT"/>
            <BaseTab text='Property' call_method={() => { setTab("post_property/property") }} color={currTab.currTab === '3' ? 'orange' : 'grey'} size = "totalTesT"/>
            <BaseTab text='Description' call_method={() => { setTab("post_property/description") }} color={currTab.currTab === '4' ? 'orange' : 'grey'} size = "totalTesT" />
            <BaseTab text='Photos And Docs' call_method={() => { setTab("post_property/photos_and_docs") }} color={currTab.currTab === '5' ? 'orange' : 'grey'} size = "totalTesT" />
            <BaseTab text='Confirm' call_method={() => { setTab("post_property/confirm") }} color={currTab.currTab === '6' ? 'orange' : 'grey'} size = "totalTesT"  />
        </div>
    );
}

export default PostPropertyPage;