import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PublicRoute = ( {Component} ) => {
    const auth = useSelector((state)=>state.auth.data?.token)
    if(auth){
      return <Navigate to="/dashboard"/>
    }else{
      return <Component />
    }
}