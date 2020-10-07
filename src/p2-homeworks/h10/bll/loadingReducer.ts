
enum CONS {
    START_LOADER = 'START_LOADER'
}

export type initialStateType = {
    loading: boolean
}

const initState = {
    loading: false
};

type returnType = {
    type: string
    loader: boolean
}

type actionTypes = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: actionTypes): initialStateType => { // fix any
    switch (action.type) {
        case CONS.START_LOADER: {
            return {
                ...state, loading: action.loader
            }
        }
        default: return {...state};
    }
};

export const loadingAC = (loader: boolean): returnType => {
    return {
        type: CONS.START_LOADER,
        loader: loader
    } as const
}; // fix any