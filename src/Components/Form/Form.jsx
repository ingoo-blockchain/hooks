import React,{ useState,useEffect } from 'react'
import useForm from './useForm.js'
import validate from './validate.js'

const request = async (items) => {
    const result = await new Promise((resovle,reject)=>{
        setTimeout(()=>{
            resovle(items)
        },1000)
    })

    alert(JSON.stringify(result))
}

const Form = () => {
    // 기본지식은 간단한 커스텀훅 은 이해가 되어야 오늘 잘따라올수있을거에요.

    // 커스텀훅 만든 파일 -> useForm.jsx 
    // 폼체크 파일 하나 -> validate.js
    const {
        userid,
        password,
        errors,
        submit,
        handleSubmit
    } = useForm({userid:'',password:''},request,validate)
    // Form 컴포넌트에서만 사용할게아니라,
    // Join
    // write
    // comment

    // handlesubmit 발동되었을대.
    // 요청이라는것을 해야되잖아요,

    // submit 발동되었을대. 실행되는 함수를 인자값을 넘겨요, 

    

    
    /*
        password: {value: '', onChange: ƒ}
        userid: {value: '', onChange: ƒ}
        errors:{},
        submit:boolean,
        handleSubmit:f()=>{}

        분리라는걸 참좋아해요,
    
    */
    return (
        <form onSubmit={handleSubmit}>
            <h2>회원가입</h2>
            <ul>
                <li>
                    <label htmlFor='userid'>아이디</label>
                    <input type="text" {...userid} name="userid" className={errors.userid && 'error'} /> 
                    {errors.userid && <span>{errors.userid}</span>}
                </li>
                <li>
                    <label htmlFor='password'>패스워드</label>
                    <input type="password" name="password" {...password}  />
                    {errors.password && <span>{errors.password}</span>}
                </li>
                <li><input type="submit" value="가입" disabled={submit}/></li>
            </ul>
        </form>
    )
}



export default Form

/*
    회원가입폼을 완성해보세요. 
    패스워드 
    2

    전화번호받기
    핸드폰번호받기
    닉네임정하기

    6~8개짜리를만들어보시고,

    로그인 폼 만들어보세요.

    useContext , useReducer 

*/