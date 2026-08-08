'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import ThemeToggler from '../lib/ThemeToggler';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';

const Navbar = () => {
    // route
    const pathName = usePathname();
    const isActive = (path) => pathName === path;
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'All Appointments', href: '/all-appointments' },
        { name: 'Dashboard', href: '/dashboard' }
    ]

    // User Session
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user

    // Handle Logout
    const router = useRouter();

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success('Logged out successfully 👋');
                    router.push('/login');
                    router.refresh();
                },
            },
        });
    };

    // For mobile Hamburger
    const [isOpen, setIsOpen] = useState(false);


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

                        {/* ── DESKTOP: Logged In ── */}
                        {!isPending && user && (
                            <div className='flex items-center gap-3'>

                                <div>
                                    <Link href="/dashboard" className='flex items-center justify-center'>
                                        <Avatar>
                                            <Avatar.Image referrerPolicy='no-referrer' alt={user?.name} src={user?.image} />
                                            <Avatar.Fallback>
                                                {user.name.charAt(1)}
                                            </Avatar.Fallback>
                                        </Avatar>


                                    </Link>
                                </div>

                                {/* Logout */}
                                <button
                                    onClick={handleLogout}
                                    className="text-sm font-semibold bg-primary text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
                                >
                                    Logout
                                </button>
                            </div>
                        )}

                        {!isPending && !user && (
                            <div className='flex items-center gap-3'>
                                <Link
                                    href="/login"
                                    className="text-sm font-medium text-foreground hover:text-teal-600 transition-colors"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="text-sm font-semibold bg-primary text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* MOBILE RIGHT SIDE */}
                    <div className="md:hidden flex items-center gap-2">

                        {!isPending && user && (
                            <Link href="/profile">
                                <Avatar>
                                    <Avatar.Image referrerPolicy='no-referrer' alt={user?.name} src={user?.image} />
                                    <Avatar.Fallback>
                                        {user.name.charAt(1)}
                                    </Avatar.Fallback>
                                </Avatar>
                            </Link>
                        )}

                        {/* MOBILE HAMBURGER Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-gray-100 focus:outline-none transition-colors"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                    </div>
                </div>


                {/* MOBILE MENU-DROPDOWN */}
                <div
                    className={`absolute top-15 left-0 w-full bg-background shadow-md md:hidden transition-all duration-200 ease-in-out rounded-lg ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}
                    id="mobile-menu"
                >
                    <div className="border-t border-border px-4 py-4 flex flex-col gap-4">
                        <div className="flex justify-center py-2">
                            <ThemeToggler />
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-sm font-medium transition-colors ${isActive(link.href) || (link.name === 'Home' && pathname === '/')
                                    ? 'text-primary'
                                    : 'text-foreground hover:text-teal-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}


                        {/* MOBILE LOGIN/LOGOUT Button */}
                        {!user ? (
                            <div className='flex items-center gap-3'>
                                <Link
                                    href="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-medium text-foreground hover:text-teal-600 border-2 border-primary rounded-lg py-3 px-5"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-semibold bg-primary text-background px-4.5 py-3.5 rounded-lg hover:bg-teal-600 transition-colors"
                                >
                                    Register
                                </Link>
                            </div>
                        ) : (
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    handleLogout();
                                }}
                                className="w-full bg-primary hover:bg-[#244B29] text-primary-foreground text-center py-3.5 rounded-md text-base font-semibold transition-colors shadow-sm cursor-pointer"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;