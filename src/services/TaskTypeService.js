
import { api } from "../constants/api"


export const TaskTypeService = {
    getAllTaskType: () => {
        return api.get(`TaskType/getAll`)
    }
}
