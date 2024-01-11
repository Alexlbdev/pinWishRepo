export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';
export const loginAction = (user) => ({
    type: LOGIN,
    payload: {user, entryFormIsOpen: false}
})

export const logoutAction = () => ({
    type: LOGOUT,
    payload: {user: undefined, entryFormIsOpen: true}
})
export const openEntryFormAction = () => ({
    type: OPEN,
    payload: true
})
export const closeEntryFormAction = () => ({
    type: CLOSE,
    payload: false
})