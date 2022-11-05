import { ACCESS_TOKEN, USER_LOGIN } from "../../util/settings/config"
import { SIGN_IN_ACTION } from "../types/usersType";

let user = {};
if(localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: user,
}

export const usersReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SIGN_IN_ACTION : {
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
            localStorage.setItem(ACCESS_TOKEN,thongTinDangNhap.accessToken);
            return {...state,userLogin:thongTinDangNhap}
        }

        default: return { ...state }
    }
}