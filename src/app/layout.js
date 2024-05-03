import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Gamechamp | Home",
    template:"%s | Gamechamp"
  },
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
        <Navbar />
        {children}
        <Footer />
        </div>
        </body>
    </html>
  );
}
