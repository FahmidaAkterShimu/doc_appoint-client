"use client";

import Image from "next/image";
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
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });

        if (error) {
            toast.error(error.message || "Login failed");
            return;
        }

        if (data) {
            toast.success("Welcome back!");

            setTimeout(() => {
                router.push("/");
            }, 500);
        }
    };

    const handleGoogleSignin = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Google sign in failed");
        }
    };

    return (
        <div className="min-h-screen bg-background/10 flex">

            {/* Left Side */}
            <div className='hidden lg:flex lg:w-1/2 bg-linear-to-br from-teal-600 to-teal-900 relative overflow-hidden items-center justify-center p-12'>
                <div className='relative z-10 text-center'>
                    <div className="flex justify-center items-center">
                        <Image
                            src={"/favicon.png"}
                            alt='logo'
                            width={50}
                            height={50} />
                    </div>

                    <h2 className='font-serif text-4xl text-background mb-4'>
                        Welcome Back
                    </h2>
                    <p className='text-teal-200 text-lg max-w-xs mx-auto'>
                        Sign in to manage your appointments and stay on top of your health.
                    </p>
                </div>
                <div className='absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5'></div>
                <div className='absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5'></div>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex items-center justify-center p-4 sm:p-6">

                <div className="w-full max-w-md">

                    {/* Heading */}
                    <h1 className="text-3xl text-foreground mb-2 lg:mb-8">
                        Login
                    </h1>

                    <p className="lg:hidden text-slate-500 text-sm mb-8">
                        Sign in to manage your appointments and stay on top
                        of your health.
                    </p>


                    {/* Form Card */}
                    <Card className="w-full border border-border rounded-lg p-5 sm:p-6">

                        <Form
                            onSubmit={onSubmit}
                            className="flex w-full flex-col gap-4"
                        >

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


                            {/* Login Button */}
                            <Button
                                className="rounded-lg w-full bg-primary hover:bg-primary/90"
                                type="submit"
                            >
                                Login
                            </Button>

                        </Form>


                        {/* Divider */}
                        <div className="flex justify-center items-center gap-3 my-5">

                            <Separator className="flex-1" />

                            <div className="whitespace-nowrap text-sm text-foreground/70">
                                Or sign in with
                            </div>

                            <Separator className="flex-1" />

                        </div>


                        {/* Google */}
                        <Button
                            type="button"
                            onClick={handleGoogleSignin}
                            variant="outline"
                            className="border-[#EEEEEE] w-full rounded-lg"
                        >
                            <FcGoogle />
                            Sign in with Google
                        </Button>


                        {/* Register */}
                        <p className="text-center text-sm sm:text-base text-[#6C696D] mt-5">

                            Don&apos;t have an account?{" "}

                            <Link
                                href="/register"
                                className="font-semibold text-primary hover:underline"
                            >
                                Create Account
                            </Link>
                        </p>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;