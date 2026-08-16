"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
    {
        id: 1,
        bgColor: "#0e172b",
        bgImage: null,
        gradient: null,

        subtitle: "HEALTHCARE MADE SIMPLE",
        title: "Your Health, Our Priority",
        description:
            "Connect with trusted healthcare professionals and manage your appointments effortlessly.",

        stats: [
            { number: "500+", label: "Registered Doctors" },
            { number: "12,000+", label: "Appointments Booked" },
            { number: "8,400+", label: "Happy Patients" },
            { number: "120+", label: "Hospitals" },
        ],
    },

    {
        id: 2,
        bgColor: "#071329",
        bgImage: "/doctor-2.avif",
        gradient: "from-slate-900 via-slate-900/80 to-transparent",

        subtitle: "FIND THE RIGHT SPECIALIST",
        title: "Expert Doctors, Better Care",
        description:
            "Find experienced doctors and book your appointment with just a few clicks.",

        stats: [
            { number: "300+", label: "Medical Specialists" },
            { number: "25+", label: "Specialties" },
            { number: "98%", label: "Patient Satisfaction" },
            { number: "50+", label: "Partner Clinics" },
        ],
    },

    {
        id: 3,
        bgColor: "#071329",
        bgImage: "/doctor-3.avif",
        gradient: "from-slate-900 via-slate-900/80 to-transparent",

        subtitle: "DOCTOR APPOINTMENT MANAGER",
        title: "Manage Your Bookings Easily",
        description:
            "Update, cancel or review your appointments anytime from your personal dashboard.",

        stats: [
            { number: "15k+", label: "Patients Served" },
            { number: "500+", label: "Verified Doctors" },
            { number: "24/7", label: "Easy Booking" },
            { number: "100%", label: "Secure Platform" },
        ],
    },
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
    }, []);

    const slide = slides[currentSlide];

    return (
        <section className="relative overflow-hidden bg-slate-900 min-h-140 flex items-center">

            {/* Background */}
            <div
                className="absolute inset-0 transition-all duration-700"
                style={{ backgroundColor: slide.bgColor }}
            >
                {slide.bgImage && (
                    <Image
                        key={slide.bgImage}
                        src={slide.bgImage}
                        alt="Doctor"
                        fill
                        priority
                        className="w-full h-full object-cover opacity-30"
                    />
                )}

                {/* Gradient - only slide 2 & 3 */}
                {slide.gradient && (
                    <div
                        className={`absolute inset-0 bg-linear-to-r ${slide.gradient}`}
                    />
                )}
            </div>

            {/* Content */}
            <div
                key={slide.id}
                className="relative z-10 flex items-center w-full"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <div className="animate-fadeIn">

                        <p className="text-teal-400 font-semibold tracking-widest text-sm mb-4">
                            — {slide.subtitle}
                        </p>

                        <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-5">
                            {slide.title}
                        </h1>

                        <p className="text-slate-300 text-lg mb-8 max-w-md leading-relaxed">
                            {slide.description}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href={'/appointments'}
                                className="px-6 py-3 rounded-xl bg-primary hover:bg-teal-600 text-white font-semibold transition-colors">
                                Find a Doctor
                            </Link>

                            <Link
                                href={'/register'}
                                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-colors">
                                Get Started Free
                            </Link>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="hidden md:flex justify-center">
                        <div className="grid grid-cols-2 gap-3 max-w-lg lg:ml-auto">

                            {slide.stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10 text-center"
                                >
                                    <h3 className="font-serif text-3xl text-teal-400 mb-1">
                                        {stat.number}
                                    </h3>

                                    <p className="text-xs text-slate-400">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">

                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
                            ? "w-7 bg-teal-400"
                            : "w-2 bg-white/40"
                            }`}
                    />
                ))}

            </div>
        </section>
    );
};

export default Banner;