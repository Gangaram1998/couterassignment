import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../pages/firebase'
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes'
export const SignUp=(user)=>async(dispatch)=>{
    dispatch({type:SIGNUP_REQUEST})
    try{
        const res=await createUserWithEmailAndPassword(auth,user.email,user.password)
        dispatch({type:SIGNUP_SUCCESS})
        const signup_user=res.user
        return signup_user
    }catch(err){
        dispatch({type:SIGNUP_FAILURE})
        console.log(err)
    }
    
}



export const LogIn=(user)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const res=await signInWithEmailAndPassword(auth,user.email,user.password)
        dispatch({type:LOGIN_SUCCESS})
        const login_user=res.user
        return login_user
    }catch(err){
        dispatch({type:LOGIN_FAILURE})
        console.log(err)
    }
}