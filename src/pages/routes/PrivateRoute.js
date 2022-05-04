import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ( {Component} ) => {
    const auth = useSelector((state)=>state.auth.data?.token)
    if(!auth){
      return <Navigate to="/admin"/>
    }else{
      return <Component />
    }
}