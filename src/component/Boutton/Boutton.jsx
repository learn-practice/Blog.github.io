import React from 'react'

const Boutton = ({children}) => {
  return (
    <div>
       <button className="mt-14 pl-16 pr-16 pt-3 pb-3 border bg-white text-black border-gray-800 hover:text-red-700 transition">
            {children}
          </button>
    </div>
  )
}

export default Boutton
