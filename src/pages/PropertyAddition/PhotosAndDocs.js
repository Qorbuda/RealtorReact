import React, { useState } from 'react';
import PostPropertyPage from '../postPropertyPage';
import LanguageSwitcher from "../../components/secondary/localization/LanguageSwitcher";
import { useNavigate, useLocation } from 'react-router-dom';
import BaseButton from '../../components/general/buttons/BaseButton';
import AddLinksBox from '../../components/postPropertyComponents/addLinksBox';
import ArrowRaight from '../../components/icons/ArrowRaight.svg'
import AddMainImage from '../../components/postPropertyComponents/addMainImage';
import AddImages from '../../components/postPropertyComponents/addImages';
import { InputController } from "../../components/general/forms/controllers";
import PropertyAddInfoSaver from './propertyAddInfoSaver';
import AddFilesBox from '../../components/postPropertyComponents/addFilesBox';
// import PictureIcon from '../icons/PictureIcon.svg'
import uploadDocIcon from '../../components/icons/uploadDocIcon.svg'




import '../PropertyAddition/PropertyAdditionStyle/PropertyAdditionAllPage.css';


function PhotosAndDocs() {
    var textFolder = LanguageSwitcher().PostPropertyPage;
    var inputInfo = PropertyAddInfoSaver().photosAndDocs;


    const navigate = useNavigate();
    const location = useLocation();

    const [secendLink, setsecendLink] = useState(inputInfo.secendLink)
    const [firstLink, setfirstLink] = useState(inputInfo.firstLink);


    var secendLinkController = new InputController(secendLink, setsecendLink);
    var firstLinkController = new InputController(firstLink, setfirstLink);

    inputInfo.firstLink = secendLinkController.state
    inputInfo.secendLink = firstLinkController.state


    function setTab(tabName) {
        navigate(`/${tabName}`);
    };
    return (
        <div className='Post-property-pag-input-boxs'>
            <div className='Post-property-heder-and-buttons'>
                <p className='Post-property-page-title'>{textFolder.AddAProperty}</p>

                <PostPropertyPage currTab='5' />
            </div>

            <div className='Post-property-page-photos-and-docs-full-div'>
                <div className='Post-property-page-photos-and-docs-full-input-box'>
                    <div className='Post-property-page-photos-and-docs-image-and-gallery'>
                        <AddMainImage
                            textTitle={textFolder.photosAndDocs.AddMainImage}
                            iconTitleText={textFolder.photosAndDocs.IconTitleText}
                            iconFormatText={textFolder.photosAndDocs.IconFormatText}
                            buttonText={textFolder.photosAndDocs.buttonText}

                        />
                        <AddImages
                            textTitle={textFolder.photosAndDocs.AddMainImages}
                            iconTitleText={textFolder.photosAndDocs.IconTitleText}
                            iconFormatText={textFolder.photosAndDocs.IconFormatText}
                            buttonText={textFolder.photosAndDocs.buttonText}
                        />

                    </div>


                    <div className='Post-property-page-photos-and-docs-image-and-gallery'>
                        <AddFilesBox
                            textTitle="docs"
                            iconTitleText={textFolder.photosAndDocs.UploadFile}
                            iconFormatText={textFolder.photosAndDocs.MaxSize}
                            buttonText={textFolder.photosAndDocs.buttonText}
                            iconImage={uploadDocIcon}
                            FileTitleId="docs-bloc-id"
                        />

                        <AddFilesBox
                            textTitle="agreement"
                            iconTitleText={textFolder.photosAndDocs.UploadFile}
                            iconFormatText={textFolder.photosAndDocs.MaxSize}
                            buttonText={textFolder.photosAndDocs.buttonText}
                            iconImage={uploadDocIcon}
                            FileTitleId="agreement-bloc-id"


                        />
                    </div>


                    <div className='Post-property-page-link-full-div'>
                        <p className='Post-property-page-link-title-text'>{textFolder.photosAndDocs.Links}</p>
                        <div className='Post-property-page-link-div'>
                            <AddLinksBox textId="first-link" controller={secendLinkController} />
                            <AddLinksBox textId="secend-link" controller={firstLinkController} />
                        </div>
                    </div>

                    {/* <div className='Post-property-page-photos-and-docs-image-and-gallery'>
                        <AddFilesBox
                            textTitle="Agreement"
                            iconTitleText={textFolder.photosAndDocs.IconTitleText}
                            iconFormatText={textFolder.photosAndDocs.IconFormatText}
                            buttonText={textFolder.photosAndDocs.buttonText}
                        // iconImage = {PictureIcon}
                        />
                        <AddFilesBox
                            textTitle="Docs"
                            iconTitleText={textFolder.photosAndDocs.IconTitleText}
                            iconFormatText={textFolder.photosAndDocs.IconFormatText}
                            buttonText={textFolder.photosAndDocs.buttonText}
                        // iconImage = {PictureIcon}
                        />
                    </div> */}

                    {/* <div className='Post-property-page-photos-and-docs-links'>
                        <p className='Post-property-page-photos-and-docs-links-title'>Links</p>
                        <div className='Post-property-page-photos-and-docs-link'>

                        </div>

                    </div> */}


                </div>

                <div className='Post-property-owner-page-buttons-div'>

                    <BaseButton text={textFolder.Back} call_method={() => { setTab("post_property/description") }} />
                    <BaseButton text={<span >{textFolder.Next} <img className='Post-property-general-info-input-icon' src={ArrowRaight} /></span>}
                        call_method={() => { setTab("post_property/confirm") }} />

                </div>

            </div>



        </div>
    );
}

export default PhotosAndDocs;