import React, { useEffect } from 'react'
import Project from '../components/Project'

function Projects() {
  
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div className='my-20 mb-80'>
      <div>
        <h1 className='text-3xl text-center font-semibold'>My Projects</h1>
        <p className='my-2 text-center text-lg'>A collection of my work. From web development to design and everything in between.</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10'>
      <div className="">
            <Project title="Bucketbuy" description="Designed and implemented a cutting-edge electronic e-commerce site using MERN stack. This project highlights my skills in creating seamless, modern web experiences for users to explore and purchase the latest tech gadgets." livePreview="https://bucketbuy.store" sourceCode="https://github.com/WebDevAdi?tab=repositories"/>
          </div>
          <div className="">
            <Project title="Bucketbuy Seller" description="Seller-BucketBuy is a platform for listing, updating, and managing electronic products destined for sale on bucketbuy.store. Seamlessly integrated with seller accounts, it simplifies product management for enhanced efficiency and convenience." livePreview="https://seller-bucketbuy.onrender.com" sourceCode="https://github.com/WebDevAdi?tab=repositories" />
          </div>
          <div className="">
            <Project title="Deepnapsoftech Clone" description="Presenting a React clone of deepnapsoftech, a leading web design and development company. This project showcases my React skills while replicating the professional aesthetic and functionality of the original site." livePreview="https://deepnapsoftechclone.onrender.com/" sourceCode="https://github.com/WebDevAdi/deepnapsoftechclone"/>
          </div>

      </div>
    </div>
  )
}

export default Projects
