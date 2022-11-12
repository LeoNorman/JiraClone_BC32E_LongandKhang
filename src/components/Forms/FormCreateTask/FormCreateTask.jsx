import { Editor } from '@tinymce/tinymce-react';
import { Select, Slider } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { priorityAction } from '../../../store/actions/priorityAction';
import { projectAction } from '../../../store/actions/projectAction';
import { taskTypeAction } from '../../../store/actions/taskTypeAction';
import { usersAction } from '../../../store/actions/usersAction';
import { SET_SUBMIT_EDIT_PROJECT } from '../../../store/types/projectType';

const FormCreateTask = (props) => {

    const { arrAllProject1 } = useSelector(state => state.projectReducer)
    const { arrTaskType } = useSelector(state => state.taskTypeReducer)
    const { arrAllPriority } = useSelector(state => state.priorityReducer)
    const { userSearch } = useSelector(state => state.usersReducer)
    const userOptions = userSearch?.map((user, index) => {
        // console.log("userSearch: ", userSearch);
        return { label: user.name, value: user.userId }
    })
    // console.log("userList: ", userSearch);
    // console.log("arrAllPriority: ", arrAllPriority);
    // console.log("arrTaskType: ", arrTaskType);
    // console.log("arrAllProject1: ", arrAllProject1);
    const [size, setSize] = useState('large');
    const [timeTracking, setTimeTracking] = useState({
        timeTrackingSpent: 0,
        timeTrackingRemaining: 0,
    })
    const dispatch = useDispatch()
    const searchRef = useRef(null);

    useEffect(() => {
        dispatch(projectAction.getAllProjectAction(''))
        dispatch(taskTypeAction.getAllTaskTypeAction())
        dispatch(priorityAction.getAllTaskTypeAction(''))
        // dispatch(usersAction.getUserAction(''))
        dispatch({
            type: SET_SUBMIT_EDIT_PROJECT,
            payload: submitForm
        })
    }, [])

    const submitForm = (e) => {
        e.preventDefault()
        log()
        formik.handleSubmit()
    }


    const formik = useFormik({
        initialValues: {
            listUserAsign: [
                0
            ],
            taskName: "",
            description: "",
            statusId: 1,
            originalEstimate: 0,
            timeTrackingSpent: 0,
            timeTrackingRemaining: 0,
            projectId: 0,
            typeId: 0,
            priorityId: 0
        },
        onSubmit: values => {
            console.log("values: ", values);
              dispatch(projectAction.createTaskAction(values))
        }
    })

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            // console.log(editorRef.current.getContent());
            formik.setFieldValue('description', editorRef.current.getContent())
        }
    };

    const options = [];
    for (let i = 10; i < 36; i++) {
        options.push({
            value: i.toString(36) + i,
            label: i.toString(36) + i,
        });
    }

    const handleChange = (value) => {
        // console.log(`Selected: ${value}`, value);
        formik.setFieldValue('listUserAsign', value)
    };
    return (
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <p>Project</p>
                    <select name="projectId" className='form-control' onChange={(e) => {
                        formik.setFieldValue('projectId', e.target.value)
                    }}>
                        {arrAllProject1?.map((project, index) => {
                            return <option value={project.id} key={index} >{project.projectName}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <p>Task name</p>
                    <input type="text" name='taskName' className='form-control' onChange={formik.handleChange} />
                </div>
                <div className='form-group'>
                    <div className="row">
                        <div className="col-6">
                            <p>Priority</p>
                            <select name='priorityId' className='form-control' onChange={(e) => {
                                formik.setFieldValue('priorityId', Number(e.target.value))
                            }}>
                                {arrAllPriority?.map((priority, index) => {
                                    return <option key={index} value={priority.priorityId}>{priority.priority}</option>
                                })}
                            </select>
                        </div>
                        <div className="col-6">
                            <p>Task type</p>
                            <select name='typeId' className='form-control' onChange={(e) => {
                                formik.setFieldValue('typeId', Number(e.target.value))
                            }}>
                                {arrTaskType?.map((task, index) => {
                                    return <option key={index} value={task.id}>{task.taskType}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <div className="row">
                        <div className="col-6">
                            <p>Assignees</p>
                            <Select
                                size={size}
                                mode="multiple"
                                placeholder="Please select"
                                defaultValue={[]}
                                onChange={handleChange}
                                optionFilterProp='label'
                                onSearch={(value) => {
                                    if (searchRef.current) {
                                        clearTimeout(searchRef.current);
                                    }
                                    searchRef.current = setTimeout(() => {
                                        dispatch(usersAction.getUserAction(value))

                                    }, 300)
                                }}
                                style={{
                                    width: '100%',
                                }}
                                options={userOptions}
                            />
                            <div className="row mt-4">
                                <div className="col-12 mt-1">
                                    <p>Original Estimate</p>
                                    <input type="number" className='form-control' name='originalEstimate' onChange={formik.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <p>Timetracking (hours)</p>
                            <Slider
                                defaultValue={30}
                                value={timeTracking.timeTrackingSpent}
                                max={Number(timeTracking.timeTrackingSpent) + Number(timeTracking.timeTrackingRemaining)}
                            />
                            <div className="row">
                                <div className="col-6 text-left font-bold">{timeTracking.timeTrackingSpent}h logged</div>
                                <div className="col-6 text-right font-bold">{timeTracking.timeTrackingRemaining}h remaining</div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-6">
                                    <p>Time spent</p>
                                    <input type="number" className='form-control' name='timeTrackingSpent' defaultValue={0} min={0} onChange={(e) => {
                                        setTimeTracking({
                                            ...timeTracking,
                                            timeTrackingSpent: e.target.value
                                        })
                                        formik.setFieldValue('timeTrackingSpent', Number(e.target.value))
                                    }} />
                                </div>
                                <div className="col-6">
                                    <p>Time remaining</p>
                                    <input type="number" className='form-control' name='timeTrackingRemaining' defaultValue={0} min={0} onChange={(e) => {
                                        setTimeTracking({
                                            ...timeTracking,
                                            timeTrackingRemaining: e.target.value
                                        })
                                        formik.setFieldValue('timeTrackingRemaining',Number(e.target.value))
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='from-group'>
                    <p>Desciption</p>
                    <Editor
                        name='description'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue=""
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div>
            </form>
        </div>
    )
}

export default FormCreateTask