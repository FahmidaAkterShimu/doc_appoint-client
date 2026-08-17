"use client";

import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardTabs from "./DashboardTabs";
import BookingCard from "./BookingCard";
import ProfileCard from "./ProfileCard";

const DashboardClient = ({ user, bookings }) => {
    const [activeTab, setActiveTab] = useState("bookings");

    return (
        <>
            <div className='bg-background border-b border-border'>
                <div className='max-w-5xl mx-auto px-4 sm:px-6 py-8'>
                    <DashboardHeader user={user} />

                    <DashboardTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>
            </div>


            <div className='max-w-5xl mx-auto px-4 sm:px-6 py-8'>

                {activeTab === "bookings" && (
                    <div>
                        <div className='flex items-center justify-between mb-6'>
                            <h2 className='font-semibold text-foreground text-lg'>
                                My Appointments ({bookings.length})
                            </h2>
                        </div>
                        {bookings.length > 0 ? (
                            <div className="space-y-4 mt-6">
                                {bookings.map((booking) => (
                                    <BookingCard
                                        key={booking._id}
                                        booking={booking}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-background rounded-2xl border border-border">
                                <div className="text-5xl mb-4">
                                    📅
                                </div>
                                <h3 className="text-lg font-semibold text-foreground/75 mb-2">
                                    No appointments yet
                                </h3>
                                <p className="text-slate-400 text-sm">Book your first appointment to get started.</p>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === "profile" && (
                    <ProfileCard
                        user={user}
                        bookings={bookings}
                    />
                )}
            </div>
        </>
    );
};

export default DashboardClient;