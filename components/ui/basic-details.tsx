import {
  Card,
  CardContent,
  
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "./input";
import { Label } from "./label";


export default function BasicDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice Details</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="invoiceNumber">Invoice Number</Label>
          <Input id="invoiceNumber" />
        </div>
         <div> 
              <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" />
         </div>
        
        
      </CardContent>
     
    </Card>
  );
}