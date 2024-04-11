import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Getmore() {

    const [id] = useState();
    const [event, setEvent] = useState({});

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((Response) => {
                setEvent(Response.event)
                console.log("Error while fetching api",Response)
            })
            .catch((error) => {
            console.log("Error while fetching api",error)
        })
    },[id])

  
    return (
        <>
            <div className="bg-zinc-300 w-full h-[100%] px-11 py-11 grid grid-cols-3 gap-4">

                {event.map((value, index) =>
                    
                    <div key={index} className="bg-red-300 w-[200px] rounded-lg border-4 border-solid border-[black] h-auto px-6 py-6 text-center">
                        {/* <h1 className="text-[20px] font-bold text-zinc-700"><span className="text-black text-[20px]">Id :- </span>{value.id}</h1> */}
                        <p className="text-[12px] font-semibold text-blue-950"><span className="text-black text-[20px]">Body :-</span> {value.body}</p>
                        {/* <button className="bg-blue-100 w-[120px] h-[40px] px-4 py-2 rounded-md text-[12px] font-semibold text-blue-600 mt-[1rem]">More blogs</button> */}
                    </div>

                )}
            </div>
        </>
  )
}
