import BookingModal from '@/components/BookingModal';
import { auth } from '@/lib/auth';
import { ChevronLeft } from 'lucide-react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { IoStar } from 'react-icons/io5';

const DetailsPage = async ({ params }) => {
    const { id } = await params;

    // For server component token will be given like this
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const doctor = await res.json()

    const { name, specialty, image, experience, availability, description, hospital, location, fee, reviews, rating } = doctor

    return (
        <div className='min-h-screen bg-muted py-10'>
            <div className='max-w-5xl mx-auto px-4 sm:px-6'>
                <Link
                    href={'/appointments'}
                    className='flex items-center gap-1 text-sm text-slate-500 hover:text-teal-600 mb-6 transition-colors'
                >
                    <ChevronLeft className='w-5 h-5' />
                    Back
                </Link>
                <div className='bg-background rounded-2xl border border-border shadow-sm overflow-hidden'>
                    <div className='relative bg-linear-to-br from-teal-600 to-teal-800 px-8 pt-10 pb-0'>
                        <div className='flex flex-col sm:flex-row gap-6 items-start sm:items-end'>
                            <div className='relative'>
                                <Image
                                    src={image}
                                    alt={name}
                                    width={144}
                                    height={144}
                                    className='w-36 h-36 rounded-2xl object-cover border-4 border-background shadow-lg'
                                />
                                <span className='absolute -bottom-2 -right-2 bg-teal-400 text-background text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1'>
                                    {rating} <IoStar />
                                </span>
                            </div>
                            <div className='pb-6'>
                                <span className='text-teal-200 text-sm font-semibold tracking-wider uppercase'>{specialty}</span>
                                <h1 className='font-serif text-3xl text-background mt-1 mb-1'>{name}</h1>
                                <p className='text-teal-100 text-sm'>{hospital} · {location}</p>
                                <p className='text-teal-200 text-sm mt-0.5'>
                                    {experience} of experience · {reviews} reviews
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='p-8 grid md:grid-cols-3 gap-8'>
                        {/* Left side */}
                        <div className='md:col-span-2 space-y-6'>
                            <div>
                                <h2 className='font-semibold text-foreground mb-2 text-base'>About</h2>
                                <p className='text-slate-500 text-sm leading-relaxed'>{description}</p>
                            </div>

                            <div>
                                <h2 className='font-semibold text-foreground mb-3 text-base'>Available Hours</h2>
                                <div className='flex flex-wrap gap-2'>
                                    {availability.map((time, index) => (
                                        <span
                                            key={index}
                                            className="text-sm bg-teal-50 dark:bg-teal-950 text-primary border border-teal-100 dark:border-teal-800 px-3 py-1.5 rounded-lg font-medium"
                                        >
                                            🕐 {time}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='bg-muted rounded-xl p-4'>
                                    <p className='text-xs text-slate-400 mb-1 font-medium'>Hospital</p>
                                    <p className='text-sm font-semibold text-foreground'>{hospital}</p>
                                </div>
                                <div className='bg-muted rounded-xl p-4'>
                                    <p className='text-xs text-slate-400 mb-1 font-medium'>Location</p>
                                    <p className='text-sm font-semibold text-foreground'>{location}</p>
                                </div>
                                <div className='bg-muted rounded-xl p-4'>
                                    <p className='text-xs text-slate-400 mb-1 font-medium'>Experience</p>
                                    <p className='text-sm font-semibold text-foreground'>{experience}</p>
                                </div>
                                <div className='bg-muted rounded-xl p-4'>
                                    <p className='text-xs text-slate-400 mb-1 font-medium'>Specialty</p>
                                    <p className='text-sm font-semibold text-foreground'>{specialty}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className='bg-linear-to-br from-gradient-from to-gradient-to border border-teal-100 dark:border-teal-800 rounded-2xl p-6 sticky top-24'>
                            <h3 className='font-semibold text-foreground mb-2 text-lg'>Consultation Fee</h3>
                            <h1 className='font-serif text-4xl text-primary mb-4'>৳{fee}</h1>

                            <ul className='text-sm text-slate-500 space-y-2 mb-6'>
                                <li className='flex items-center gap-2'>
                                    <GiCheckMark className='text-teal-500' />
                                    Verified doctor profile
                                </li>
                                <li className='flex items-center gap-2'>
                                    <GiCheckMark className='text-teal-500' />
                                    Instant confirmation
                                </li>
                                <li className='flex items-center gap-2'>
                                    <GiCheckMark className='text-teal-500' />
                                    Free cancellation
                                </li>
                            </ul>
                            <BookingModal doctor={doctor} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;