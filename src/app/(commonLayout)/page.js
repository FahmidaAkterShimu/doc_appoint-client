import Appointment from "@/components/Appointment";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Process />
      <Testimonials />
      <Appointment />
    </div>
  );
}
