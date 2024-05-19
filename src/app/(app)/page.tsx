import ContactForm from "@/components/contact-form";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-[47.5rem] m-auto p-[1.5rem]">
        <Hero />
        <Skills />
        <Projects />
        <ContactForm />
        <Separator className="mt-3" />
      </div>
    </div>
  );
}
