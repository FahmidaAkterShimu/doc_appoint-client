import { CalendarDays, Stethoscope } from "lucide-react";

const LoadingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-12">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-md shadow-primary/20">
                    <Stethoscope className="h-6 w-6 text-primary-foreground" />
                </div>

                <h1 className="text-2xl font-bold">
                    Doc<span className="text-primary">Appoint</span>
                </h1>
            </div>

            {/* Animated Icon */}
            <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-primary/10 animate-ping" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                    <CalendarDays className="h-9 w-9 text-primary animate-pulse" />
                </div>
            </div>

            {/* Text */}
            <div className="mt-8 text-center">
                <h2 className="text-xl font-semibold">
                    Loading DocAppoint
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                    Getting everything ready for you...
                </p>
            </div>

            {/* Progress dots */}
            <div className="flex gap-1.5 mt-6">
                <span className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                <span className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                <span className="h-2 w-2 rounded-full bg-primary animate-bounce" />
            </div>
        </div>
    );
};

export default LoadingPage;