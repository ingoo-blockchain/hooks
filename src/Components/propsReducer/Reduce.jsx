import React,{useReducer} from 'react'

const CHANGE_ID = 'CHANGE_ID'

const reudcer = (state,action) => {
    switch(action.type){
        case "CHANGE_ID":
            return {
                ...state,
                user:{
                    ...state.user,
                    userid:'ingoo2'
                }
            }
        case "CHANGE_NAME":
            return {
                ...state,
                user:{
                    ...state.user,
                    username:action.payload
                }
            }
        case "ADD_LIST":
            return {
                ...state,
                notice:[
                    ...state.notice,
                    {idx:1,subject:'dfdf',content:'dfdf',date:'2022-04-28'}
                ]
            }
    }
    
    return state
}


const initialState = {
    user:{
        userid:'',
        username:'',
        userlevel:'',
    },
    notice:[
        {idx:0,subject:'asdf',content:'asdf',date:'2022-04-28'}
    ],
}

// 그래알았어..

// 이거까지 하자

// useReducer 와 useContext 같이 써보는건 한번해봐,,


const Reduce = () => {

    const [state,dispatch] = useReducer(reudcer,initialState) // 삼각관계. 
    // 상태가 하나다,
    // 상태를 바꾸는 함수도 하나다.

    // = Context와 아주 잘어울린다.


    const handleClick = () => {
        // code..
        dispatch({type:'CHANGE_NAME',payload:'dddd'})
    }

    const handleClick2 = () => {
        //...
        dispatch({type:'CHANGE_ID'})
    }

    const addList = () => {
        //...
        dispatch({type:'ADD_LIST'})
    }

    // 비동기 코드 처리가 힘들다.

    return (
        <>
            <h2>useReducer 배우기</h2>
            <p>
                <button onClick={handleClick} >이름바꾸기 버튼</button>
                <button onClick={handleClick2} >아이디바꾸기 버튼</button>
                <button onClick={addList}>리스트 추가</button>
            </p>
            {JSON.stringify(state)}
        </>
    )
}

/*
    useReudcer를 사용하는목적,
    상태 바꾸는 코드를 한공간에 몰아넣고싶어서

    상태를 만들수있는 메서드가 useReducer 에요,

    useReducer 는 무슨역활을하냐, 상태를 만들고, 상태를 변경할수있는 함수를 제공해줍니다.

    const [value,setValue] = useState(0)

    const [state,dispatch] = useReducer(reudcer,initialState)


*/

export default Reduce