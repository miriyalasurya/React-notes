import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams();
  return (
    <div className='text-center text-white bg-slate-600 p-8 text-4xl'>User:{id}</div>
  )
}

export default User