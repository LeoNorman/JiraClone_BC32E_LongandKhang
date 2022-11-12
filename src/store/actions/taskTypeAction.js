import { TaskTypeService } from "../../services/TaskTypeService";
import { SET_ALL_TASK_TYPE } from "../types/TaskType";


export const taskTypeAction = {

    getAllTaskTypeAction: () => {
        return async (dispatch) => {
            try {
                const result = await TaskTypeService.getAllTaskType()
                if (result.data.statusCode === 200) {
                    // console.log('result: ', result.data.content);
                    dispatch({
                        type: SET_ALL_TASK_TYPE,
                        payload: result.data.content
                    })
                }
            } catch (errors) {
                console.log('errors: ', errors.reponse?.data);
            }
        }
    },
}