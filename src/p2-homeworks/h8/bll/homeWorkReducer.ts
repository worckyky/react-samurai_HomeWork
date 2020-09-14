export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {
            switch (action.payload) {
                case "up":
                    return (
                        [...state].sort((a, b) =>
                            a.name !== b.name
                                ? a.name < b.name
                                ? -1
                                : 1
                                : 0)
                    );
                case "down":
                    return (
                        [...state].sort((a, b) =>
                            a.name !== b.name
                                ? a.name > b.name
                                ? -1
                                : 1
                                : 0)
                    );
                default:
                    return state
            }
        }
        case "check": {
            switch (action.payload) {
                case (18):
                    return (
                        [...state].filter(person => person.age >= 18)
                    )
            }
            return state
        }
        default:
            return state
    }
};