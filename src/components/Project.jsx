import React from 'react'

function Project({title='',description='',previewImage='',livePreview='',sourceCode=''}) {
  return (
    <div className="flex flex-col border p-3">
    <div className="">
      <img src={previewImage} alt="" />
    </div>
    <div>
      {/* project title */}
      <div className="font-semibold text-xl border-b-2 border-blue-500 my-4">{title}</div>
    </div>
    <div>
      {/* project description */}
      <div className="mb-5">
       {description}
      </div>
    </div>
    <div>
    <button onClick={()=>{window.location.href=livePreview}} className="w-full xl:w-fit bg-blue-500 text-white font-bold p-1 px-4 rounded "><i className="fa-solid fa-eye"></i> Live Preview</button>
      <button onClick={()=>{window.location.href=sourceCode}} className="w-full xl:w-fit bg-slate-700 text-white font-bold p-1 px-4 rounded xl:ml-3 xl:mt-0 mt-2"><i className="fa-brands fa-github"></i>Source Code</button>
      
    </div>
  </div>
  )
}

export default Project
