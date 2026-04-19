import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Payments } from "@/components/sections/Payments";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Payments />
      <Contact />
    </MainLayout>
  );
}
