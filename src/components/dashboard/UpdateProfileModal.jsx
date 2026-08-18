"use client";

import React from "react";
import { X } from "lucide-react";

const UpdateProfileModal = ({
    isOpen,
    onClose,
    user,
    profileData,
    setProfileData,
    onSave,
}) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        onSave?.(profileData);

        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div className="w-full max-w-lg bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                        Update Profile
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    >
                        <X size={22} strokeWidth={1.7} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="px-6 py-6 space-y-5">

                        {/* Full Name */}
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-slate-600 dark:text-slate-300"
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={profileData.name}
                                onChange={(e) =>
                                    setProfileData({
                                        ...profileData,
                                        name: e.target.value,
                                    })
                                }
                                className="w-full h-11 px-3.5 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                        </div>

                        {/* Photo URL */}
                        <div className="space-y-2">
                            <label
                                htmlFor="image"
                                className="block text-sm font-medium text-slate-600 dark:text-slate-300"
                            >
                                Photo URL
                            </label>

                            <input
                                id="image"
                                type="url"
                                value={profileData.image}
                                onChange={(e) =>
                                    setProfileData({
                                        ...profileData,
                                        image: e.target.value,
                                    })
                                }
                                className="w-full h-11 px-3.5 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-slate-600 dark:text-slate-300"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={user?.email || ""}
                                readOnly
                                className="w-full h-11 px-3.5 rounded-lg border border-border bg-slate-50 dark:bg-slate-900/50 text-slate-400 text-sm outline-none cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mx-6 border-t border-border" />

                    <div className="flex items-center justify-end gap-3 px-6 py-5">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-foreground transition-colors"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-5 py-2.5 rounded-lg bg-primary text-background text-sm font-semibold hover:bg-teal-600 transition-colors"
                        >
                            Save Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfileModal;