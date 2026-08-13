import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Label } from "./label";
import { Input } from "./input";
import { useInvoice } from "@/Context/invoice-context";
export default function TaxAndTotals() {
  const { invoice, updateInvoice } = useInvoice();

const handleTaxRateChange = (value: string) => {
  if (value === "") {
    updateInvoice({ taxRate: ""});
  } else
{ 
const numValue = Number.parseFloat(value);
if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
  updateInvoice({ taxRate: numValue });
}   
}
};

const handleTaxRateBlur = () => {
  if (invoice.taxRate === "" || isNaN(Number(invoice.taxRate))) {
    updateInvoice({ taxRate: 0 });
  }
}

  return ( 
  <Card>
<CardHeader>
  <CardTitle>Tax & Totals </CardTitle>
</CardHeader>
<CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <Label htmlFor="taxRate">Tax Rate (%)</Label>
    <Input id="taxRate" type="number" min="0" max="100" step="0.01" value={invoice.taxRate} onChange={(e) => handleTaxRateChange(e.target.value)} onBlur={handleTaxRateBlur} />
    </div>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>${invoice.subTotal.toFixed(2)}</span>
      </div>
      
      <div className="flex justify-between">
        <span>Tax (10%):</span>
        <span>$32</span>
      </div>
      <div className="flex justify-between font-bold text-lg border-t pt-2">
        <span>Total:</span>
        <span>$3211</span>
    </div>
    </div>
  </CardContent>
  
    </Card>
    );
  
}
