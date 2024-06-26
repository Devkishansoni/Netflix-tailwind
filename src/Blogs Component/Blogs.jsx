import React, { useState, useEffect } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

export default function Blogs() {

    const [data, setData] = useState([]);
    const [more, setMore] = useState(4);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((Response) => {
                setData(Response.data)
            })
            .catch((error) => {
            console.log("Error while fetching api",error)
        })
    })

    const getmore = () => {
        setMore(more + 1)
    }

    return (
        <>
            <div className="bg-zinc-300 w-full h-[100%] px-11 py-11 text-center grid grid-cols-4 gap-3">

                {data.slice(0,more).map((value, index) =>
                    
                    <div key={index} className="bg-purple-200 w-[200px] rounded-lg border-4 border-solid border-[black] h-auto px-6 py-6 text-center">
                        <h1 className="text-[20px] font-bold text-zinc-700"><span className="text-black text-[20px]">Id :- </span>{value.id}</h1>
                        <p className="text-[12px] font-semibold text-blue-950"><span className="text-black text-[20px]">Title :-</span> {value.title}</p>
                        <NavLink to={`/movie/${value.id}`}>
                            <button className="bg-blue-100 w-[120px] h-[40px] px-4 py-2 rounded-md text-[12px] font-semibold text-blue-600 mt-[1rem]">More blogs</button>
                        </NavLink>
                    </div>

                )}
                <button onClick={()=>getmore()} className="bg-red-500 w-[170px] h-[40px] px-4 py-2 rounded-md text-[14px] font-semibold text-blue-950 mt-[3rem]">Get More blogs</button>
            </div>
        </>
  )
}
