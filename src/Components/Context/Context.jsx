import { createContext , useContext, useMemo } from 'react'

export const CommentContext = createContext()

const A = ({name}) => {
    return (
        <>
            <B name={name}/>
        </>
    )
}

const B = ({name}) => {
    return (
        <>
            <C name={name}/>
        </>
    )
}

const C = ({name}) => {
    const value = useContext(CommentContext)
    return (
        <>
            {name} <br />
            Hello Context

            <br />
            Context Value : {value}
        </>
    )
}

const Context = () => {

    const name = 'ingoo'

    const value = useMemo( ()=> ({ name }) , [name] )
    return (
        <CommentContext.Provider value={value}>
            <br />
            <A name={name}/>
        </CommentContext.Provider>
    )
}



export default Context

// context
// reducer 

// useCallback
// useMemo

// 피보나치수열 
