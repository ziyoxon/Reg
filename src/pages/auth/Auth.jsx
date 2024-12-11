import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
   const token = useSelector(s=> s.token.value)
  return token ? <Outlet/> : <Navigate replace to={"/login"}/>
}

export default Auth