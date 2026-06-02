import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemBar } from "@/components/problem-bar";
import { HowItWorksPharmacist } from "@/components/how-it-works-pharmacist";
import { SectionBreak } from "@/components/section-break";
import { HowItWorksPharmacy } from "@/components/how-it-works-pharmacy";
import { WhyCoveredRx } from "@/components/why-coveredrx";
import { WaitlistCta } from "@/components/waitlist-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemBar />
      <HowItWorksPharmacist />
      <SectionBreak />
      <HowItWorksPharmacy />
      <WhyCoveredRx />
      <WaitlistCta />
      <Footer />
    </main>
  );
}
