import { history } from "../../App";
import { UsersService } from "../../services/UsersService";
import { ACCESS_TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DISPLAY_LOADING, HIDE_LOADING } from "../types/loadingType";
import { DISPLAY_MODAL, DISPLAY_MODAL1, DISPLAY_MODAL2, DISPLAY_MODAL3 } from "../types/modalType";
import { GET_USER_SEARCH, SIGN_IN_ACTION } from "../types/usersType";


export const usersAction = {
    signInAction: (thongTinDangNhap) => {
        return async (dispatch) => {
            await dispatch({
                type: DISPLAY_LOADING,
            })
            try {
                const result = await UsersService.signIn(thongTinDangNhap)
                if (result.data.statusCode === 200) {
                    // console.log('result: ', result.data.content);
                    dispatch({
                        type: SIGN_IN_ACTION,
                        thongTinDangNhap: result.data.content
                    })
                    await dispatch({
                        type: HIDE_LOADING,
                    })
                    dispatch({
                        type: DISPLAY_MODAL,
                    })
                    history.goBack()
                }
            } catch (errors) {
                await dispatch({
                    type: HIDE_LOADING,
                })
                dispatch({
                    type: DISPLAY_MODAL1,
                })
                console.log('errors: ', errors.reponse?.data);
            }
        }
    },
    signUpAction: (thongTinDangKy) => {
        return async (dispatch) => {
            await dispatch({
                type: DISPLAY_LOADING,
            })
            try {
                const result = await UsersService.signUp(thongTinDangKy)
                if (result.data.statusCode === 200) {
                    // console.log('result: ', result.data.content);
                    await dispatch({
                        type: HIDE_LOADING,
                    })
                    dispatch({
                        type: DISPLAY_MODAL2
                    })
                }
            } catch (errors) {
                await dispatch({
                    type: HIDE_LOADING,
                })
                dispatch({
                    type: DISPLAY_MODAL3
                })
                console.log('errors: ', errors.reponse?.data);
            }
        }
    },
    getUserAction: (keyWord) => {
        return async (dispatch) => {
            try {
                const result = await UsersService.getUser(keyWord)
                if (result.data.statusCode === 200) {
                    // console.log('result: ', result.data.content);
                    dispatch({
                        type: GET_USER_SEARCH,
                        payload: result.data.content,
                    })
                }
            } catch (errors) {
                console.log("errors: ", errors.reponse?.data);

            }
        }
    }
}