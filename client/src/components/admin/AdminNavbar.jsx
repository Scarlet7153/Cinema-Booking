import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30'>
      <Link to='/'>
      <img src={assets.logo} alt="logo" className='w-32 sm:w-40 h-auto object-contain'/>
      </Link>
    </div>
  )
}

export default AdminNavbar