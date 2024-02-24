import React, { useEffect } from 'react'
import Project from '../components/Project'

function Projects() {
  
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div className='my-20 '>
      <div>
        <h1 className='text-3xl text-center font-semibold'>My Projects</h1>
        <p className='my-2 text-center text-lg'>A collection of my work. From web development to design and everything in between.</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10'>
        <div>
            <Project/>
        </div>
        <div>
            <Project/>
        </div>
        <div>
            <Project/>
        </div>
        <div>
            <Project/>
        </div>
        <div>
            <Project/>
        </div>
        <div>
            <Project/>
        </div>
      </div>
    </div>
  )
}

export default Projects
