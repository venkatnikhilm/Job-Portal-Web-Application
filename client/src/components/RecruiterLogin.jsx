import React, { useState } from 'react'
import { assets } from '../assets/assets'

const RecruiterLogin = () => {
    const [state, setState] = useState('Login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const [image, setImage] = useState(false)
    const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if (state == "Sign Up" && !isTextDataSubmitted){
            setIsTextDataSubmitted(true)
        }
    }

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium '>Recruiter {state}</h1>
        <p className='text-sm'>Welcome! Please Sign in</p>
        {state === 'Sign Up' && isTextDataSubmitted
        ? <>
            <div className='flex items-center gap-4 my-10'>
                <label htmlFor='image'>
                    <img className='w-16 rounded-full' src={image? URL.createObjectURL(image): assets.upload_area}/>
                    <input onChange={e => setImage(e.target.files[0])} type='file' hidden id = 'image'/>
                </label>
                <p>Upload Company <br/> logo </p>
            </div>
        
        </>
        :<>
        {state != 'Login' && <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.person_icon}/>
            <input className='outline-none text-sm' type='text' placeholder='Company Name' required value={name} onChange={e => setName(e.target.value)}/>
        </div> }
        

        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.email_icon}/>
            <input className='outline-none text-sm' type='text' placeholder='Email ID' required value={email} onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.lock_icon}/>
            <input className='outline-none text-sm' type='password' placeholder='Password' required value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
    </>
        }
        {state === "Login" && <p className='text-sm text-blue-500 mt-4 cursor-pointer'>Forgot Password?</p>
        }
        
        <button type='submit' className='bg-blue-600 w-full text-white py-2 rounded-full mt-4'>
            {state === 'Login' ? 'login' : isTextDataSubmitted?  'create account' : 'next'}
        </button>
        {
            state === 'Login'
            ? <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState("Sign Up")}>Sign Up</span></p>
            :<p className='mt-5 text-center'>Already have an account <span className="text-blue-600 cursor-pointer" onClick = {() => setState("Login")}>Login</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default RecruiterLogin
