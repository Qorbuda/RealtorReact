import React from "react";
import "./popapFunction.css"
import HistoriChangeBox from "./historiChangeBox";
import AddFilesBox from "../../components/postPropertyComponents/addFilesBox";
import uploadDocIcon from '../../components/icons/uploadDocIcon.svg'
import LanguageSwitcher from "../../components/secondary/localization/LanguageSwitcher";
import AddDocumentData from '../addAgent/addDocumentData';
import axios from 'axios';



const PopapEditDocument = ({ open, onClose, itemId }) => {
  if (!open) return null;
  var textFolder = LanguageSwitcher().PostPropertyPage;


  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <div className="history-popap-title-div">
            <p className="history-popap-title-title">ADD DOCS</p>
            <button className='history-popap-title-x-button' onClick={onClose}>x</button>
          </div>
          <div className="history-popap-title-line"></div>
          <div className='add-document-popap-change-box-full-div'>
            <AddFilesBox
              textTitle="docs"
              textTitleName={textFolder.photosAndDocs.docs}
              iconTitleText={textFolder.photosAndDocs.UploadFile}
              iconFormatText={textFolder.photosAndDocs.MaxSize}
              buttonText={textFolder.photosAndDocs.buttonText}
              iconImage={uploadDocIcon}
              FileTitleId="docs-bloc-id"
              saveStatus = "addDocument"
            />
          </div>
          <div className='delete-popap-change-box-full-div'>
            <div className='add-document-popap-change-box-div'>
              <button className="add-document-popup-button-delete" onClick={() => changeDoc()}>ADD</button>
              <button className="delete-popup-button-cancel" onClick={onClose}>CANCEL</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
  async function changeDoc(){
    var inputInfo = AddDocumentData().docsData
    const formData = new FormData();
    if (inputInfo?.docs?.docs) {
        formData.append('newDoc', inputInfo.docs.docs);
    }
    console.log(itemId)
    axios.post('https://api.myflats.ge/api/Appartments/change-doc', formData, {
            params:{itemId: itemId},
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        },)
            .then(response => {
                const data = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    onClose()
  }
};

function getHistoriChangeBox(historisInfo) {
  let historiBoxArr = []
  for (var i = 0; i < historisInfo.length; i++) {
    historiBoxArr.push(<HistoriChangeBox key={i} historiBoxInfo={historisInfo[i]} />)
  }
  return (historiBoxArr)
}

export default PopapEditDocument;
