
import { api } from "../constants/api"


export const ProjectService = {
    createProject: (thongTinDuAn) => {
        return api.post(`Project/createProject`,thongTinDuAn)
    }
}
