
import { api } from "../constants/api"


export const ProjectService = {
    createProject: (thongTinDuAn) => {
        return api.post(`Project/createProject`,thongTinDuAn)
    },

    createProjectAuthorize: (thongTinDuAn) => {
        return api.post(`Project/createProjectAuthorize`,thongTinDuAn)
    },

    getAllProject: () => {
        return api.get(`Project/getAllProject`)
    }
}
