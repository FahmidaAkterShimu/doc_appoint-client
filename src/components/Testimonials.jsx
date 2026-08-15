import React from 'react';
import FiveStar from './FiveStar';
import Image from 'next/image';

const Testimonials = () => {
    return (
        <div>
            <section className='max-w-7xl mx-auto px-4 sm:px-6 py-16'>
                <div className='text-center mb-12'>
                    <span className='text-primary text-sm font-semibold tracking-widest uppercase block mb-2'>Testimonials</span>
                    <h2 className='font-serif text-3xl text-foreground'>
                        What Our Patients Say
                    </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='bg-background rounded-2xl p-6 border border-border shadow-sm'>
                        <FiveStar />
                        <p className='text-slate-600 text-sm leading-relaxed mb-5'>
                            DocAppoint made finding the right cardiologist incredibly easy. Booked within minutes!
                        </p>

                        <div className='flex items-center gap-3'>
                            <Image
                                src={'/user1.avif'}
                                alt='user1'
                                width={36}
                                height={36}
                                className='w-9 h-9 rounded-full object-cover'
                            />
                            <span className='text-sm font-semibold text-foreground'>Rahim Uddin</span>
                        </div>
                    </div>

                    <div className='bg-background rounded-2xl p-6 border border-border shadow-sm'>
                        <FiveStar />
                        <p className='text-slate-600 text-sm leading-relaxed mb-5'>
                            The booking process was seamless and the doctor was exactly as described. Highly recommended.
                        </p>

                        <div className='flex items-center gap-3'>
                            <Image
                                src={'/user2.avif'}
                                alt='user1'
                                width={36}
                                height={36}
                                className='w-9 h-9 rounded-full object-cover'
                            />
                            <span className='text-sm font-semibold text-foreground'>Fatema Khatun</span>
                        </div>
                    </div>

                    <div className='bg-background rounded-2xl p-6 border border-border shadow-sm'>
                        <FiveStar />
                        <p className='text-slate-600 text-sm leading-relaxed mb-5'>
                            Managing my family&apos;s appointments in one place is a game changer. Excellent platform.
                        </p>

                        <div className='flex items-center gap-3'>
                            <Image
                                src={'/user3.jpg'}
                                alt='user1'
                                width={36}
                                height={36}
                                className='w-9 h-9 rounded-full object-cover'
                            />
                            <span className='text-sm font-semibold text-foregrounded'>Shariful Islam</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;