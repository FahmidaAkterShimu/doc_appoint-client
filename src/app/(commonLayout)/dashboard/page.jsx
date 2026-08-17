import DashboardClient from '@/components/dashboard/DashboardClient';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const DashboardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
        cache: 'no-store'
    });

    const bookings = await res.json();

    return (
        <div className='min-h-screen bg-muted'>
            <DashboardClient
                user={user}
                bookings={bookings}
            />
        </div>
    );
};

export default DashboardPage;