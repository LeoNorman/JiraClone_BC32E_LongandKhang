
import { api } from "../constants/api"


export const UsersService = {
    signIn: (thongTinDangNhap) => {
        return api.post(`Users/signin`, thongTinDangNhap)
    },
    signUp: (thongTinDangKy) => {
        return api.post(`Users/signup`, thongTinDangKy)
    },
}
