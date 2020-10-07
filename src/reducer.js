import {SET_DISCOVER_WEEKLY, SET_PLAYLISTS, SET_TOKEN, SET_USER} from "./types"
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    items: null,
    //После разработки приложения, токен установить в ноль(null)
    //REMOVE after finished developing
    token: 'BQCnPktlhcCU2i4cVBRgaZKlyRjYyErmRWh6TJegI4XWra9oiZqxc9ddjAwuOFkTI8CLCLfoD8Y81JGUiSmTfJ4Ox6O2_d0QTFFb4phpYCnz6tGQcN3fuGtyB5G4SBl0ubGMFVjQrC_zX1KcndIkpzMBzqzYAwzEN9QE32GUSh_hj_v7',
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case SET_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists
            }
        case SET_DISCOVER_WEEKLY:
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
           return state
    }
}

export default reducer