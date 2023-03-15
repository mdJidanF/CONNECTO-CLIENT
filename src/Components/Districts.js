import React from 'react';
import { Link } from 'react-router-dom';

const Districts = ({allDistricts}) => {
    return (
        <div className='mt-10'>
            <div className='flex justify-center gap-7 flex-wrap'>
            {
                allDistricts.map((district, i) => {
                    const {population, districtName} = district
                    return(
                        <div key={i} className='w-[16.3rem] h-[17.625rem] bg-[#383151] rounded-xl flex justify-center items-center'>
                            <h2 className='text-3xl text-white'>
                            <Link>{districtName}</Link>
                            </h2>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Districts;