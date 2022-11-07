import { ProjectService } from "../../services/ProjectService";
import { DISPLAY_LOADING, HIDE_LOADING } from "../types/loadingType";
import { DISPLAY_MODAL4, DISPLAY_MODAL5 } from "../types/modalType";
import { GET_ALL_PROJECT } from "../types/projectType";
import { history } from '../../App'


export const projectAction = {

    createProjecAuthorizetAction: (thongTinDuAn) => {
        return async (dispatch) => {
            await dispatch({
                type: DISPLAY_LOADING
            })
            try {
                const result = await ProjectService.createProjectAuthorize(thongTinDuAn)
                if (result.data.statusCode === 200) {
                    // console.log('result', result);
                    await dispatch({
                        type: HIDE_LOADING,
                    })
                    await dispatch({
                        type: DISPLAY_MODAL4
                    })
                    history.push('/projectmanagement')
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

    getAllProjectAction: () => {
        return async (dispatch) => {
            try {
                const result = await ProjectService.getAllProject()
                if (result.data.statusCode === 200) {
                    // console.log('result', result.data.content);
                    dispatch({
                        type: GET_ALL_PROJECT,
                        payload: result.data.content
                    })
                }
            } catch (errors) {
                console.log('errors: ', errors.reponse?.data);
            }
        }
    },
}