import {Dispatch} from "redux";
import {RequestAPI} from "./api/api";


export const setRequestAC = (info: string) => {
    return {
        type: 'SEND_REQUEST',
        info
    } as const
};
export const setCheckBoxAC = (value: boolean) => {
    return {
        type: 'SET_CHECKBOX',
        value
    } as const
};

type RequestActionType = ReturnType<typeof setRequestAC> | ReturnType<typeof setCheckBoxAC>


let requestState = {
    info: '',
    checkBox: false
};

export type requestStateType = typeof requestState

export const RequestReducer = (state: requestStateType = requestState, action: RequestActionType) => {
    switch (action.type) {
        case 'SET_CHECKBOX':
            return {
                ...state, checkBox: action.value
            };
        case "SEND_REQUEST":
            return {
                ...state, info: action.info
            };

        default:
            return state
    }
};

export const sendRequestTC = (checkState: boolean) => (dispatch: Dispatch) => {
    RequestAPI.setData(checkState).then((res: any) => {
        dispatch(setRequestAC(res.data.info));
    }).catch(error => {
        dispatch(setRequestAC(error.response.data.info))
    })
};
