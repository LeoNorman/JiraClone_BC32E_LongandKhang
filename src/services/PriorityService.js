
import { api } from "../constants/api"


export const PriorityService = {
    getAllPriority: (id) => {
        return api.get(`Priority/getAll?id=${id}`)
    }
}
