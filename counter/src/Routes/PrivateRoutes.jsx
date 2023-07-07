import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = () => {
    const {isAuth}=useSelector((store)=>store.authReducer)
    if(isAuth){
        <Navigate to="/"/>
    }
    else{
        <Navigate to="/login"/>
    }
}
