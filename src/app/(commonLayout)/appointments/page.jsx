import DoctorsCard from '@/components/DoctorsCard';
import SortDoctors from '@/components/SortDoctors';
import { Search } from 'lucide-react';

const AppointmentsPage = async () => {

    const res = await fetch("http://localhost:5000/appointments");
    const doctors = await res.json();

    return (
        <div className='min-h-screen bg-muted'>
            <div className='bg-background border-b border-border'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 py-10'>
                    <h1 className='text-4xl text-foreground mb-2'>
                        Find a Doctor
                    </h1>
                    <p className='text-slate-500 text-base'>Browse our network of verified specialists and book your appointment.</p>
                </div>
            </div>
            <SortDoctors doctors={doctors} />

            {/* <div className='max-w-7xl mx-auto px-4 sm:px-6 py-8'>
                <div className='bg-background rounded-2xl border border-border p-5 mb-8 flex flex-col sm:flex-row gap-4'>
                    <div className='relative flex-1'>
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type='text'
                            className='w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'>
                        </input>
                    </div>
                    <select className='px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-slate-700'>
                        <option>All</option>
                        <option>Cardiologist</option>
                        <option>Neurologist</option>
                        <option>Dermatologist</option>
                        <option>Orthopedic Surgeon</option>
                        <option>Pediatrician</option>
                        <option>Gastroenterologist</option>
                    </select>

                    <select className='px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-slate-700'>
                        <option>Sort: Top Rated</option>
                        <option>Sort: Fee Low → High</option>
                        <option>Sort: Top Rated</option>
                    </select>
                </div>
                <p className='text-sm text-slate-500 mb-5'>Showing
                    <span>9</span>
                    doctors</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {doctors.map(doctor =>(
                        <DoctorsCard key={doctor._id} doctor={doctor} />
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default AppointmentsPage;