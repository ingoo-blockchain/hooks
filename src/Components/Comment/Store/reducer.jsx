export const GET_COMMNET = 'GET_COMNMET'

const reducer = (state,action) => {
    const { type,payload } = action
    switch(type){
        case GET_COMMNET: //
            return {
                ...state
            }
        default:
            return state
    }
}


export default reducer

// import {redcuer} from '...'