
const defaultState = {
    user: {username: '', password: ''}
}
export const authReducer = (state = defaultState, action:any) => {
    switch(action.type){
        case "SET_USER":
            return {...state, user: {username: action.payload.user.username, password: action.payload.user.password}}
        default:
            return state
    }
}