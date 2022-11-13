import { Select } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import parse from "html-react-parser";
import { statusAction } from '../../store/actions/statusAction';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { FaBookmark, FaClock, FaLink, FaTelegramPlane } from 'react-icons/fa';
import { priorityAction } from '../../store/actions/priorityAction';
import { projectAction } from '../../store/actions/projectAction';

const ModalCyberbugs = () => {
    const { taskDetailModel } = useSelector(state => state.projectReducer)
    const { arrStatus } = useSelector(state => state.statusReducer)
    const { arrAllPriority } = useSelector(state => state.priorityReducer)
    console.log("arrAllPriority: ", arrAllPriority);
    const dispatch = useDispatch()
    // console.log("arrStatus: ", arrStatus);
    // console.log("taskDetailModal: ", taskDetailModel);

    const renderDesciption = () => {
        let jsxDesciption = parse(taskDetailModel.description)
        return jsxDesciption
    }

    const renderTimeTracking = () => {

        const { timeTrackingSpent, timeTrackingRemaining } = taskDetailModel;

        const max = Number(timeTrackingSpent) + Number(timeTrackingRemaining);
        const percent = Math.round(Number(timeTrackingSpent) / max * 100)

        return <div>
            <div style={{ display: 'flex' }}>
                <FaClock className='mr-2 text-xl' />
                <div style={{ width: '100%' }}>

                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: `${percent}%` }} aria-valuenow={Number(timeTrackingSpent)} aria-valuemin={Number(timeTrackingRemaining)} aria-valuemax={max} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className="logged">{Number(timeTrackingRemaining)}h logged</p>
                        <p className="estimate-time">{Number(timeTrackingRemaining)}h remaining</p>
                    </div>
                </div>


            </div>
            <div className="row">

                <div className="col-6">
                    <input className="form-control" name="timeTrackingSpent" />
                </div>
                <div className="col-6">
                    <input className="form-control" name="timeTrackingRemaining" />
                </div>
            </div>
        </div>
    }
    useEffect(() => {
        dispatch(statusAction.getAllStatusAction())
        dispatch(priorityAction.getAllPriorityAction(''))
    }, [])

    return (
        <div>
            {/* Info Modal */}
            <div className="modal fade" id="infoModal" tabIndex={-1} role="dialog" aria-labelledby="infoModal" aria-hidden="true">
                <div className="modal-dialog modal-info">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="task-title">
                                <FaBookmark />
                                <span>{taskDetailModel.taskName}</span>
                            </div>
                            <div style={{ display: 'flex' }} className="task-click">
                                <div className='flex items-center'>
                                    <FaTelegramPlane className='mr-1' />
                                    <span style={{ paddingRight: 20 }}>Give feedback</span>
                                </div>
                                <div className='flex items-center'>
                                    <FaLink className='mr-1' />
                                    <span style={{ paddingRight: 20 }}>Copy link</span>
                                </div>
                                <i className="fa fa-trash-alt" style={{ cursor: 'pointer' }} />
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-8">
                                        <p className="issue">This is an issue of type: Task.</p>
                                        <div className="description">
                                            <p>Description</p>
                                            {renderDesciption()}
                                        </div>
                                        <div className="comment">
                                            <h6>Comment</h6>
                                            <div className="block-comment" style={{ display: 'flex' }}>
                                                <div className="avatar">
                                                    <img src={require('../../assets/imgJira/download (1).jfif')} alt='12321' />
                                                </div>
                                                <div className="input-comment">
                                                    <input type="text" placeholder="Add a comment ..." />
                                                    <p>
                                                        <span style={{ fontWeight: 500, color: 'gray' }}>Protip:</span>
                                                        <span>press
                                                            <span style={{ fontWeight: 'bold', background: '#ecedf0', color: '#b4bac6' }}>M</span>
                                                            to comment</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="lastest-comment">
                                                <div className="comment-item">
                                                    <div className="display-comment" style={{ display: 'flex' }}>
                                                        <div className="avatar">
                                                            <img src={require('../../assets/imgJira/download (1).jfif')} alt='32133' />
                                                        </div>
                                                        <div>
                                                            <p style={{ marginBottom: 5 }}>
                                                                Lord Gaben <span>a month ago</span>
                                                            </p>
                                                            <p style={{ marginBottom: 5 }}>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipisicing elit. Repellendus tempora ex
                                                                voluptatum saepe ab officiis alias totam ad
                                                                accusamus molestiae?
                                                            </p>
                                                            <div>
                                                                <span style={{ color: '#929398' }}>Edit</span>
                                                                •
                                                                <span style={{ color: '#929398' }}>Delete</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="status">
                                            <h6>STATUS</h6>
                                            <select className="custom-select" value={taskDetailModel.statusId} onChange={(e) => {
                                                dispatch(projectAction.updateStatusAction({
                                                    taskId: taskDetailModel.taskId,
                                                    statusId: e.target.value,
                                                    projectId: taskDetailModel.projectId
                                                }))
                                            }}>
                                                {arrStatus.map((status, index) => {
                                                    return <option key={index} value={status.statusId}>{status.statusName}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="assignees mb-4">
                                            <h6>ASSIGNEES</h6>
                                        <div className='grid grid-cols-2'>
                                                {taskDetailModel?.assigness.map((user, index) => {
                                                    return <div key={index} style={{ display: 'flex' }} className="item items-center mr-2 mt-2">
                                                        <div className="avatar mr-1">
                                                            <img src={user.avatar} alt={user.avatar} />
                                                        </div>
                                                        <p className="name flex items-center justify-between w-full">
                                                            {user.name}
                                                            <CloseOutlined />
                                                        </p>
                                                    </div>
                                                })}
                                                <div style={{ display: 'flex', alignItems: 'center', marginTop:'8px' }}>
                                                    <PlusOutlined />
                                                    <span>Add more</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="priority form-group" style={{ marginBottom: 20 }}>
                                            <h6>PRIORITY</h6>
                                            <select className='form-control'>
                                                {arrAllPriority?.map((priority, index) => {
                                                    return <option key={index} value={priority.priorityId}>{priority.priority}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="estimate">
                                            <h6>ORIGINAL ESTIMATE (HOURS)</h6>
                                            <input type="text" className="estimate-hours" value={taskDetailModel.originalEstimate} />
                                        </div>
                                        <div className="time-tracking">
                                            <h6>TIME TRACKING</h6>
                                            {renderTimeTracking()}

                                        </div>
                                        <div style={{ color: '#929398' }}>Create at a month ago</div>
                                        <div style={{ color: '#929398' }}>Update at a few seconds ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCyberbugs