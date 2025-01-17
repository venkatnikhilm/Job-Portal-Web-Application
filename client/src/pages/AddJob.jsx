import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import { JobCategories, JobLocations } from '../assets/assets';

const AddJob = () => {

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('Bangalore');
    const [category, setCategory] = useState('Programming');
    const [level, setLevel] = useState('Beginner Level');
    const [salary, setSalary] = useState(0);

    const editorRef = useRef(null);
    const quillRef = useRef(null);

    useEffect(() => {
        if (!quillRef.current && editorRef.current){
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow',
            })
        }

    },[])


  return (
    <form className='container p-4 flex flex-col gap-3 w-full items-start'>

        <div className='w-full'>
            <p className='mb-2'>Job Title</p>
            <input type="text" placeholder='Type here' onChange={e => setTitle(e.target.value)} value={title} 
            className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'
            required/>
        </div>

        <div className='w-full max-w-lg'>
            <p className='my-2'>Job Description</p>
            <div ref={editorRef}>

            </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
            <div>
                <p className='mb-2'>Job Category</p>
                <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setCategory(e.target.value)}>
                    {JobCategories.map((category, index) => (
                        <option value={category} key={index}>{category}</option>
                    ))}
                </select>
            </div>
            <div>
                <p className='mb-2'>Job Location</p>
                <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setCategory(e.target.value)}>
                    {JobLocations.map((location, index) => (
                        <option value={location} key={index}>{location}</option>
                    ))}
                </select>
            </div>
            <div>
                <p className='mb-2'>Job Level</p>
                <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setCategory(e.target.value)}>
                    <option value="Beginner Level">Beginner Level</option>
                    <option value="Intermediate Level">Intermediate Level</option>
                    <option value="Senior Level">Senior Level</option>
                </select>
            </div>
        </div>
        <div>
            <p className='mb-2'>Salary</p>
            <input min={0} className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]' type="number" placeholder='Type here' onChange={e => setSalary(e.target.value)} value={salary} required/>
        </div>
        <button className='w-28 py-3 mt-4 bg-blue-600 text-blue-100 rounded' type='submit'>Add Job</button>
    </form>
  )
}

export default AddJob
