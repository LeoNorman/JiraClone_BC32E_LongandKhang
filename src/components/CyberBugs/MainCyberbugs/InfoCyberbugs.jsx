import React from 'react'

const InfoCyberbugs = () => {
    return (
        <div className="info" style={{ display: 'flex' }}>
            <div className="search-block">
                <input className="search" />
                <i className="fa fa-search" />
            </div>
            <div className="avatar-group" style={{ display: 'flex' }}>
                <div className="avatar">
                    <img src={require('../../../assets/imgJira/download (1).jfif')} alt='123' />
                </div>
                <div className="avatar">
                    <img src={require('../../../assets/imgJira/download (2).jfif')} alt='123' />
                </div>
                <div className="avatar">
                    <img src={require('../../../assets/imgJira/download (3).jfif')} alt='123' />
                </div>
            </div>
            <div style={{ marginLeft: 20 }} className="text">Only My Issues</div>
            <div style={{ marginLeft: 20 }} className="text">Recently Updated</div>
        </div>
    )
}

export default InfoCyberbugs