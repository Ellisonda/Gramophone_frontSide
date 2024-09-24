export const LOGIN = 'LOGIN';


export const doLoginActions = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}
