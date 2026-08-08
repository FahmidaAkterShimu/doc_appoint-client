import Link from "next/link";
import { CalendarX2, Home, Search } from "lucide-react";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
            <div className="w-full max-w-lg text-center">

                {/* Icon */}
                <div className="relative mx-auto mb-8 w-fit">
                    <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-xl" />

                    <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10">
                        <CalendarX2 className="h-11 w-11 text-primary" />
                    </div>
                </div>

                {/* 404 */}
                <p className="text-7xl sm:text-8xl font-bold tracking-tight text-primary">
                    404
                </p>

                {/* Heading */}
                <h1 className="mt-4 text-2xl sm:text-3xl font-semibold">
                    Page Not Found
                </h1>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-base leading-6 text-muted-foreground max-w-md mx-auto">
                    The page you’re looking for doesn’t exist or may have
                    been moved to another location.
                </p>

                {/* Actions */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                    >
                        <Home className="h-4 w-4" />
                        Back to Home
                    </Link>

                    <Link
                        href="/appointments"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                    >
                        <Search className="h-4 w-4" />
                        Find a Doctor
                    </Link>
                </div>

                {/* Footer message */}
                <p className="mt-10 text-xs text-muted-foreground">
                    Need medical care? Find the right doctor and book an
                    appointment with ease.
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;