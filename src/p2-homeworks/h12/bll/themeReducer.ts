
export type themeType = typeof initState;

const initState = {
    theme: 'some'
};



type actionType = ReturnType<typeof changeThemeAC>

export const themeReducer = (state: themeType = initState, action: actionType) => { // fix any
    switch (action.type) {
        case 'SET_THEME': {
            return {
                ...state, theme: action.theme
            }
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: string) => (
    {
        type: 'SET_THEME',
        theme
    }
); // fix any