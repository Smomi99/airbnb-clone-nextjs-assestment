import React from 'react'
import { 
    MenuIcon,
    UserCircleIcon,
    GlobeAltIcon,
  } from "@heroicons/react/solid" 
export const Navbar = () => {
  return (
    <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointere" />
          <div className="flex items-center 
          space-x-2 border-2 p-2 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
  )
}
