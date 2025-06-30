import Header from "../components/Header";
import Footer from "../components/Footer";
import { type ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    if (!window.history.state || !window.history.state.idx) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const darkPages = ["/services", "/contact"];
  const isDarkPage = darkPages.includes(location.pathname);

  return (
    <div className={`flex flex-col min-h-screen transition-all duration-300 ${isDarkPage ? "bg-white text-black" : "bg-white text-white"}`}>
      <Header />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
}
