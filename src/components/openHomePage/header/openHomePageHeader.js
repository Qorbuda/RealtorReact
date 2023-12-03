import './headerStyle.css';

const OpenHomePageHeaderComponent = (titleInfo) => {
    titleInfo = titleInfo.titleInfo

    return (
        <div className="header_container">
            <div className='header-title'>
                <span >{titleInfo.title}</span>
                <small>ID: {titleInfo.itemCode}</small>
            </div>

            {/* <button>MESSAGE TO AGENT</button> */}
        </div>
    );
}

export default OpenHomePageHeaderComponent;