import { ProjectService } from "../../services/ProjectService";
import { DISPLAY_LOADING, HIDE_LOADING } from "../types/loadingType";
import { DISPLAY_MODAL4, DISPLAY_MODAL5 } from "../types/modalType";


export const projectAction = {

    createProjectAction: (thongTinDuAn) => {
        return async (dispatch) => {
            await dispatch({
                type: DISPLAY_LOADING
            })
            try {
                const result = await ProjectService.createProject(thongTinDuAn)
                if (result.data.statusCode === 200) {
                    // console.log('result', result);
                    await dispatch({
                        type: HIDE_LOADING,
                    })
                    dispatch({
                        type: DISPLAY_MODAL4
                    })
                }
            } catch (errors) {
                console.log('errors: ', errors.reponse?.data);
                await dispatch({
                    type: HIDE_LOADING
                })
                dispatch({
                    type: DISPLAY_MODAL5
                })
            }
        }
    },
}