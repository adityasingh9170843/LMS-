import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          duration={45}
          subject="science"
          color="#ffda6e"
        />
        <CompanionCard
          id="456" 
          name="Brain the Brainy Explorer"
          topic="Neural Network of the Brain"
          duration={30}
          subject="science"
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Verba the Verbal Explorer"
          topic="Language of the Brain"
          duration={30}
          subject="science"
          color="#bde7ff"
        />
      </section>
      <section className="home-section">
        <CompanionList 
        title="Recently completed sessions"
        companions={recentSessions}
        className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
