import { useCallback, useEffect, useMemo, useState } from "react";

const Callback = () => {
    const [hi,setHi] = useState(0)
    const [bye,setBye] = useState(0)


    const hiClick = useCallback(()=>{
        console.log('hello')
        setHi(hi+1) // 상태를 변경 리랜더링  
    },[])

    const byeClick = useCallback(() => {
        console.log('world')
        setBye(bye+1) 
    },[])

    useEffect(()=>{
        console.log('asdf')
    })
    
    return (
        <>
            {hi}
            {bye}
            <button onClick={hiClick}>하이</button>
            <button onClick={byeClick}>바이</button>
        </>
    )
}

export default Callback