import React from 'react'
import {useNavigate} from "react-router-dom"
import logo from "../../public/logo.png"
import { useAuth0 } from '@auth0/auth0-react'
const Navbar = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <nav class="flex justify-between px-20 py-4 items-center">
        <img src = {logo} className="h-12 w-12 cursor-pointer" onClick={() => navigate('/')}/>

        {!isAuthenticated ? 
        (<div class="flex items-center">
            <ul class="flex items-center space-x-6">
            <li className="button font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => loginWithRedirect()}>Login</li>
            </ul>
        </div>):
        (<div class="flex items-center">
            <ul class="flex items-center space-x-6">
            <li className="button font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => navigate('./create-post')}>Create</li>
            <li className="button font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => logout()}>Logout</li>
            </ul>
        </div>)
        }
    </nav>
  )
}

export default Navbar