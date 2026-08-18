import { CalendarDays, Stethoscope } from "lucide-react";
import Image from "next/image";

const AppointmentsLoading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 py-10">

            <div className="flex items-center gap-2 mb-8">
                <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-primary/10 animate-ping" />

                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                        <Image
                            src="/favicon.png"
                            alt="logo"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>

                <div>
                    <h1 className="text-xl font-bold">
                        Loading Appointments
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Getting your appointments ready...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsLoading;