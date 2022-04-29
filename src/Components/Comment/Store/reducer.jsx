export const GET_COMMNET = 'GET_COMNMET'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

const reducer = (state,action) => {
    const { type,payload } = action
    switch(type){
        case GET_COMMNET: //
            return {
                ...state
            }
        case CREATE_COMMENT:
            // 뭘하는걸까..
            // payalod : {userid:'web7722',content:'asdfasdfasf',date:'2022-04-29'}
            //
            return {
                ...state,
                commentItem:[...state.commentItem,payload]
            }
        case UPDATE_COMMENT:
            // 현재 나의 상태가 어떻게 생겼는가,
            // 현재 내가 활용할수잇는 내용이 무엇인가?
            const {index, content} = payload
            // {commentItem:[{...},{...},{...}],er}
            //  payalod:{ index:1,content:'asdfasdf' }
            const commentItem = [...state.commentItem]
            commentItem[index].content = content

            return {
                ...state,
                commentItem
            }
        default:
            return state
    }
}


export default reducer

// import {redcuer} from '...'