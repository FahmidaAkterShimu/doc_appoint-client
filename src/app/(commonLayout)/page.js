import Appointment from "@/components/Appointment";
import Process from "@/components/Process";
import Specialties from "@/components/Specialties";
import Testimonials from "@/components/Testimonials";
import TopRatedDoctors from "@/components/TopRatedDoctors";

export default function Home() {
  return (
    <div>
      <Specialties />
      <TopRatedDoctors />
      <Process />
      <Testimonials />
      <Appointment />
    </div>
  );
}
