import React,{useEffect} from 'react'
// import Netsign from './Netsign'
import { NavLink } from 'react-router-dom'

export default function Homenav() {

    const handleLogin = () => {
        const CLIENT_ID = "410554796046-r94qhusc6e496duufqochg4tph4k662m.apps.googleusercontent.com";
        const REDIRECT_URL = "http://localhost:3000/inbox";
        const SCOPE = "https://www.googleapis.com/auth/gmail.readonly";
        const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
        window.location.href = AUTH_URL;
    }

    const getAccessToken = () => {
        const url = window.location.href;
        const token = url.match(/access_token=([^&]+)/);
        localStorage.setItem("Token", token && token[1]);
    }

    useEffect(() => {
        getAccessToken();
    }, []);

    

  return (
      <>
          <div className='w-full h-[80px] bg-transparent flex justify-between items-center px-[90px] py-3'>
              <img src='https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png ' className='h-[44px] pl-9 w-[14rem] font-bold ' />
              <div className='flex gap-4'>
                  <select name="" id="" className='bg-transparent text-white w-24 rounded-md border-[white] h-8xl font-bold'>
                      <option value="" className='bg-transparent'>English</option>
                      <option value="" className='bg-transparent'>Hindi</option>
                  </select>
                  {/* <NavLink to={"Movies"}> */}
                    <button onClick={handleLogin} className='bg-red-600 rounded-md text-1xl w-[80px] text-white h-7'>Sing In</button>
                  {/* </NavLink> */}
              </div>
          </div>
      </>
  )
}
