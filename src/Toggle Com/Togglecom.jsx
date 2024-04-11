import React,{useState} from 'react'
import Bitz from './Bitz';
import Normaltask from './Normaltask';

export default function Togglecom() {

    const [bitz, setBitz] = useState(true);
    const [normal, setNormal] = useState(false);
    
    const showbitz = () => {
        setBitz(true)
        setNormal(false)
    }
    const showNormal = () => {
        setBitz(false)
        setNormal(true)
    }


  return (
      <div className='w-full h-[100vh] bg-zinc-400 px-11 py-11'>
          <h1 className='text-black text-[23px] font-semibold'>Software not only makes your computer hardware perform important tasks, but can also help your business work more efficiently.</h1>
          <button className='bg-red-400 px-2 py-2 text-black text-[14px] font-bold mr-3 mt-8 rounded-lg' onClick={()=>showbitz()}>Bitz Click</button>
          <button className='bg-red-400 px-2 py-2 text-black text-[14px] font-bold mt-8 rounded-lg' onClick={() => showNormal()}>Normal Task Click</button>
          <div>
              {bitz && <Bitz />}
              {normal && <Normaltask/>}
          </div>
          
    </div>
  )
}
