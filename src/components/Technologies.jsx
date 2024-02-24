import React from 'react'
import htmlLogo from '../assets/html.png'
import cssLogo from '../assets/css.png'
import javascriptLogo from '../assets/javascript.png'
import reactLogo from '../assets/react.png'
import nodejsLogo from '../assets/node.png'
import expressLogo from '../assets/express.png'
import mongoDBLogo from '../assets/mongoDB.png'
import tailwindLogo from '../assets/tailwind.png'

function Technologies() {
  return (
    <div className='my-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8'>
      <div className='mx-4'>
        <img src={htmlLogo} alt="" />
      </div>
      <div className='mx-4'>
        <img src={cssLogo} alt="" />
      </div>
      <div className='mx-4'>
        <img src={javascriptLogo} alt="" />
      </div>
      <div className='mx-4'>
        <img src={reactLogo} alt="" />
      </div>
      <div className='mx-4'>
        <img src={tailwindLogo} alt="" />
      </div>
      <div className='mx-4'>
        <img src={nodejsLogo} alt="" />
      </div>
      <div className='mx-4'>
        <img src={expressLogo} alt="" />
      </div>
      <div className='mx-4'>
        <img src={mongoDBLogo} alt="" />
      </div>
    </div>
  )
}

export default Technologies
