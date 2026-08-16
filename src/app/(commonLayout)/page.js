import Appointment from "@/components/Appointment";
import Banner from "@/components/Banner";
import Process from "@/components/Process";
import Specialties from "@/components/Specialties";
import Testimonials from "@/components/Testimonials";
import TopRatedDoctors from "@/components/TopRatedDoctors";

export default function Home() {
  return (
    <div>
      <Banner />
      <Specialties />
      <TopRatedDoctors />
      <Process />
      <Testimonials />
      <Appointment />
    </div>
  );
}
