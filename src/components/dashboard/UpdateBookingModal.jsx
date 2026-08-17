"use client";

import { useState } from "react";
import { X } from "lucide-react";

const UpdateBookingModal = ({
    booking,
    isOpen,
    onClose,
    onSave,
}) => {
    const [formData, setFormData] = useState({
        patientName: booking?.patientName || "",
        gender: booking?.gender || "Male",
        phone: booking?.phone || "",
        appointmentDate: booking?.appointmentDate || "",
        timeSlot: booking?.timeSlot || "",
    });

    if (!isOpen || !booking) return null;

    const today = new Date();

    const minDate = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, "0"),
        String(today.getDate()).padStart(2, "0"),
    ].join("-");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSave({
            ...booking,
            ...formData,
        });
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-xl bg-background rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}
                <div className="flex items-start justify-between px-6 py-5 border-b border-border">
                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-foreground">
                            Update Appointment
                        </h2>

                        <p className="text-sm text-slate-500 mt-1">
                            Update your appointment information
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-muted transition-colors cursor-pointer"
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
                                    value={booking.doctorName || ""}
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
                                    value={booking.userEmail || ""}
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
                                    required
                                    className="w-full h-11 px-3 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                >
                                    <option value="Male">
                                        Male
                                    </option>

                                    <option value="Female">
                                        Female
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>
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
                                    required
                                    placeholder="01XXXXXXXXX"
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
                                    min={minDate}
                                    required
                                    className="w-full h-11 px-3 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
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
                                    {booking.doctorAvailability?.map((time, index) => (
                                        <option key={index} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-teal-600 transition-colors cursor-pointer"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBookingModal;