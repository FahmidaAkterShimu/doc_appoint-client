import Link from 'next/link';
import React from 'react';

const Appointment = () => {
    return (
        <div>
            <section className='bg-teal-600 py-14 text-center'>
                <div className='max-w-2xl mx-auto px-4'>
                    <h2 className='font-serif text-3xl text-white mb-4'>
                        Ready to Book Your Appointment?
                    </h2>
                    <p className='text-teal-100 mb-8'>
                        Join thousands of patients managing their health with DocAppoint.
                    </p>
                    <div className='flex justify-center gap-4 flex-wrap'>
                        <Link
                            href={'/register'}
                            className='bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors'
                        >
                            Create Free Account
                        </Link>

                        <Link
                            href={'/appointments'}
                            className='border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors'>
                            Browse Doctors
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appointment;