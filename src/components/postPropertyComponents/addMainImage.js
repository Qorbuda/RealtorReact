import React, { useState, useRef } from 'react';
import PictureIcon from '../icons/PictureIcon.svg'
import PropertyAddInfoSaver from '../../pages/PropertyAddition/propertyAddInfoSaver';
import './addFilesBoxStyle.css'


function AddMainImage(fileItems) {
    var inputInfo = PropertyAddInfoSaver().photosAndDocs

    const [file, setFile] = useState();

    const fileInput = useRef(null)

    let boxTitle = ""

    if (inputInfo["mainImage"].imageName == "") {
        boxTitle = fileItems.iconTitleText
    } else {
        boxTitle = inputInfo["mainImage"].imageName
    }

    function handleChange(e) {
        document.getElementById("Add-file-box-add-name-text").textContent = e.target.files[0].name

        setFile(URL.createObjectURL(e.target.files[0]));
        inputInfo["mainImage"].imageName = e.target.files[0].name
        inputInfo["mainImage"].image = e.target.files[0]
    }


    return (

        <div className='Add-file-box-full-div'>
            <p className='Add-file-box-title-text'>{fileItems.textTitle}</p>
            <div className='Add-file-box-div-add-image-box'>
                <div className='Add-file-box-add-image-form-info'>
                    <div className='Add-file-box-add-image-div'>
                        <img className='Add-file-box-add-image' src={PictureIcon} />
                    </div>
                    <div className='Add-file-box-add-text-div'>

                        <p id='Add-file-box-add-name-text' className='Add-file-box-add-text'>{boxTitle} </p>
                        <p className='Add-file-box-add-text'>{fileItems.iconFormatText} </p>
                    </div>

                </div>

                <div>
                    <input type='file' accept="image/*" name='image' ref={fileInput} onChange={handleChange} style={{ display: 'none' }} />
                </div>

                <button className='Add-file-box-div-add-button-div' onClick={() => fileInput.current.click()}>
                    <p className='Add-file-box-div-add-button-text'> {fileItems.buttonText} </p>
                </button>

            </div>


        </div>
    );
}

export default AddMainImage;