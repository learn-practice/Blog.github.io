import React from 'react'

const Info = () => {
  return (
    <div className='mt-28 md:flex md:justify-center md:align-middle md:h-[130vh] md:w-screen '>
        <div className='md:flex md:gap-10 md:text-center w-screen'>
        
            <div className='mt-28 mb-5 ml-6 mr-6 float-end md:w-[600px] md:ml-40  md:h-screen md:align-middle'>
                <h1 className='text-lg md:text-5xl md:mt-52 text-slate-700'>
                ” I always get to where I’m going by walking away from where I have been.”
                </h1>
                <p className='mt-5 text-sm text-slate-500 font-light'> ― Winnie the Pooh, A.A. Milne</p>
            </div>
            <div className='md:relative '>
                <img src="/image/hand.jpg" alt="hand image" className='h-full w-full md:h-[110vh] md:sticky md:top-0'/>
            </div>
        </div>
        
    </div>
  )
}

export default Info
