import DashboardClient from '@/components/dashboard/DashboardClient';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const DashboardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const sessionUser = session?.user;

    // For server component token will be given like this
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    // Get booking
    const bookingRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${sessionUser?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const bookings = await bookingRes.json();

    // Get user profile
    const userRes = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/${sessionUser.id}`,
        {
            headers: {
                authorization: `Bearer ${token}`
            },
        }
    );
    const user = await userRes.json();

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