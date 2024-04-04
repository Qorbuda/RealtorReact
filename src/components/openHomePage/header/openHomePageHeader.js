import './headerStyle.css';

const OpenHomePageHeaderComponent = (titleInfo) => {
    console.log("fullHomeInfo.realtorInfo.dealType")
    console.log(titleInfo)
    let idText = titleInfo.titleInfo.headerInfo.itemCode
    
    titleInfo = titleInfo.titleInfo.realtorInfo
    let titleText = titleInfo.dealType + " " + titleInfo.category + " " + titleInfo.city + " " + titleInfo.street

    return (
        <div className="header_container">
            <div className='header-title'>
                <span >{titleText}</span>
                <small>ID: {idText}</small>
            </div>

            {/* <button>MESSAGE TO AGENT</button> */}
        </div>
    );
}

export default OpenHomePageHeaderComponent;