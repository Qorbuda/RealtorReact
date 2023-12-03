import React from 'react';
import YoutubIcon from '../icons/photoAndDocsPageIcon/youtubIcon.svg'
import DeleteBtnIcon from '../icons/photoAndDocsPageIcon/deleteBtnIcon.svg'

import './addLinksBoxStyle.css'



function AddLinksBox(textId) {

    return (
        <div className='Add-link-box-full-div'>
            <div className='Add-link-box-link-and-main-icon'>
                <div className='Add-link-box-main-icon'>
                    <img src={YoutubIcon} />
                </div>
                <input id={textId.textId} className="Add-link-box-text" type="text" placeholder="https://www.youtube.com/watch?v=2AFKGgHb6yk" onChange={(event) => { textId.controller.setState(event.target.value) }} value={textId.controller.state}></input>
            </div>
            <div className='Add-link-box-delete-button-full-div' onClick={() => { deleteButton(textId.textId) }}>
                <div className='Add-link-box-delete-button-div'>
                    <img src={DeleteBtnIcon} />
                </div>
            </div>

        </div>
    );
}

function deleteButton(testIf) {
    document.getElementById(testIf).value = ""
}

export default AddLinksBox;