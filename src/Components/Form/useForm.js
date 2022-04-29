import React,{useState, useEffect} from 'react'

const useForm = (defaultValue,onSubmit,validate) => {
    const [values,setValues] = useState(defaultValue)
    const [submit,setSubmit] = useState(false)
    const [errors,setErrors] = useState({})

    const onChange = e => {
        const {name,value} = e.target
        setValues({ ...values,[name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setSubmit(true)

        // values : {userid:'web7722@naver.com',password:'1234'}
        // {
        //     userid:'입력된 이메일이 유효하지 않습니다.',
        //     password:'8자 이상의 패스워드를 사용해야 합니다.'
        // }
        setErrors(validate(values)) // validate 
    }

    useEffect(()=>{
        const init = async () => {
            if(submit){
                if(Object.keys(errors).length === 0){
                    // 성공적일때 코드를 처리할 영역
                    onSubmit(values)
                }
                setSubmit(false)
            }
        }

        init()
    },[errors])
    

    // sideEffect useEffect 

    return {
        ...Object.keys(defaultValue).reduce((acc,v)=>{
            acc[v] = {
                value:values[v],
                onChange
            }
            return acc
        },{}),
        handleSubmit,
        errors,
        submit
    }
}

export default useForm