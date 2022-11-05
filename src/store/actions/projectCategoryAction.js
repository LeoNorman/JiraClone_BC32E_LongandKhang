import { ProjectCategoryService } from "../../services/ProjectCategoryService";
import { SET_PROJECT_CATEGORY } from "../types/projectCategoryType";


export const projectCategoryAction = {

    getProjectCategoryAction: () => {
        return async (dispatch) => {
            try {
                const result = await ProjectCategoryService.getAllProjectCategory()
                if (result.data.statusCode === 200) {
                    // console.log('result: ', result.data.content);
                    dispatch({
                        type: SET_PROJECT_CATEGORY,
                        payload: result.data.content
                    })
                }
            } catch (errors) {
                console.log('errors: ', errors.reponse?.data);
            }
        }
    },
}