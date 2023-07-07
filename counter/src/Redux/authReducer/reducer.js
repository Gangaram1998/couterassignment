import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes"
const initialState={
    isAuth:false,
    isError:false,
    isLoading:false,
}

export const reducer=(state=initialState,{type})=>{
    switch(type){
        case SIGNUP_REQUEST:
            return {...state,isLoading:true}
        case SIGNUP_SUCCESS:
            return {...state,isLoading:false}
        case SIGNUP_FAILURE:
            return {...state,isLoading:false,isError:true}
        case LOGIN_REQUEST:
            return {...state,isLoading:true}
        case LOGIN_SUCCESS:
            return {...state,isLoading:false}
        case LOGIN_FAILURE:
            return {...state,isLoading:false,isError:false}
        default:
            return state
    }
}