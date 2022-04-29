
// {userid:'web7722naver.com',password:'1234'}
const validate = ({userid,password}) => {
    const errors = {}

    if(!userid){
        errors.userid = "이메일이 입력되지 않았습니다."
    } else if( !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(userid) ){
        // 
        errors.userid = "입력된 이메일이 유효하지 않습니다."
    }

    if(!password){
        errors.password = "비밀번호가 입력되지 않았습니다."
    } else if (password.length < 8) {
        errors.password = "8자 이상의 패스워드를 사용해야 합니다."
    }

    return errors 
}

export default validate