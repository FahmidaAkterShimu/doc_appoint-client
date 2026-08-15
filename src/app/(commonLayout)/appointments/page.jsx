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
        </div>
    );
};

export default AppointmentsPage;