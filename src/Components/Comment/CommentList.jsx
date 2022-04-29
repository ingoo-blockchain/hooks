import React,{useContext, useState} from 'react'
import Store from './Store/Context'
import {UPDATE_COMMENT} from './Store/reducer'
/*
    U 
    1. 수정할수있는 화면을 만드는것이 1순위, 
        어떤구분값을 주거나, 어떤방식으로 구현을해야할까? 
        K 라는 값을 활용하자! 
        클릭했을때, K 가 console.log에 찍히겠음.

        전역 변수에 기본값을 null, 내가 클릭했을때, null -> 해당 k 값으로 변경시키는거,

    2. 바뀐 input박스를 언제 원상복귀를 시키냐, 
        엔터를 눌렀을때, input내용을 null 바꾼다.  
        input 박스에 onKeydown  
        이벤트 체크 완료 'Enter'

        'Enter' 무엇을 실행시킬거냐, 

        다시 컨텐츠를 보여주는거 = input -> null

        input 바뀌었는데, 내용이.. 비어있어,

        value값 왜구했냐 ?

        상태를 바꾸기 위함, 

        state:{
            commentItem:[
                {...},{...},{content:value}
            ]
        }
*/

const CommnetList = () => {
    const {state:{commentItem},dispatch} = useContext(Store) // {state,dispatch}
    const [input,setInput] = useState(null)
    
    const handleClick = k => {
        setInput(k)
    }

    const handleKeyDown = e => {
        if(e.key === 'Enter'){
            setInput(null)
            console.log( input, e.target.value )
            // {type:UPDATE_COMMENT , payload:{ index:input, content:e.target.value }}
            dispatch({type:UPDATE_COMMENT , payload:{ index:input, content:e.target.value }})
        }
    }

    const getList = () => {
        return commentItem.map((v,k)=>{
            return (
                <ul key={k}>
                    <li>{v.userid}</li>
                    <li onClick={()=>{ handleClick(k) }}>
                        {/* a 기본적으로는 null - v.content -> a 0,1,2 -> input */}
                        { 
                            input === k 
                            ? <input 
                                defaultValue={v.content}
                                onKeyDown={handleKeyDown}
                            />
                            : v.content 
                        }
                        <button>X</button>
                    </li>
                    <li>{v.date}</li>
                </ul>
            )
        })
    }

    return (
        <li>
            {getList()}
        </li>
    )
}

export default CommnetList