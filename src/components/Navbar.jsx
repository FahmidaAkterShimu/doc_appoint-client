"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggler from "../lib/ThemeToggler";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { toast } from "react-toastify";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();

    const isActive = (path) => pathName === path;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "All Appointments", href: "/appointments" },
        { name: "Dashboard", href: "/dashboard" },
    ];

    // Better Auth session
    const { data: session, isPending } = authClient.useSession();

    // Latest profile data
    const [profile, setProfile] = useState(null);
    const [profileLoading, setProfileLoading] = useState(false);

    const userId = session?.user?.id;

    useEffect(() => {
        const fetchLatestProfile = async () => {
            const { data: tokenData } = await authClient.token()

            if (!userId) {
                setProfile(null);
                return;
            }

            try {
                setProfileLoading(true);

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/user/${userId}`,
                    {
                        headers: {
                            authorization: `Bearer ${tokenData?.token}`
                        }
                    }
                );

                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.message || "Failed to fetch profile");
                }

                setProfile(data);
            } catch (error) {
                console.error("Navbar profile error:", error);
            } finally {
                setProfileLoading(false);
            }
        };

        fetchLatestProfile();
    }, [userId]);


    // Latest user
    const user = profile || session?.user;

    // Logout
    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logged out successfully 👋");
                    setProfile(null);
                    router.push("/login");
                    router.refresh();
                },
            },
        });
    };

    // Mobile hamburger
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/favicon.png"
                            alt="logo"
                            width={30}
                            height={30}
                        />

                        <h3 className="text-xl font-normal text-foreground tracking-tight">
                            Doc
                            <span className="text-primary">Appoint</span>
                        </h3>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${isActive(link.href)
                                    ? "text-primary font-semibold"
                                    : "text-foreground hover:text-teal-600"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Right Side */}
                    <div className="hidden md:flex items-center gap-3">

                        <ThemeToggler />

                        {(isPending || profileLoading) && (
                            <div className="h-10 w-10 animate-pulse rounded-full bg-primary/10" />
                        )}

                        {!isPending && user && (
                            <div className="flex items-center gap-3">

                                <Link
                                    href="/dashboard"
                                    className="flex items-center justify-center"
                                >
                                    <Avatar>
                                        <Avatar.Image
                                            referrerPolicy="no-referrer"
                                            alt={user?.name}
                                            src={user?.image}
                                        />

                                        <Avatar.Fallback>
                                            {user?.name
                                                ? user.name
                                                    .slice(0, 2)
                                                    .toUpperCase()
                                                : "U"}
                                        </Avatar.Fallback>
                                    </Avatar>
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="text-sm font-semibold bg-primary text-background px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
                                >
                                    Logout
                                </button>
                            </div>
                        )}

                        {!isPending && !user && (
                            <div className="flex items-center gap-3">
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
                        )}
                    </div>

                    {/* Mobile */}
                    <div className="md:hidden flex items-center gap-2">

                        {!isPending && user && (
                            <Link href="/dashboard">
                                <Avatar>
                                    <Avatar.Image
                                        referrerPolicy="no-referrer"
                                        alt={user?.name}
                                        src={user?.image}
                                    />

                                    <Avatar.Fallback>
                                        {user?.name
                                            ? user.name
                                                .slice(0, 2)
                                                .toUpperCase()
                                            : "U"}
                                    </Avatar.Fallback>
                                </Avatar>
                            </Link>
                        )}

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-gray-100"
                        >
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;