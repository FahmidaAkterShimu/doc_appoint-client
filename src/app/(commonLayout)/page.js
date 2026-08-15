import Appointment from "@/components/Appointment";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import TopRatedDoctors from "@/components/TopRatedDoctors";

export default function Home() {
  return (
    <div>
      <TopRatedDoctors />
      <Process />
      <Testimonials />
      <Appointment />
    </div>
  );
}
