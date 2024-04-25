import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Getmore() {

    const [event, setEvent] = useState({});
    const {id} = useParams()


    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setEvent(response.data);
            })
            .catch((error) => {
                console.log("Error while fetching API", error);
            });
    }, [id]);

    return (
        <>
            <div className="bg-zinc-300 w-full h-[100%] px-11 py-11 grid grid-cols-3 gap-4">
                    <div  className="bg-red-300 w-[200px] rounded-lg border-4 border-solid border-[black] h-auto px-6 py-6 text-center">
                    <h1 className="text-[20px] font-bold text-zinc-700"><span className="text-black font-bold text-[27px]">Id :- </span>{ event.id}</h1>
                        <p className="text-[12px] font-semibold text-blue-950">
                            <span className="text-black text-[20px]">Body :-</span> {event.body}
                    </p>
                    <NavLink to='/previoussection'>
                            <button className="bg-purple-100 w-[140px] h-[40px] px-2 py-1 rounded-md text-[12px] font-bold text-blue-950 mt-[1rem]">click for previous blog</button>
                    </NavLink>
                    </div>
            </div>
        </>
    );
}
