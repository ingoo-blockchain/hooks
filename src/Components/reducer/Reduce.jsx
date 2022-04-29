import { useReducer } from "react";

const initialState = {
    value:''
}

const reducer = (state, action) => {
    const { type,payload } = action
    switch(type) {
        case 'INSERT_VALUE':
            return {
                ...state,
                value: payload.value
            }
        default:
            return state
    }
}

const Reduce = () => {
    const [state, dispatch] = useReducer(reducer,initialState)

    const handleclick = () => {
        // action 
        dispatch({ type:'INSERT_VALUE', payload:{ value:1 } })
    }

    return (
        <>
            <button onClick={handleclick}>클릭</button>
            {state.value}
        </>
    )
}

export default Reduce