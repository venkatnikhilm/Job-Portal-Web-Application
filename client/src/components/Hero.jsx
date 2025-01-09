import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
        <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10000+ jobs to apply</h2>
            <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Your Next Big Career Move Starts Right Here - Explore The Best Job Opportunities And Take The First Step Forward</p>
            <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
                <div className='flex items-center'>
                    <img className='h-4 sm:h-5' src={assets.search_icon} alt='search icon' />
                    <input type="text" 
                    placeholder='Search for jobs'
                    className='max-sm:text-xs p-2 rounded outline-none w-full'/>
                </div>
                <div className='flex items-center'>
                    <img className='h-4 sm:h-5' src={assets.location_icon} alt='location icon' />
                    <input type="text" 
                    placeholder='Location'
                    className='max-sm:text-xs p-2 rounded outline-none w-full'/>
                </div>
                <button className='bg-blue-600 px-6 py-2 rounded text-white m-1'>Search</button>
            </div>
        </div>
        <div className='border border-gray-600 shadow-md  mx-2 mt-5 p-6 flex rounded-md'>
            <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
                <p className='font-medium'>Trusted by</p>
                <img className= "h-6" src={assets.walmart_logo}/>
                <img className= "h-6" src={assets.amazon_logo}/>
                <img className= "h-6" src={assets.microsoft_logo}/>
                <img className= "h-6" src={assets.adobe_logo}/>
                <img className= "h-6" src={assets.accenture_logo}/>
                <img className= "h-6" src={assets.samsung_logo} />
            </div>
        </div>
    </div>
  )

}

export default Hero
