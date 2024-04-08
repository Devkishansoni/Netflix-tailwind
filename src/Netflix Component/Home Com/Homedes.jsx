import React from 'react'
import Homenav from './Homenav'

export default function Homedes() {
  return (
      <>
          <div className='bg-[url("https://i.redd.it/zjgs096khv591.jpg")] h-[100vh] w-full bg-no-repeat bg-cover bg-center'>
              <Homenav />
              <div className='flex justify-center items-center mt-[9rem]'>
                  <div>
                      <h1 className='text-white font-bold text-5xl'>Unlimited movies, TV shows and more</h1>
                      <p className='text-gray-100 text-center text-2xl p-2'>Watch anywhere. Cancel anytime.</p>
                      <h4 className='text-gray-50 text-2xl text-center pb-3'>Ready to watch? Enter your email to create or restart your membership.</h4>
                      <div className='text-center'>
                          <input placeholder='Enter E-mail address' type='text' className='w-[440px] h-[40px] font-semibold px-2 rounded-md border-2 solid [white] bg-transparent text-gray-50 py-3'/>
                          <button className='bg-[rgb(229,9,20)] text-white h-[6vh] w-[12vw] rounded-md mt-[1rem] mx-4 text-2xl font-extrabold'>Get Started <i class="fa-solid fa-chevron-right"></i></button>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
