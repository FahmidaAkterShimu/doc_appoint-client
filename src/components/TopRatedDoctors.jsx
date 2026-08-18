import Link from 'next/link';
import React from 'react';
import DoctorsCard from './DoctorsCard';

const TopRatedDoctors = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`);
    const doctors = await res.json();

    const topRatedDoctors = [...doctors]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <div>
            <section className='max-w-7xl mx-auto px-4 sm:px-6 py-16'>
                <div className='flex items-end justify-between mb-10'>
                    <div>
                        <span className='text-primary text-sm font-semibold tracking-widest uppercase block mb-2'>
                            Top Rated
                        </span>
                        <h2 className='font-serif text-3xl text-foreground'>
                            Our Best Doctors
                        </h2>
                    </div>
                    <Link
                        href={'/appointments'}
                        className='text-sm font-semibold text-primary hover:text-teal-800 transition-colors'
                    >
                        See All →
                    </Link>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {topRatedDoctors.map(doctor => (
                        <DoctorsCard
                            key={doctor._id}
                            doctor={doctor}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TopRatedDoctors;