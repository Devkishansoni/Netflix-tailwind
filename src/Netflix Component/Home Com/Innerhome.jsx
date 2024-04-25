import React from 'react';
import { Link } from 'react-router-dom';

function Innerhome() {
  return (
    <div className=''>
                <div className=''>
                    <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVr3AdhNeyrkV5sEf77Or41uiW1k_PNS0dxk2LGzXXjDRAHhRYfBJqm0RlSKiOlnV-A-9fC_u1g3euupMaFmKo3uoHedUlwSwTKJ.jpg?r=850" alt="" className='h-[100vh] w-full' />
                    <div className='absolute  top-0 left-0 right-0 ml-[3rem] mt-5' >
                        <ul className='flex gap-2  text-white text-xl mt-7' >
                            <img src="https://seeklogo.com/images/N/netflix-logo-0BC9BFB255-seeklogo.com.png" alt="" className='h-[5vh] w-[120px] mr-9 ml-5' />
                            <li>Home</li>
                            <li>Tv shows</li>
                            <li>Movie</li>
                            <li>News & popular</li>
                            <li>My List</li>
                            <li>Browse by Languages</li>
                            <div >
                                <ul className='ml-[15rem]   flex gap-1.5 items-center'>
                                <li><i className=" fa-sharp  fa-solid fa-magnifying-glass"></i></li>
                                <li>Children</li>
                                <li><i className="fa-solid fa-bell"></i></li>
                                <li><img className='h-[5vh]' src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp' alt="Netflix Avatar" /></li>
                                <li><i className="fa-solid fa-caret-down"></i></li>
                                </ul>
                            </div>
                        </ul>

                    </div>

                    <div className='absolute top-1/2 text-slate-50'>
                        <img className='pl-[7rem] mt-[-10rem] h-[25.5vh]' src='https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRP0qVvk0eOlrejKsX2N38Ck4Fly_NIoCnn0rrVetBpPksJFkVc2jhRvvbkyPZeEDoAc7T7ZwEaSTCdwq88bBJ_QoUrKyRaeQT-RWHuJhIkZhW9ElzkPDvw5iVSaRfj_h6iQ7nxOfhDy0unpJ3WoiYV8SO7mF3ee-VlDji7QK-eh34OyLpfHsA.webp?r=c6a' alt="Netflix Show" />
                        <p className='pl-[6rem] text-lg pt-2'>Two hometown sweethearts reunite after a scandal forces one of <br />them home in this "intimate, beautiful" drama hailed as a "comfort <br />watch" by NME.</p>
                    </div>
                    <div className='absolute top-[33rem] text-slate-50'>
                        <button className='text-xl h-10 w-[15vh] text-black bg-slate-50 text-justify px-2 py-0 ml-[6rem] rounded mt-[-1rem] hover:bg-slate-700'><i className="pr-2 fa-solid fa-play"></i>Play</button>
                        <button className='text-xl h-10 w-[22vh] text-slate-50 bg-stone-500 text-justify ml-[0.5rem] rounded pl-4 mt-[-1rem] hover:bg-neutral-800'><i className="pr-2 fa-regular fa-circle-info"></i>More info</button>

                    </div>
                </div>
            </div>
  );
}

export default Innerhome;