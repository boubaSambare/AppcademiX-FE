export default function (state = {}, action) {
    switch (action.type) {
        case "SET_TOKEN":
            return {
                ...state, 
                accessToken: action.payload
            }

            case "UNSET_TOKEN":
                return {
                    ...state,
                    accessToken: ''
                }

                default:
                    return state
    }
}