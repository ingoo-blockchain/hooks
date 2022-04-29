import React,{useContext,useState,useRef} from 'react'
import Store from './Store/Context'
import {CREATE_COMMENT} from './Store/reducer'
/*
    ?
    전역상태를 어떻게 가지고올거냐,
        1. useContext
        2. createContext -> 변수

    handleSubmit 
        dispatch 사용하기 위함, 
        상태를 바꾸겠다.

    useRef DOM 
*/

const CommentForm = () => {
    const [content,setContent] = useState('')
    const {state,dispatch} = useContext(Store) // value { }
    const handleSubmit = e => {
        e.preventDefault()
        // 상태를,, 전역상태에다가,, 데이터를 넣어야겠다.
        // {userid:'web7722,content:'asdfasdfasf',date:'2022-04-29'}

        // 어떻게 내용을 넣지 ?
        // reducer -> {type:CREATE_COMMENT payload:{userid:'web7722,content:'asdfasdfasf',date:'2022-04-29'}}
        dispatch({type:CREATE_COMMENT, payload:{userid:'web7722',content,date:'2022-04-29'}})
        setContent('')
        // Content에 넣을 내용을 
        // input에 있는 정보를 가져와서, 그녀석을 content에 넣자!
        input.current.focus() // 커서이동시켜주는거지 return 있는게아니야. 

        // console.log(input.current) // <input />
        // input.current.focus() // X 
    }

    const handleChange = e => {
        const {value} = e.target
        setContent(value)
    }

    const input = useRef()  // {current:undefined}
   

    return (
        <li>
            <form onSubmit={handleSubmit}>
                <input ref={input} type='text' value={content} onChange={handleChange} />
                <input type='submit' value='댓글쓰기' />
            </form>
        </li>
    )
}

// JAVASCRIPT -> OBJECT


export default CommentForm