import { Avatar } from '@heroui/react';

const DashboardHeader = ({ user }) => {
    return (
        <div className='flex items-center gap-4'>
            <Avatar className='w-14 h-14 rounded-full object-cover border-2 border-teal-200'>
                <Avatar.Image
                    referrerPolicy='no-referrer'
                    alt={user?.name}
                    src={user?.image}
                />

                <Avatar.Fallback className='text-xl'>
                    {user?.name
                        ? user.name.slice(0, 2).toUpperCase()
                        : 'U'}
                </Avatar.Fallback>
            </Avatar>

            <div>
                <h1 className='font-serif text-2xl text-foreground'>
                    Welcome, {user?.name}!
                </h1>

                <p className='text-sm text-slate-500'>
                    {user?.email}
                </p>
            </div>
        </div>
    );
};

export default DashboardHeader;