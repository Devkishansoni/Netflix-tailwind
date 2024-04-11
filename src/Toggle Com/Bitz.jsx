import React from 'react'

export default function Bitz() {
  return (
      <>
          <div className='bg-zinc-400 h-[100%] px-5 py-5 flex-col justify-center gap-4'>
              <h1 className=' text-black font-semibold py-7 text-[30px]'>Some Programing Language</h1>
            <div className='flex'>
                <div className='w-[300px] h-auto px-5 py-5 bg-red-300 text-center m-3 rounded-xl'>
                    <img src='https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/what-is-javascript-used-for.png' className='h-[100px] w-[100px]' /><span className=' text-black font-semibold '>JavaScript is a lightweight programming language commonly used by web developers to add dynamic interactions to web pages, applications, servers, and even games.</span>
                </div>
                <div className=' rounded-xl w-[300px] h-auto px-5 py-5 bg-red-300 text-center m-3'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s' className='h-[100px] w-[100px]' /><span className=' text-black font-semibold '>What is React JS used for? ReactJS's primary goal is to create User Interfaces (UI) which enhance the speed of programs. It makes use of virtual DOM (JavaScript object), which enhances the app's efficiency. Quicker than the standard DOM is the JavaScript virtual DOM.</span>
                </div>
                <div className='w-[300px] rounded-xl h-auto px-5 py-5 bg-red-300 text-center m-3'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' className='h-[100px] w-[100px]' /><span className=' text-black font-semibold '>Python is a general-purpose language, used to create a range of applications, including data science, software and web development, automation, and improving the ease of everyday tasks.</span>
                </div>
            </div>
              
          </div>
      </>
  )
}
