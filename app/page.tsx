"use client";

import InvoicePreview from "@/components/invoice-preview";
import { Button } from "@base-ui/react/button";
import { useState } from "react";
import { Eye } from "lucide-react";
import InvoiceForm from "@/components/ui/invoice-form";
export default function Home() {
  const [showPreview, setShowPreview] = useState(false);

  if (showPreview) {
    return <InvoicePreview />;
  }

  return (
  <div className="min-h-screen bg-gray-50 p-4">
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font bold">Invoice Generator</h1>
          <p className="text-amber-400">
            create professional invoice quickly</p>
          </div>
   <Button onClick={() => setShowPreview(true)}>
                       <Eye className="w-4 h-4 mr-2" />
                       Preview
    </Button>
      </div>
         <InvoiceForm/>
    </div>
  </div>
  );
}