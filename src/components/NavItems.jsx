import React from 'react'

function NavItems() {
  return (
    <div className="flex md:flex-row flex-col text-center md:bg-white bg-slate-300">
            <div className="mx-0 md:mx-5 text-2xl py-3 md:py-0 hover:bg-slate-400">Home</div>
            <div className="mx-0 md:mx-5 text-2xl py-3 md:py-0 hover:bg-slate-400">Projects</div>
            <div className="mx-0 md:mx-5 text-2xl py-3 md:py-0 hover:bg-slate-400">Resume</div>
            <div className="mx-0 md:mx-5 text-2xl py-3 md:py-0 hover:bg-slate-400">About</div>
            <div className="mx-0 md:mx-5 text-2xl py-3 md:py-0 hover:bg-slate-400">Contact</div>
          </div>
  )
}

export default NavItems
