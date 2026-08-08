import React from 'react';
import { FaStar } from 'react-icons/fa6';

const FiveStar = () => {
    return (
        <div className='flex gap-0.5 mb-4'>
            <FaStar className='w-4 h-4 text-amber-400' />
            <FaStar className='w-4 h-4 text-amber-400' />
            <FaStar className='w-4 h-4 text-amber-400' />
            <FaStar className='w-4 h-4 text-amber-400' />
            <FaStar className='w-4 h-4 text-amber-400' />
        </div>
    );
};

export default FiveStar;