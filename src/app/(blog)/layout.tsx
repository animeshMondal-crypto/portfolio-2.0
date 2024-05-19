import Footer from "@/components/footer";
import React from "react";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white text-black">
      {children}
      <Footer />
    </div>
  );
}
