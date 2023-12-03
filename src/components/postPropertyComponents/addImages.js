import React, { useState, useRef } from 'react';
import PictureIcon from '../icons/PictureIcon.svg'
import PropertyAddInfoSaver from '../../pages/PropertyAddition/propertyAddInfoSaver';
import './addFilesBoxStyle.css'


function AddImages(fileItems) {

    var inputInfo = PropertyAddInfoSaver().photosAndDocs
    let boxTitleText = ""

    if (inputInfo.images.imageName == '') {
        boxTitleText = fileItems.iconTitleText
    } else {
        boxTitleText = inputInfo.images.imageName
    }

    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        let imagesArray = []

        if (e.target.files.length < 2) {
            document.getElementById("Add-files-box-add-name-text").textContent = e.target.files[0].name
            inputInfo.images.imageName = e.target.files[0].name
        } else {
            document.getElementById("Add-files-box-add-name-text").textContent = e.target.files[0].name + " and " + (e.target.files.length - 1) + " more files"
            inputInfo.images.imageName = e.target.files[0].name + " and " + (e.target.files.length - 1) + " more files"
        }
        inputInfo.images.image = e.target.files[0]
        for (let i = 0; i < e.target.files.length; i++) {
            imagesArray.push(e.target.files[i])
        }

        inputInfo.images.image = imagesArray
        setSelectedImages(selectedImages.concat(files));
    };


    return (

        <div className='Add-file-box-full-div'>
            <p className='Add-file-box-title-text'>{fileItems.textTitle}</p>
            <div className='Add-file-box-div-add-image-box'>
                <div className='Add-file-box-add-image-form-info'>
                    <div className='Add-file-box-add-image-div'>
                        <img className='Add-file-box-add-image' src={PictureIcon} />
                    </div>
                    <div className='Add-file-box-add-text-div'>

                        <p id='Add-files-box-add-name-text' className='Add-file-box-add-text'>{boxTitleText} </p>
                        <p className='Add-file-box-add-text'>{fileItems.iconFormatText} </p>
                    </div>

                </div>

                <div>
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        style={{ display: 'none' }}

                    />
                </div>

                <button className='Add-file-box-div-add-button-div' onClick={() => document.getElementById('fileInput').click()}>
                    <p className='Add-file-box-div-add-button-text'> {fileItems.buttonText} </p>
                </button>

            </div>


        </div>
    );
}


export default AddImages;