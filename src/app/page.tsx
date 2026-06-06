import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Tools from "@/components/Tools";
import Meeting from "@/components/Meeting";
import Feedback from "@/components/Feedback";
import MessageForm from "@/components/MessageForm";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <Navbar />
      <Hero />
      <About />
      <Approach />
      <Services />
      <Projects />
      <Education />
      <Certifications />
      <Tools />
      <Meeting />
      <Feedback />
      <Statement />
      <MessageForm />
      <Contact />
    </main>
  );
}
