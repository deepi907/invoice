"use client";

import { InvoiceData } from "@/public/Types/invoice";
import { createContext, ReactNode, useState } from "react";
interface InvoiceContextType {
    invoice: InvoiceData;
}
const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

export function InvoiceProvider({ children }: { children: ReactNode }) {

    const {invoice, setInvoice} = useState<InvoiceData>(initialInvoiceData);


    return(
    <InvoiceContext.Provider value={{ invoice }}>
        {children}
        </InvoiceContext.Provider>
        );
}
