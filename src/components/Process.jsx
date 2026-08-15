import React from 'react';

const Process = () => {
    return (
        <div>
            <section className='bg-muted py-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                    <div className='text-center mb-12'>
                        <span className='text-primary text-sm font-semibold tracking-widest uppercase block mb-2'>
                            Process
                        </span>
                        <h2 className='font-serif text-3xl text-foreground'>
                            How DocAppoint Works
                        </h2>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
                        <div className='relative bg-background rounded-2xl p-7 border border-border shadow-sm'>
                            <span className='absolute top-4 right-4 text-5xl font-serif text-muted select-none'>
                                01
                            </span>
                            <div className='text-3xl mb-4'>🔍</div>
                            <p className='font-semibold text-foreground mb-2 text-lg'>
                                Browse Doctors
                            </p>
                            <p className='text-sm text-slate-500 leading-relaxed'>Explore our network of verified specialists across all major medical fields.</p>
                        </div>

                        <div className='relative bg-background rounded-2xl p-7 border border-border shadow-sm'>
                            <span className='absolute top-4 right-4 text-5xl font-serif text-muted select-none'>
                                02
                            </span>
                            <div className='text-3xl mb-4'>📅</div>
                            <p className='font-semibold text-foreground mb-2 text-lg'>
                                Book Appointment
                            </p>
                            <p className='text-sm text-slate-500 leading-relaxed'>Select your preferred time slot and fill in your details to confirm.</p>
                        </div>

                        <div className='relative bg-background rounded-2xl p-7 border border-border shadow-sm'>
                            <span className='absolute top-4 right-4 text-5xl font-serif text-muted select-none'>
                                03
                            </span>
                            <div className='text-3xl mb-4'>✅</div>
                            <p className='font-semibold text-foreground mb-2 text-lg'>
                                Manage Bookings
                            </p>
                            <p className='text-sm text-slate-500 leading-relaxed'>Track, update, or cancel appointments anytime from your dashboard.</p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Process;