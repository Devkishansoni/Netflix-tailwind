import React from 'react'

function Login() {
    return (
        <>

            <div className=' bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg")] 
               bg-no-repeat h-[100vh] bg-center w-full bg-cover  flex items-center justify-center'>
                <div className='h-[90vh] w-[35rem] bg-black opacity-65   text-center'>
                    <h1 className='text-center text-4xl font-bold text-white'>Sign In</h1>
                    <input className='bg-transparent text-white bg-[#292827] rounded font-bond text-center border h-[8vh] w-[25vw] border-white  mt-[1rem]' type="text" placeholder='Email or phone Number' />
                    <input className='bg-transparent text-white bg-[#292827] rounded font-bond text-center border h-[8vh] w-[25vw] border-white  mt-[1rem]' type="text" placeholder='Passward' />
                    <button className='bg-transparent text-white bg-orange-600 rounded font-bond border h-[8vh] w-[25vw]   mt-[1rem]'  >Sign In </button>
                    <p className='h-[5vh] w-[25vw] text-white text-2xl ml-[6rem] font-bold  mt-5'>OR</p>
                    <button className='bg-transparent text-white bg-zinc-500 rounded font-bond  h-[8vh] w-[25vw]   mt-[1rem]'  >Use a sign-in code </button>
                    <p className='h-[8vh] w-[25vw] text-white text-2xl ml-[6rem] font-bold  mt-5'>Forgot Passward?</p>
                </div>



            </div>

        </>
    )
}

export default Login