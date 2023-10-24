import AboutSection from "./_components/AboutSection";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import ProjectsSection from "./_components/ProjectsSection";

export default function Home() {
  return (
    <main className="homepage">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About me */}
      <AboutSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Contact */}

      {/* Footer */}
    </main>
  )
}
