import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Ole } from "next/font/google";
import Out from "@/Assest/out.jpg";
import Image from "next/image";

const ole = Ole({
  weight: "400",
  subsets: ["latin"],
});

export const items = [
  {
    id: "1",
    description: "Website Design",
    quantity: 1,
    rate: 500,
    amount: 500,
  },
  {
    id: "2",
    description: "Hosting",
    quantity: 1,
    rate: 120,
    amount: 120,
  },
];
export default function InvoicePreview() {

    return (
          <div className="min-h-screen bg-gray-50 p-4">
          <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
           <h1 className={`${ole.className} text-6xl font-bold mb-1`}>Invoice Preview</h1>
          <div className="space-x-2">
          <Button variant="outline">Back to edit</Button>
          <Button>
          <Download className="w-4 h-4 mr-2"/>
          Download PDF
          </Button>
  </div>
          </div>

          
            <Card className="relative overflow-hidden">
<Image
  src={Out}
  alt="Watermark"
  width={2000}
  height={20}
  className="absolute inset-0 m-auto h-[599px] -contain opacity-40 pointer-events-none select-none"
/>
      <CardContent className="relative z-10 p-8">
                {/*invoice header */ }
                 <div className="flex justify-between items-start mb-8">
                    <div>
                 <h2 className={`${ole.className} text-3xl font-bold mb-2`}>INVOICE</h2>
                <p className="text-gray-600">#234232</p>
                 </div>
                <div className="text-right">
                <p className="text-sm text-gray-600">Date: 12/32/28</p>
                </div>
              </div>
               <div className="grid grid-cols-2 gap-8 mb-8">
                                       <div>
                    <h3 className="font-semibold mb-2">From:</h3>
                    <p className= {`${ole.className} text-2xl font-medium`}>Acme</p>
               
<p className="text-gray-600">acme@gmail.com</p>
</div>
<div>
 <h3 className={`${ole.className} text-2xl font-semibold mb-2`}>To</h3>
<p className="font-medium">John doe</p>
<p className="text-gray-600">john@gmail.com</p>
</div>
</div>
<table className="w-full mb-8">
    <thead>
        <tr className="border-b-2">
            <th className={`${ole.className} text-2xl  text-left py-2`}>Description</th>
            <th className={`${ole.className} text-2xl  text-center py-2`}>Qty</th>
            <th className={`${ole.className} text-2xl  text-center py-2`}>Rate</th>
            <th className={`${ole.className} text-2xl  text-left py-2`}>Amount</th>
           
           
            </tr>

    </thead>
    <tbody>
      {items.map((item) => (
      <tr key={item.id} className="border-b">
        <td className="py-2">{item.description}</td>
        <td className="py-2 text-center">{item.quantity}</td>
        <td className="py-2 text-right">
          $
          {typeof item.rate === "number"
          ? item.rate.toFixed(2)
        : "0.00"}
        </td>
        <td className="py-2 text-right">
          $
          {typeof item.amount === "number"
          ? item.amount.toFixed(2)
        : "0.00"}
        </td>
      </tr>
    ))}
    </tbody>
</table>
{/* totals */}

<div className="flex justify-end">
  <div className="w-64 space-y-2">
    <div className="flex justify-between">
      <span>Subtotal</span>
      <span>$21323</span>
      </div>
      <div className="flex justify-between">
        <span>Tax (10%):</span>
        <span>$99</span>
        </div>
        <div className="flex justify-between font-bold text-ig border-t pt-2">
          <span>Total:</span>
          <span>$99</span>
          </div>
          </div>
          </div>
            </CardContent>
          </Card>
          </div>
          </div>
    );
}