import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Doc Appoint",
  description: "Doctor Appointment Application",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
