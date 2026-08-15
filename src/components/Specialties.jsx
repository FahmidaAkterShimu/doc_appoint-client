import Link from 'next/link';
import React from 'react';

const Specialties = () => {
    return (
        <div>
            <section className='bg-teal-600 py-4'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap gap-4 items-center justify-center'>
                    <Link
                        href={'/appointments'}
                        className='text-xs font-semibold text-background/80 hover:text-background border border-border/40 px-4 py-1.5 rounded-full hover:border-white transition-colors'>
                        Cardiologist
                    </Link>
                    <Link
                        href={'/appointments'}
                        className='text-xs font-semibold text-background/80 hover:text-background border border-border/40 px-4 py-1.5 rounded-full hover:border-white transition-colors'>
                        Neurologist
                    </Link>
                    <Link
                        href={'/appointments'}
                        className='text-xs font-semibold text-background/80 hover:text-background border border-border/40 px-4 py-1.5 rounded-full hover:border-white transition-colors'>
                        Dermatologist
                    </Link>
                    <Link
                        href={'/appointments'}
                        className='text-xs font-semibold text-background/80 hover:text-background border border-border/40 px-4 py-1.5 rounded-full hover:border-white transition-colors'>
                        Orthopedic
                    </Link>
                    <Link
                        href={'/appointments'}
                        className='text-xs font-semibold text-background/80 hover:text-background border border-border/40 px-4 py-1.5 rounded-full hover:border-white transition-colors'>
                        Pediatrician
                    </Link>
                    <Link
                        href={'/appointments'}
                        className='text-xs font-semibold text-background/80 hover:text-background border border-border/40 px-4 py-1.5 rounded-full hover:border-white transition-colors'>
                        Gastroenterologist
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Specialties;