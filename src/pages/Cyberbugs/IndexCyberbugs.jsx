import React from 'react'
import ContentCyberbugs from '../../components/CyberBugs/MainCyberbugs/ContentCyberbugs'
import HeaderCyberbugs from '../../components/CyberBugs/MainCyberbugs/HeaderCyberbugs'
import InfoCyberbugs from '../../components/CyberBugs/MainCyberbugs/InfoCyberbugs'

const IndexCyberbugs = () => {
    return (
        <div className="main">
            <HeaderCyberbugs />
            <h3 className='mt-3'>Cyber Board</h3>
            <InfoCyberbugs />
            <ContentCyberbugs />
        </div>
    )
}

export default IndexCyberbugs