import React from 'react'

export default function Normaltask() {
  return (
      <>
          <div className='bg-zinc-400  h-[100%] px-5 py-5 flex-col justify-center gap-4'>
              <h1 className=' text-white font-semibold py-7 text-[30px]'>Trending Programing Language</h1>
            <div className='flex'>
                <div className='w-[300px] h-auto px-5 py-5 bg-red-800 text-center m-3 rounded-xl'>
                    <img src='https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png' className='h-[100px] w-[100px]' /><span className=' text-black font-semibold '>JavaScript is the only language that Node.js supports natively, but many compile-to-JS languages are available. As a result, Node.js applications can be written in CoffeeScript, Dart, TypeScript, ClojureScript and others..</span>
                </div>
                <div className=' rounded-xl w-[300px] h-auto px-5 py-5 bg-red-800 text-center m-3'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8P_EHOEMl_81gtmBDWGrJfE9gSOF92OKfYwx3gkE&s' className='h-[100px] w-[100px]' /><span className=' text-black font-semibold '>MongoDB handles the conversion of JSON and JSON-like documents, such as BSON, into Java objects effortlessly, making the reading and writing of data in MongoDB fast and incredibly efficient when analyzing real-time information across multiple development environments.</span>
                </div>
                <div className='w-[300px] rounded-xl h-auto px-5 py-5 bg-red-800 text-center m-3'>
                    <img src='https://static.javatpoint.com/springboot/images/spring-boot-tutorial.jpg' className='h-[100px] w-[100px]' /><span className=' text-black font-semibold '>Spring Boot is an open-source, microservice-based Java web framework offered by Spring, particularly useful for software engineers developing web apps and microservices..</span>
                </div>
            </div>
              
          </div>
      </>
  )
}
