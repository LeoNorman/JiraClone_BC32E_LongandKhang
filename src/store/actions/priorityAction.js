import { PriorityService } from "../../services/PriorityService";
import { SET_ALL_PRIORITY } from "../types/priorityType";


export const priorityAction = {

    getAllTaskTypeAction: (id) => {
        return async (dispatch) => {
            try {
                const result = await PriorityService.getAllPriority(id)
                if (result.data.statusCode === 200) {
                    // console.log('result: ', result.data.content);
                    dispatch({
                        type: SET_ALL_PRIORITY,
                        payload: result.data.content
                    })
                }
            } catch (errors) {
                console.log('errors: ', errors.reponse?.data);
            }
        }
    },
}