import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContentCyberbugs from '../../components/CyberBugs/MainCyberbugs/ContentCyberbugs'
import HeaderCyberbugs from '../../components/CyberBugs/MainCyberbugs/HeaderCyberbugs'
import InfoCyberbugs from '../../components/CyberBugs/MainCyberbugs/InfoCyberbugs'
import { projectAction } from '../../store/actions/projectAction'

const IndexCyberbugs = (props) => {

    // console.log(props.match.params.projectId);

    const {projectDetail} = useSelector(state => state.projectReducer)
    const dispatch = useDispatch()
    // console.log("projectDetail: ", projectDetail);
    
    useEffect(() => {
        dispatch(projectAction.getProjectDetailAction(props.match.params.projectId))
    }, [])

    return (
        <div className="main">
            <HeaderCyberbugs projectDetail={projectDetail} />
            <InfoCyberbugs projectDetail={projectDetail} />
            <ContentCyberbugs projectDetail={projectDetail}  />
        </div>
    )
}

export default IndexCyberbugs