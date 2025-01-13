import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between py-3 mt-20'>
        <img src={assets.logo} alt='logo' className=''/>
        <p className='flex-1 border-1 border-gray-400 text-gray-500 pl-4 text-sm:hidden'>Just for fun. This is a practice project</p>
        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt='facebook' className='h-6'/>
            <img src={assets.twitter_icon} alt='twitter' className='h-6'/>
            <img src={assets.instagram_icon} alt='linkedin' className='h-6'/>
        </div>
      
    </div>
  )
}

export default Footer
