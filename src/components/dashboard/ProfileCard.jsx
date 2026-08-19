"use client";

import { Avatar, Button } from "@heroui/react";
import React, { useState } from "react";
import UpdateProfileModal from "./UpdateProfileModal";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const ProfileCard = ({ user, bookings }) => {
    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [profileData, setProfileData] = useState({
        name: user?.name || "",
        image: user?.image || "",
    });

    const handleSaveProfile = async (updatedData) => {
        // For client component token will be given:
        const { data: tokenData } = await authClient.token()

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/user/${user._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${tokenData?.token}`
                    },
                    body: JSON.stringify(updatedData),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(
                    data.message || "Failed to update profile"
                );
            }

            toast.success("Your profile updated successfully!");

            setIsModalOpen(false);

            router.refresh();

        } catch (error) {
            console.error("Update error:", error);
            toast.error(error.message || "Failed to update profile");
        }
    };

    return (
        <>
            <div>
                <div className="max-w-md">
                    <div className="bg-background rounded-2xl border border-border shadow-sm p-8">

                        <div className="flex flex-col items-center text-center mb-6">
                            <Avatar className="w-24 h-24 rounded-full object-cover border-4 border-teal-100 mb-4">
                                <Avatar.Image
                                    referrerPolicy="no-referrer"
                                    alt={user?.name}
                                    src={user?.image}
                                />

                                <Avatar.Fallback className="text-4xl">
                                    {user?.name
                                        ? user.name.slice(0, 2).toUpperCase()
                                        : "U"}
                                </Avatar.Fallback>
                            </Avatar>

                            <h2 className="font-serif text-2xl text-foreground">
                                {user?.name}
                            </h2>

                            <p className="text-slate-500 text-sm">
                                {user?.email}
                            </p>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center justify-between py-3 border-b border-border">
                                <span className="text-sm text-slate-500">
                                    Total Bookings
                                </span>

                                <span className="text-sm font-semibold text-foreground">
                                    {bookings.length}
                                </span>
                            </div>

                            <div className="flex items-center justify-between py-3 border-b border-border">
                                <span className="text-sm text-slate-500">
                                    Account Status
                                </span>

                                <span className="text-xs bg-teal-50 text-teal-700 border border-teal-100 px-2.5 py-1 rounded-full font-semibold">
                                    Active
                                </span>
                            </div>
                        </div>

                        <Button
                            onPress={() => {
                                setProfileData({
                                    name: user?.name || "",
                                    image: user?.image || "",
                                });

                                setIsModalOpen(true);
                            }}
                            className="w-full bg-primary text-background font-semibold py-3 rounded-xl hover:bg-teal-600 transition-colors"
                        >
                            Update Profile
                        </Button>
                    </div>
                </div>
            </div>

            <UpdateProfileModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                user={user}
                profileData={profileData}
                setProfileData={setProfileData}
                onSave={handleSaveProfile}
            />
        </>
    );
};

export default ProfileCard;