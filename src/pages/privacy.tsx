import React, { useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="bg-[#0E1E45] pt-32 pb-16 text-center text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0E1E45] to-[#0E1E45]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-blue-100/70 max-w-2xl mx-auto font-light">How we collect, use, and protect your personal information.</p>
        </div>
      </div>
      
      <div className="bg-[#0E1E45]">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Card className="bg-white/5 border-white/10 shadow-2xl backdrop-blur-sm text-white">
            <CardContent className="p-8 md:p-12 prose prose-invert prose-blue max-w-none prose-headings:text-white prose-p:text-blue-100/70 prose-li:text-blue-100/70 font-light">
              <h3>1. Information Collection</h3>
              <p>We collect information that you provide directly to us when using our services. This may include:</p>
              <ul>
                <li>Name and contact information (email address, phone number)</li>
                <li>Delivery addresses and location data</li>
                <li>Payment and transaction history</li>
                <li>Communication records with our support team</li>
              </ul>
              
              <h3>2. Use of Information</h3>
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li>To provide, maintain, and improve our services across all divisions</li>
                <li>To process transactions and send related information</li>
                <li>To respond to comments, questions, and customer service requests</li>
                <li>To communicate about products, services, offers, and events</li>
              </ul>

              <h3>3. Cookies and Tracking</h3>
              <p>Our website uses cookies to enhance user experience. Cookies are small data files stored on your hard drive or in device memory that help us improve our services and your experience, see which areas and features of our services are popular, and count visits.</p>

              <h3>4. Data Protection</h3>
              <p>We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>

              <h3>5. Contact Data Protection</h3>
              <p>We will never sell, rent, or trade your personal contact information to third parties. We strictly use it for business operations within Jayathissa Lanka Enterprises.</p>

              <h3>6. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at jayathissapvt@gmail.com.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
