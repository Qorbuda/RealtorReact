import React, { useState, useRef } from 'react';
import PictureIcon from '../icons/PictureIcon.svg'
import PropertyAddInfoSaver from '../../pages/PropertyAddition/propertyAddInfoSaver';
import AddAgemtData from '../../pages/addAgent/addAgemtData';
import AddDocumentData from '../../pages/addAgent/addDocumentData';


import './addFilesBoxStyle.css'


function AddFilesBox(fileItems) {
    if(fileItems.saveStatus == "addDocument"){
        var inputInfo = AddDocumentData().docsData
    }else if(fileItems.saveStatus == "addAgent"){
        var inputInfo = AddAgemtData().photosAndDocs
    }else{
        var inputInfo = PropertyAddInfoSaver().photosAndDocs
        
    }

    const [file, setFile] = useState();

    const fileInput = useRef(null)

    let boxTitle = ""

    if (inputInfo[fileItems.textTitle].docsName == "") {
        boxTitle = fileItems.iconTitleText
    } else {
        boxTitle = inputInfo[fileItems.textTitle].docsName
    }

    function handleChange(e) {
        document.getElementById(fileItems.FileTitleId).textContent = e.target.files[0].name
        inputInfo[fileItems.textTitle].docsName = e.target.files[0].name
        inputInfo[fileItems.textTitle].docs = e.target.files[0]
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    return (

        <div className='Add-file-box-full-div'>
            <p className='Add-file-box-title-text'>{fileItems.textTitleName}</p>
            <div className='Add-file-box-div-add-image-box'>
                <div className='Add-file-box-add-image-form-info'>
                    <div className='Add-file-box-add-image-div'>
                        <img className='Add-file-box-add-image' src={fileItems.iconImage} />
                    </div>
                    <div className='Add-file-box-add-text-div'>
                        <p id={fileItems.FileTitleId} className='Add-file-box-add-text'>{boxTitle} </p>
                        <p className='Add-file-box-add-text'>{fileItems.iconFormatText} </p>
                    </div>
                </div>

                <div>
                    <input type='file' accept=".pdf, .doc, .docx, .txt" size={50 * 1024 * 1024}  name='image' ref={fileInput} onChange={handleChange} style={{ display: 'none' }} />
                </div>

                <button className='Add-file-box-div-add-button-div' onClick={() => fileInput.current.click()}>
                    <p className='Add-file-box-div-add-button-text'> {fileItems.buttonText} </p>
                </button>

            </div>


        </div>
    );
}

export default AddFilesBox;