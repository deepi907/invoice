"use client";
import { initialInvoiceData } from "@/lib/constants";
import { InvoiceData } from "@/public/Types/invoice";
import { createContext, ReactNode, useState, useContext} from "react";
interface InvoiceContextType {
    invoice: InvoiceData;
    updateInvoice: (updates: Partial<InvoiceData>) => void;
        addItem: () => void;
}

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);
export function InvoiceProvider({ children }: { children: ReactNode }) {

    const [invoice, setInvoice] = useState<InvoiceData>(initialInvoiceData);

    const updateInvoice = (updates: Partial<InvoiceData>) => {
          const newInvoice = { ...invoice, ...updates };
      setInvoice(newInvoice);
        };

        const addItem = () => {
            const newItem: InvoiceItem = {
                id: Date.now().toString(),
                description: "",
                quantity: 1,
                rate: 0,
                amount: 0,
            };
            updateInvoice({ items: [...invoice.items, newItem] });
        };
    return(
    <InvoiceContext.Provider value={{ invoice, updateInvoice, addItem }}>
        {children}
        </InvoiceContext.Provider>
        );
    }

        export function useInvoice() {
            const context = useContext(InvoiceContext);
            if (context === undefined) {
                throw new Error("useInvoice must be used within an InvoiceProvider");

            }
            return context;
        }
