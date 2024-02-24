import React from 'react'

function Project() {
  return (
    <div className="flex flex-col border p-3">
    <div className="">
      <img src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?t=st=1708770483~exp=1708774083~hmac=22777c373115dcf85730b1c8ee136f0afee2c6226446424ef510aa09b8557c6f&w=1060" alt="" />
    </div>
    <div>
      {/* project title */}
      <div className="font-semibold text-xl border-b-2 border-blue-500 my-4">Lorem ipsum dolor sit amet consectetur?</div>
    </div>
    <div>
      {/* project description */}
      <div className="mb-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ipsa quas minus itaque nihil architecto, rerum laboriosam, perferendis dolorem fuga soluta obcaecati reiciendis quaerat sapiente consequuntur amet cumque non. Consectetur?
      </div>
    </div>
    <div>
    <button className="w-full xl:w-fit bg-blue-500 text-white font-bold p-1 px-4 rounded "><i class="fa-solid fa-eye"></i> Live Preview</button>
      <button className="w-full xl:w-fit bg-slate-700 text-white font-bold p-1 px-4 rounded xl:ml-3 xl:mt-0 mt-2"><i class="fa-brands fa-github"></i> Source Code</button>
      
    </div>
  </div>
  )
}

export default Project
