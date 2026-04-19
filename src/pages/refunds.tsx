import React, { useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";

export default function Refunds() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="bg-[#0E1E45] pt-32 pb-16 text-center text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0E1E45] to-[#0E1E45]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Returns and Refunds</h1>
          <p className="text-blue-100/70 max-w-2xl mx-auto font-light">Our policies regarding product returns, service cancellations, and refunds.</p>
        </div>
      </div>
      
      <div className="bg-[#0E1E45]">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Card className="bg-white/5 border-white/10 shadow-2xl backdrop-blur-sm text-white">
            <CardContent className="p-8 md:p-12 prose prose-invert prose-blue max-w-none prose-headings:text-white prose-p:text-blue-100/70 prose-li:text-blue-100/70 font-light">
              <h3>1. General Policy</h3>
              <p>At Jayathissa Lanka Enterprises, we strive to ensure customer satisfaction across all our divisions. If you are not entirely satisfied with your purchase, we're here to help.</p>
              
              <h3>2. Return Conditions (Retail & Tech)</h3>
              <p>For products purchased through MyPhone.lk, Jayathissa Lanka Super, or Ezymart.lk:</p>
              <ul>
                <li>Items must be returned within 7 days of the purchase date.</li>
                <li>The product must be unused and in the same condition that you received it.</li>
                <li>The item must be in the original packaging with all tags attached.</li>
                <li>A valid receipt or proof of purchase is required.</li>
              </ul>

              <h3>3. Service Refund Rules (Transport & Academy)</h3>
              <p>For service-based divisions:</p>
              <ul>
                <li><strong>Jayathissa Lanka Express:</strong> Ticket cancellations made 24 hours prior to departure are eligible for a 75% refund. No refunds are provided for missed trips.</li>
                <li><strong>Jayathissa Lanka Academy:</strong> Course fee refunds are only applicable if cancellation is requested before the start of the second class.</li>
              </ul>

              <h3>4. Non-Refundable Items</h3>
              <p>Certain items are strictly non-refundable:</p>
              <ul>
                <li>Perishable goods (from Jayathissa Lanka Agri) once accepted.</li>
                <li>Opened cosmetic products (due to hygiene reasons).</li>
                <li>Software or digital products.</li>
                <li>Services already rendered (e.g., tech repairs).</li>
              </ul>

              <h3>5. Refund Process</h3>
              <p>Once we receive your item, we will inspect it and notify you of the status of your refund. If your return is approved, we will initiate a refund to your original method of payment within 5-7 business days.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
