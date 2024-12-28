import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout}  from '../../store/authSlice'

function LogoutBtn() {

  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout()
    .then(() => {
      dispatch(logout())
  }).then(() => {
    window.location.reload(false);
    window.location.href = '/';
  })
  }

  return (
    <button className='inline-block px-4 py-2 mx-3 duration-200 hover:cursor-pointer hover:bg-blue-100 rounded-full hover:text-customdarkblue text-white sm:text-inherit' onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutBtn
