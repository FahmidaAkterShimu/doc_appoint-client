"use client";

import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardTabs from "./DashboardTabs";
import BookingCard from "./BookingCard";
import ProfileCard from "./ProfileCard";
import UpdateBookingModal from "./UpdateBookingModal";

const DashboardClient = ({ user, bookings }) => {
    const [activeTab, setActiveTab] = useState("bookings");

    const [bookingList, setBookingList] = useState(bookings);

    const [selectedBooking, setSelectedBooking] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    const handleUpdate = (booking) => {
        setSelectedBooking(booking);
        setIsUpdateModalOpen(true);
    };

    const handleSaveUpdate = async (updatedBooking) => {
        console.log("Updated booking:", updatedBooking);

    };

    const handleDelete = async (booking) => {
        try {
            const res = await fetch(
                `http://localhost:5000/booking/${booking._id}`,
                {
                    method: "DELETE",
                    headers: { "content-type": "application/json" }
                }
            );
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Failed to delete booking");
            }

            window.location.reload();

            setBookingList((prev) =>
                prev.filter((item) => item._id !== booking._id)
            );

        } catch (error) {
            console.error("Delete error:", error);
        }
    };

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
                            <>
                                <div className="space-y-4 mt-6">
                                    {bookings.map((booking) => (
                                        <BookingCard
                                            key={booking._id}
                                            booking={booking}
                                            onUpdate={handleUpdate}
                                            onDelete={handleDelete}
                                        />
                                    ))}
                                </div>
                                <UpdateBookingModal
                                    key={selectedBooking?._id}
                                    booking={selectedBooking}
                                    isOpen={isUpdateModalOpen}
                                    onClose={() => {
                                        setIsUpdateModalOpen(false);
                                        setSelectedBooking(null);
                                    }}
                                    onSave={handleSaveUpdate}
                                />
                            </>
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