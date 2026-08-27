import React from 'react'
import { Outlet } from 'react-router'

const Authlayout = () => {
  console.log("Authlayout renders...")
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Authlayout