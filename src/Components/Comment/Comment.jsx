import Store,{initialState} from './Store/Context'
import React, {useReducer,useMemo} from 'react'
import reducer,{ GET_COMMNET } from './Store/reducer'
import CommnetLayout from './CommentLayout'

const Commnet = () => {

    const [state, dispatch] = useReducer(reducer,initialState)

    const defaultValue = useMemo(()=>({
        state,
        dispatch
    }),[state])

    return (
        <Store.Provider value={ defaultValue }>
            <CommnetLayout />
        </Store.Provider>
    )
}

export default Commnet