import {useState,useEffect,useRef} from 'react'

const Interval = () => {
    const inputEl = useRef()
    
    useEffect(()=>{

    },[])

    return (
        <div>
            current time
        </div>
    )
}

const Timeout = () => {
    const [btn,setBtn] = useState(false)

    return (
        <>
            <button onClick={()=>{ setBtn((v)=>!v) }}>
                Click me
            </button>
            {btn && <Interval />}
        </>
    )
}

export default Timeout