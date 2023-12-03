import React from 'react';

import Youtube from '../../icons/Youtube.svg';
import Instagram from '../../icons/Instagram.svg';
import Facebook from '../../icons/Facebook.svg';

function SocialMedia() {
    return ( 
        <div className='d-flex flex-row align-items-start gap-3'>
            <a href='https://www.youtube.com/@tsurkavaproperty' target='_blank'>
                <img src={Youtube} />
            </a>
            <a href='https://www.instagram.com/' target='_blank'>
                <img src={Instagram} />
            </a>
            <a href='https://facebook.com' target='_blank'>
                <img src={Facebook} />
            </a>
        </div>
     );
}

export default SocialMedia;