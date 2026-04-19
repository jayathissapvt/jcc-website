import React, { useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="bg-[#0E1E45] pt-32 pb-16 text-center text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0E1E45] to-[#0E1E45]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Terms and Conditions</h1>
          <p className="text-blue-100/70 max-w-2xl mx-auto font-light">Please read these terms and conditions carefully before using our services.</p>
        </div>
      </div>
      
      <div className="bg-[#0E1E45]">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Card className="bg-white/5 border-white/10 shadow-2xl backdrop-blur-sm text-white">
            <CardContent className="p-8 md:p-12 prose prose-invert prose-blue max-w-none prose-headings:text-white prose-p:text-blue-100/70 prose-li:text-blue-100/70 font-light">
              <h3>1. Introduction</h3>
              <p>Welcome to Jayathissa City Center (JCC.lk). These Terms and Conditions govern your use of our website and services provided by Jayathissa Lanka Enterprises (PVT) LTD.</p>
              
              <h3>2. Service Usage Rules</h3>
              <p>By accessing our website and using our services (Transport, Retail, Tech, Agri, Education, Auto), you agree to comply with all applicable local laws and regulations.</p>
              <ul>
                <li>Users must provide accurate information when booking services or placing orders.</li>
                <li>Fraudulent activities, including false bookings, will result in immediate termination of service access.</li>
                <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
              </ul>

              <h3>3. Payment Terms</h3>
              <p>All payments for services must be made through authorized channels. Prices are subject to change without notice. For physical goods, payment is required before delivery or at the point of pickup.</p>

              <h3>4. Liability</h3>
              <p>Jayathissa Lanka Enterprises shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use the services.</p>

              <h3>5. Customer Responsibilities</h3>
              <p>Customers are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>

              <h3>6. Modifications to Terms</h3>
              <p>We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the revised Terms.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
