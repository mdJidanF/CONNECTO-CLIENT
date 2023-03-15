import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Devision = () => {
    const [divisions, setDivision] = useState([])

    useEffect(() => {
        fetch(`division.json`)
            .then(res => res.json())
            .then(data => setDivision(data))
    }, [])


    return (
        <div className='flex ml-9 flex-wrap gap-y-2 mt-10'>
            {
                divisions?.map((division, i) => {
                    return (
                        <NavLink
                            to={`/division/${division.name}`}
                            key={i}
                            className={({isActive}) => `${isActive ? "border-black text-black bg-white" : "border-white text-white bg-[#383151]"} w-28 h-8 rounded-full mx-4 font-semibold transition-colors duration-500 cursor-pointer hover:bg-white hover:text-black hover:border-black  border  flex items-center justify-center`}
                            >
                            <p className=''>{division?.name}</p>
                        </NavLink>
                    )
                })
            }
        </div>
    );
};

export default Devision;