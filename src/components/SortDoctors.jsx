"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import DoctorsCard from "./DoctorsCard";

const SortDoctors = ({ doctors }) => {

    const [search, setSearch] = useState("");
    const [specialty, setSpecialty] = useState("All");
    const [sort, setSort] = useState("top-rated");

    // Get unique specialties
    const specialties = [
        "All",
        ...new Set(doctors.map(doctor => doctor.specialty))
    ];

    // Search + Filter + Sort
    const filteredDoctors = useMemo(() => {

        let result = [...doctors];

        // Search
        if (search.trim()) {
            result = result.filter(doctor =>
                doctor.name.toLowerCase().includes(search.toLowerCase()) ||
                doctor.specialty.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Specialty filter
        if (specialty !== "All") {
            result = result.filter(
                doctor => doctor.specialty === specialty
            );
        }

        // Sorting
        if (sort === "top-rated") {
            result.sort((a, b) => b.rating - a.rating);
        }

        if (sort === "fee-low") {
            result.sort((a, b) => a.fee - b.fee);
        }

        if (sort === "fee-high") {
            result.sort((a, b) => b.fee - a.fee);
        }

        return result;

    }, [doctors, search, specialty, sort]);


    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-8'>

            {/* Search / Filter / Sort */}

            <div className='bg-background rounded-2xl border border-border p-5 mb-8 flex flex-col sm:flex-row gap-4'>

                {/* Search */}

                <div className='relative flex-1'>

                    <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                    />

                    <input
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search doctor or specialty...'
                        className='w-full pl-9 pr-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'
                    />

                </div>


                {/* Specialty */}

                <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className='px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-background text-foreground'
                >

                    {specialties.map(item => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}

                </select>


                {/* Sort */}

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className='px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-background text-foreground'
                >

                    <option value="top-rated">
                        Top Rated
                    </option>

                    <option value="fee-low">
                        Fee: Low → High
                    </option>

                    <option value="fee-high">
                        Fee: High → Low
                    </option>

                </select>

            </div>


            {/* Result Count */}

            <p className='text-sm text-slate-500 mb-5'>
                Showing <span>{filteredDoctors.length}</span> doctors
            </p>


            {/* Doctors */}

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

                {filteredDoctors.map(doctor => (
                    <DoctorsCard
                        key={doctor._id}
                        doctor={doctor}
                    />
                ))}

            </div>


            {/* No Result */}

            {filteredDoctors.length === 0 && (
                <div className='text-center py-16'>
                    <p className='text-slate-500'>
                        No doctors found.
                    </p>
                </div>
            )}

        </div>
    );
};

export default SortDoctors;