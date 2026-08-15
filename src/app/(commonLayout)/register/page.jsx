"use client";

import { FcGoogle } from "react-icons/fc";
import { Card, Separator } from "@heroui/react";

import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user);

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image || undefined,
        });

        console.log({ data, error })

        if (error) {
            toast.error(error.message || "Registration failed");
            return;
        }

        if (data) {
            toast.success("Account created successfully!");

            setTimeout(() => {
                router.push("/");
            }, 500);
        }
    };

    const handleGoogleSignup = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Google sign up failed");
        }
    };

    return (
        <div className="min-h-screen bg-background/10 flex">

            {/* Left Side */}
            <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-slate-800 to-slate-900 relative overflow-hidden items-center justify-center p-12">

                <div className="relative z-10 text-center">

                    <div className="grid grid-cols-2 gap-4 mb-8">

                        <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
                            <p className="text-white text-sm font-medium">
                                Book instantly
                            </p>
                        </div>

                        <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
                            <p className="text-white text-sm font-medium">
                                Top doctors
                            </p>
                        </div>

                        <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
                            <p className="text-white text-sm font-medium">
                                Verified profiles
                            </p>
                        </div>

                        <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
                            <p className="text-white text-sm font-medium">
                                Free to join
                            </p>
                        </div>

                    </div>

                    <h2 className="font-serif text-4xl text-white mb-4">
                        Join DocAppoint
                    </h2>

                    <p className="text-slate-300 text-base max-w-xs mx-auto">
                        Create your free account and start managing your health
                        appointments today.
                    </p>

                </div>

                <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-teal-500/10" />

                <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-teal-500/10" />

            </div>


            {/* Right Side */}
            <div className="flex-1 flex items-center justify-center p-4 sm:p-6">

                <div className="w-full max-w-md">

                    <h1 className="text-3xl text-foreground mb-2 lg:mb-8">
                        Register
                    </h1>

                    <p className="lg:hidden text-slate-500 text-sm mb-8">
                        Create your free account and start managing your health
                        appointments today.
                    </p>


                    {/* Form Card */}
                    <Card className="w-full border border-border rounded-lg p-5 sm:p-6">

                        <Form
                            onSubmit={onSubmit}
                            className="flex w-full flex-col gap-4"
                        >

                            {/* Name */}
                            <TextField
                                isRequired
                                name="name"
                                type="text"
                            >
                                <Label>Full Name</Label>

                                <Input
                                    className="placeholder:text-foreground/60"
                                    placeholder="Enter your name"
                                />

                                <FieldError />
                            </TextField>


                            {/* Email */}
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(value) => {
                                    if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                            value
                                        )
                                    ) {
                                        return "Please enter a valid email address";
                                    }

                                    return null;
                                }}
                            >
                                <Label>Email</Label>

                                <Input
                                    className="placeholder:text-foreground/60"
                                    placeholder="you@example.com"
                                />

                                <FieldError />
                            </TextField>


                            {/* Image */}
                            <TextField
                                name="image"
                                type="url"
                            >
                                <Label>Image URL</Label>

                                <Input
                                    className="placeholder:text-foreground/60"
                                    placeholder="https://example.com/image.jpg"
                                />

                                <FieldError />
                            </TextField>


                            {/* Password */}
                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                                validate={(value) => {

                                    if (value.length < 8) {
                                        return "Password must be at least 8 characters";
                                    }

                                    if (!/[A-Z]/.test(value)) {
                                        return "Password must contain at least one uppercase letter";
                                    }

                                    if (!/[0-9]/.test(value)) {
                                        return "Password must contain at least one number";
                                    }

                                    return null;
                                }}
                            >
                                <Label>Password</Label>

                                <Input
                                    className="placeholder:text-foreground/60"
                                    placeholder="Enter your password"
                                />

                                <Description className="text-foreground/40">
                                    Must be at least 8 characters with 1 uppercase
                                    and 1 number
                                </Description>

                                <FieldError />
                            </TextField>


                            {/* Create Account */}
                            <Button
                                className="rounded-lg w-full bg-primary hover:bg-primary/90"
                                type="submit"
                            >
                                Create Account
                            </Button>

                        </Form>


                        {/* Divider */}
                        <div className="flex justify-center items-center gap-3 my-5">

                            <Separator className="flex-1" />

                            <div className="whitespace-nowrap text-sm text-foreground/70">
                                Or sign up with
                            </div>

                            <Separator className="flex-1" />

                        </div>


                        {/* Google */}
                        <Button
                            type="button"
                            onClick={handleGoogleSignup}
                            variant="outline"
                            className="border-[#EEEEEE] w-full rounded-lg"
                        >
                            <FcGoogle />
                            Sign up with Google
                        </Button>


                        {/* Login */}
                        <p className="text-center text-sm sm:text-base text-[#6C696D] mt-5">

                            Already have an account?{" "}

                            <Link
                                href="/login"
                                className="font-semibold text-primary hover:underline"
                            >
                                Sign In
                            </Link>

                        </p>

                    </Card>

                </div>

            </div>

        </div>
    );
};

export default RegisterPage;