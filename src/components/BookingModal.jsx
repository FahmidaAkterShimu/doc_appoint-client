"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const BookingModal = ({ doctor }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [isOpen, setIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        patientName: "",
        gender: "Male",
        phone: "",
        appointmentDate: "",
        timeSlot: doctor?.availability?.[0] || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingData = {
            doctorId: doctor._id,
            doctorName: doctor.name,
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            userEmail: user?.email,
            ...formData,
        };

        const res = await fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })

        const data = await res.json();

        if (data) {
            toast.success("Appointment booked successfully!")
        }

        setIsOpen(false);
    };

    return (
        <>
            {/* Open Modal Button */}
            <Button
                onPress={() => setIsOpen(true)}
                className="w-full bg-primary text-background font-semibold py-3 rounded-xl hover:bg-teal-600 transition-colors mt-6"
            >
                Book Appointment
            </Button>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="w-full max-w-xl bg-background rounded-2xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between px-6 py-5 border-b border-border">
                            <div>
                                <h2 className="font-serif text-2xl font-semibold text-foreground">
                                    Book Appointment
                                </h2>

                                <p className="text-sm text-slate-500 mt-1">
                                    {doctor.name} · {doctor.specialty}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="p-6 space-y-5">

                                {/* Doctor + Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-2">
                                            Doctor
                                        </label>

                                        <input
                                            type="text"
                                            value={doctor.name}
                                            readOnly
                                            className="w-full h-11 px-3 rounded-lg border border-border bg-muted text-slate-400 text-sm outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-2">
                                            Your Email
                                        </label>

                                        <input
                                            type="email"
                                            value={user?.email || ""}
                                            readOnly
                                            className="w-full h-11 px-3 rounded-lg border border-border bg-muted text-slate-400 text-sm outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Patient Name */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-600 mb-2">
                                        Patient Name *
                                    </label>

                                    <input
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        placeholder="Enter patient name"
                                        required
                                        className="w-full h-11 px-3 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    />
                                </div>

                                {/* Gender + Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-2">
                                            Gender *
                                        </label>

                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className="w-full h-11 px-3 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20"
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-2">
                                            Phone *
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="01XXXXXXXXX"
                                            required
                                            className="w-full h-11 px-3 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        />
                                    </div>
                                </div>

                                {/* Date + Time */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-2">
                                            Appointment Date *
                                        </label>

                                        <input
                                            type="date"
                                            name="appointmentDate"
                                            value={formData.appointmentDate}
                                            onChange={handleChange}
                                            required
                                            className="w-full h-11 px-3 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-2">
                                            Time Slot *
                                        </label>

                                        <select
                                            name="timeSlot"
                                            value={formData.timeSlot}
                                            onChange={handleChange}
                                            className="w-full h-11 px-3 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20"
                                        >
                                            {doctor.availability?.map((time, index) => (
                                                <option key={index} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between px-6 py-4 border-t border-border">
                                <p className="text-base font-semibold text-primary">
                                    Fee: ৳{doctor.fee}
                                </p>

                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 text-sm text-slate-600 hover:text-slate-800"
                                    >
                                        Cancel
                                    </button>

                                    <Button
                                        type="submit"
                                        className="bg-primary text-background font-semibold px-5 py-2 rounded-lg"
                                    >
                                        Confirm Booking
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookingModal;