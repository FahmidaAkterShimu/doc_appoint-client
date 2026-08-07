'use client'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggler from '../lib/ThemeToggler';

const Navbar = () => {
    // route
    const pathName = usePathname();
    const isActive = (path) => pathName === path;
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'All Appointments', href: '/all-appointments' },
        { name: 'Dashboard', href: '/dashboard' }
    ]

    return (
        <div>
            <nav className='sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16'>
                    <Link href={"/"} className='flex items-center gap-2'>
                        <Image
                            src={"/favicon.png"}
                            alt='logo'
                            width={30}
                            height={30}
                        />
                        <h3 className="text-xl font-normal text-foreground tracking-tight">Doc
                            <span className="text-primary">Appoint</span>
                        </h3>
                    </Link>

                    {/* for large device */}
                    <div className='hidden md:flex items-center gap-8'>
                        {
                            navLinks.map((link) =>
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${isActive(link.href) || (link.name === 'Home' && pathName === '/')
                                        ? 'text-primary font-semibold'
                                        : 'text-foreground hover:text-teal-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )
                        }
                    </div>


                    {/* Desktop Right side */}
                    <div className='hidden md:flex items-center gap-3'>
                        <ThemeToggler />
                        <Link
                            href="/login"
                            className="text-sm font-medium text-foreground hover:text-teal-600 transition-colors"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            className="text-sm font-semibold bg-primary text-background px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
                        >
                            Register
                        </Link>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;