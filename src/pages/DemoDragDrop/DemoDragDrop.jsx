import React, { useRef, useState } from 'react'
import './DemoDragDrop.css'
import { useSpring, animated } from 'react-spring'

const defaultValue = [
    { id: 1, taskName: 'Task 1' },
    { id: 2, taskName: 'Task 2' },
    { id: 3, taskName: 'Task 3' },
    { id: 4, taskName: 'Task 4' },
    { id: 5, taskName: 'Task 5' },
]

const DemoDragDrop = (props) => {

    const [taskList, setTaskList] = useState(defaultValue)
    const tagDrag = useRef({})
    const tagDragEnter = useRef({})

    //Animation
    const [propsSpring, set, stop] = useSpring(() => ({ from: { bottom: -25 }, to: { bottom: 0 }, config: { duration: 500 }, reset: true }))

    const handleDragStart = (e, task, index) => {
        // console.log("tag: ", e.target);
        // console.log("task: ", task);
        // console.log("index: ", index);
        tagDrag.current = task
    }

    const handleDragOver = (e) => {
        // console.log('targetOver: ', e.target);
    }

    const handleDragEnd = (e) => {
        // console.log('dragEnd: ', e.target);

    }

    const handleDragEnter = (e, taskDragEnter, index) => {
        // console.log("dragEnterTag: ", e.target);
        // console.log("targetOver: ", task);
        // console.log("index: ", index);

        set({ bottom: 0 })

        //Lưu lại giá trị của task được kéo ngang qua
        tagDragEnter.current = { ...taskDragEnter }

        let taskListUpdate = [...taskList]
        //Lấy ra index thằng đang kéo
        let indexDrag = taskListUpdate.findIndex(task => task.id === tagDrag.current.id)
        //Lấy ra index thằng bị kéo qua
        let indexDragEnter = taskListUpdate.findIndex(task => task.id === taskDragEnter.id)
        //Biến chứa giá trị thằng đang kéo
        let temp = taskListUpdate[indexDrag]
        //Lấy giá trị của thằng đang kéo gán = thằng kéo qua
        taskListUpdate[indexDrag] = taskListUpdate[indexDragEnter]
        //Lấy thằng kéo qua gán = thằng đang kéo
        taskListUpdate[indexDragEnter] = temp
        setTaskList(taskListUpdate)
    }

    const handleDrop = (e) => {
        console.log('drog', e.target);
    }

    return (
        <div className='container' onDragOver={(e) => {
            e.stopPropagation();
            e.preventDefault()
        }} onDrop={(e) => {
            tagDrag.current = {}
            setTaskList([...taskList])
        }}>
            <div className="text-center display-4">Task List</div>
            <div className="row">
                <div className="col-4">

                </div>
                <div className="bg-dark p-5 col-4">
                    {taskList.map((task, index) => {

                        let cssDragTag = task.id === tagDrag.current.id ? 'dragTag' : ''

                        if (task.id === tagDragEnter.current.id) {
                            return <animated.div
                                style={{
                                    position: 'relative',
                                    bottom: propsSpring.bottom.interpolate(numBottom => `${numBottom}px`)
                                }}
                                draggable='true'
                                onDragStart={(e) => { handleDragStart(e, task, index) }}
                                onDragEnter={(e) => { handleDragEnter(e, task, index) }}
                                onDragEnd={(e) => { handleDragEnd(e) }}
                                key={index}
                                className={`bg-success text-white m-1 p-3`}
                            >
                                {task.taskName}
                            </animated.div>
                        }

                        return <div
                            draggable='true'
                            onDragStart={(e) => { handleDragStart(e, task, index) }}
                            onDragEnter={(e) => { handleDragEnter(e, task, index) }}
                            onDragEnd={(e) => { handleDragEnd(e) }}
                            key={index}
                            className={`bg-success text-white m-1 p-3 ${cssDragTag}`}
                        >{task.taskName}</div>
                    })}
                </div>
                <div className="col-4 bg-primary h-[500px]" onDragOver={(e) => {
                    e.stopPropagation();
                    e.preventDefault()
                }}
                    onDrop={(e) => { handleDrop(e) }}
                >

                </div>
            </div>
        </div>
    )
}

export default DemoDragDrop