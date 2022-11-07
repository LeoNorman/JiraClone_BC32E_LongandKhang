import { GET_ALL_PROJECT } from "../types/projectType"


const stateDefault = {
    arrAllProject: []
}

export const projectReducer = (state = stateDefault, {type, payload}) => {
    switch (type) {
        case GET_ALL_PROJECT: {
            return {...state, arrAllProject: payload}
        }

        default: return { ...state }
    }
}