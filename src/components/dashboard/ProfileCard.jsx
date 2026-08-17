import { Avatar, Button } from '@heroui/react';
import React from 'react';

const ProfileCard = ({ user, bookings }) => {

    return (
        <div>
            <div className='max-w-md'>
                <div className='bg-background rounded-2xl border border-border shadow-sm p-8'>
                    <div className='flex flex-col items-center text-center mb-6'>
                        <Avatar className='w-24 h-24 rounded-full object-cover border-4 border-teal-100 mb-4'>
                            <Avatar.Image
                                referrerPolicy='no-referrer'
                                alt={user?.name}
                                src={user?.image}
                            />

                            <Avatar.Fallback className='text-4xl'>
                                {user?.name
                                    ? user.name.slice(0, 2).toUpperCase()
                                    : 'U'}
                            </Avatar.Fallback>
                        </Avatar>
                        <h2 className='font-serif text-2xl text-foreground'>{user?.name}</h2>
                        <p className='text-slate-500 text-sm'>{user?.email}</p>
                    </div>
                    <div className='space-y-3 mb-6'>
                        <div className='flex items-center justify-between py-3 border-b border-border'>
                            <span className='text-sm text-slate-500'>Total Bookings</span>
                            <span className='text-sm font-semibold text-foreground'>{bookings.length}</span>
                        </div>
                        <div className='flex items-center justify-between py-3 border-b border-border'>
                            <span className='text-sm text-slate-500'>Account Status</span>
                            <span className='text-xs bg-teal-50 text-teal-700 border border-teal-100 px-2.5 py-1 rounded-full font-semibold'>Active</span>
                        </div>
                    </div>
                    <Button className='w-full bg-primary text-background font-semibold py-3 rounded-xl hover:bg-teal-600 transition-colors'>Update Profile</Button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;