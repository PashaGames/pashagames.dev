import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import WorkSection from "./components/sections/WorkSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-100 flex justify-center">
      <div className="max-w-[90%] xl:max-w-[1223px]">
        <Header />
        <main className="container mx-2 mt-20 md:mt-0 px-4">
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
