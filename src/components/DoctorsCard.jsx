import Image from 'next/image';
import React from 'react';
import FiveStar from './FiveStar';
import { Button } from '@heroui/react';

const DoctorsCard = ({ doctor }) => {
    const { name, specialty, image, experience, description, hospital, location, fee, reviews, rating } = doctor

    return (
        <div className='bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col'>
            <div className='relative'>
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={200}
                    className='w-full h-52 object-cover'
                />
                <span className='absolute top-3 right-3 bg-primary text-background text-xs font-semibold px-2.5 py-1 rounded-full'>
                    {specialty}
                </span>
            </div>
            <div className='p-5 flex flex-col flex-1'>
                <div className='flex items-center gap-1 mb-1'>
                    <FiveStar />
                    <span className='text-xs text-slate-500 ml-1'>{rating} ({reviews})</span>
                </div>
                <h3 className='text-lg text-foreground mb-0.5'>
                    {name}
                </h3>
                <p className='text-xs text-slate-500 mb-1'>
                    {hospital} · {location}
                </p>

                <p className='text-xs text-slate-400 mb-3'>
                    {experience} experience
                </p>
                <p className='text-sm text-slate-600 mb-4 flex-1 line-clamp-2'>
                    {description}
                </p>
                <div className='flex items-center justify-between mt-auto pt-3 border-t border-muted'>
                    <span className='text-sm font-semibold text-primary'>
                        ৳{fee} / visit
                    </span>
                    <Button className='text-sm font-semibold bg-primary text-background px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors'>View Details</Button>
                </div>
            </div>
        </div>
    );
};

export default DoctorsCard;