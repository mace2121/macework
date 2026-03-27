import { Hero } from "@/components/hero";
import { ProductsSection } from "@/components/products-section";
import { SolutionsSection } from "@/components/solutions-section";
import { WhyMaceworkSection } from "@/components/why-macework-section";
import { ProcessSection } from "@/components/process-section";
import { LeadForm } from "@/components/lead-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <SolutionsSection />
      <WhyMaceworkSection />
      <ProcessSection />
      <LeadForm />
      <Footer />
    </>
  );
}
