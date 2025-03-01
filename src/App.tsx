import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-100 flex justify-center">
      <div className="max-w-[90%] xl:max-w-[1223px]">
        <Header />
        <main className="container mx-2 px-4">
          <HeroSection />
        </main>
      </div>
    </div>
  );
}
