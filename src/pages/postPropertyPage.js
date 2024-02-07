import React, {useEffect, useRef} from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import BaseTab from '../components/general/buttons/BaseTab';
import LanguageSwitcher from '../components/secondary/localization/LanguageSwitcher';


function PostPropertyPage(currTab) {
    const navigate = useNavigate();
    const location = useLocation();
    const postPropertyRef = useRef(null);

    var textFolder = LanguageSwitcher().PostPropertyPage.Confirm;


    useEffect(() => {
        const postPropertyDiv = postPropertyRef.current;
        if(document.body.offsetWidth < 1250) {
            switch(currTab.currTab) {
                case '2': 
                    postPropertyDiv.scrollTo({
                        left: 210,
                        behaviour: 'smooth'
                    })
                    break;
                case '3': 
                    postPropertyDiv.scrollTo({
                        left: 370,
                        behaviour: 'smooth'
                    })
                    break;
                case '4': 
                    postPropertyDiv.scrollTo({
                        left: 560,
                        behaviour: 'smooth'
                    })
                    break;
                case '5':
                    postPropertyDiv.scrollTo({
                        left: 780,
                        behaviour: 'smooth'
                    })
                    break;
                case '6' : 
                    postPropertyDiv.scrollTo({
                        left: 920,
                        behaviour: 'smooth'
                    })
                    break;
                default: 
            }
        }
    }, []);

    function setTab(tabName) {
        navigate(`/${tabName}`);
    };

    return (
        <div className='Post-property-page-div' ref={postPropertyRef}>
            <BaseTab text={textFolder.generalInfo} call_method={() => { setTab("post_property/general_info") }} color={currTab.currTab === '1' ? 'orange' : 'grey' } size = "totalTesT" />
            <BaseTab text={textFolder.Owner}  call_method={() => { setTab("post_property/owner") }} color={currTab.currTab === '2' ? 'orange' : 'grey'} size = "totalTesT"/>
            <BaseTab text={textFolder.Property} call_method={() => { setTab("post_property/property") }} color={currTab.currTab === '3' ? 'orange' : 'grey'} size = "totalTesT"/>
            <BaseTab text={textFolder.Description} call_method={() => { setTab("post_property/description") }} color={currTab.currTab === '4' ? 'orange' : 'grey'} size = "totalTesT" />
            <BaseTab text={textFolder.PhotosAndDocs} call_method={() => { setTab("post_property/photos_and_docs") }} color={currTab.currTab === '5' ? 'orange' : 'grey'} size = "totalTesT" />
            <BaseTab text={textFolder.Confirm} call_method={() => { setTab("post_property/confirm") }} color={currTab.currTab === '6' ? 'orange' : 'grey'} size = "totalTesT"  />
        </div>
    );
}

export default PostPropertyPage;