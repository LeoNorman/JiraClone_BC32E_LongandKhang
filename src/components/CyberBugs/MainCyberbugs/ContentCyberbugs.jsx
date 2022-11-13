import React from 'react'
import { useDispatch } from 'react-redux'
import { projectAction } from '../../../store/actions/projectAction'

const ContentCyberbugs = (props) => {

    const { projectDetail } = props
    const dispatch = useDispatch()
    // console.log("projectDetail: ", projectDetail);

    const renderCardTaskList = () => {
        return projectDetail?.lstTask?.map((item, index) => {
            return <div key={index} className="col-span-1 card">
                <div className="card-header">
                    {item.statusName}
                </div>
                <ul className="list-group list-group-flush">
                    {item.lstTaskDeTail.map((task, index) => {
                        return <li key={index} className="list-group-item" data-toggle="modal" data-target="#infoModal" style={{ cursor: 'pointer' }}  onClick={() => {
                            dispatch(projectAction.getTaskDetailAction(task.taskId))
                        }}>
                            <p className='font-bold'>
                                {task.taskName}
                            </p>
                            <div className="block" style={{ display: 'flex' }}>
                                <div className="block-left">
                                    {
                                        (task.priorityTask.priority === 'High') ? <p className="text-danger font-bold">{task.priorityTask.priority}</p> :
                                            (task.priorityTask.priority === 'Medium') ? <p className="text-success font-bold">{task.priorityTask.priority}</p> :
                                                (task.priorityTask.priority === 'Low') ? <p className="text-warning font-bold">{task.priorityTask.priority}</p>
                                                    :
                                                    <p className="text-blue-500 font-bold">{task.priorityTask.priority}</p>
                                    }
                                </div>
                                <div className="block-right">
                                    <div className="avatar-group" style={{ display: 'flex' }}>
                                        {task.assigness.map((mem, index) => {
                                            return <div className="avatar" key={index}>
                                                <img src={mem.avatar} alt={mem.avatar} />
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        })
    }

    return (
        <div className="content grid grid-cols-4">
            {renderCardTaskList()}
        </div>
    )
}

export default ContentCyberbugs

{/* <div className="col-span-1 card">
                <div className="card-header">
                    BACKLOG 3
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" data-toggle="modal" data-target="#infoModal" style={{ cursor: 'pointer' }}>
                        <p>
                            Each issue has a single reporter but can have multiple
                            assignees
                        </p>
                        <div className="block" style={{ display: 'flex' }}>
                            <div className="block-left">
                                <i className="fa fa-bookmark" />
                                <i className="fa fa-arrow-up" />
                            </div>
                            <div className="block-right">
                                <div className="avatar-group" style={{ display: 'flex' }}>
                                    <div className="avatar">
                                        <img src={require('../../../assets/imgJira/download (1).jfif')} alt='123' />
                                    </div>
                                    <div className="avatar">
                                        <img src={require('../../../assets/imgJira/download (2).jfif')} alt='123' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <p>
                            Each issue has a single reporter but can have multiple
                            assignees
                        </p>
                        <div className="block" style={{ display: 'flex' }}>
                            <div className="block-left">
                                <i className="fa fa-check-square" />
                                <i className="fa fa-arrow-up" />
                            </div>
                            <div className="block-right">
                                <div className="avatar-group" style={{ display: 'flex' }}>
                                    <div className="avatar">
                                        <img src={require('../../../assets/imgJira/download (1).jfif')} alt='123' />
                                    </div>
                                    <div className="avatar">
                                        <img src={require('../../../assets/imgJira/download (2).jfif')} alt='123' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div> */}