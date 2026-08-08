"use client";

import { initialInvoiceData } from "@/lib/constants";
import { InvoiceData, InvoiceItem, } from "@/public/Types/invoice";
import { createContext, ReactNode, useState, useContext} from "react";
interface InvoiceContextType {
    invoice: InvoiceData;
    updateInvoice: (updates: Partial<InvoiceData>) => void;
        addItem: () => void;
        removeItem: (index: number) => void;
        updateItem: (
            index: number,
            field: keyof InvoiceItem,
            value: string | number
        ) => void;
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
        const removeItem = (index: number) => {
                   if (invoice.items.length > 1) {
                    const newItems = invoice.items.filter((_, i) => i !== index);
                    updateInvoice({ items: newItems })
                   }
        };
        const updateItem = (
            index: number,
            field: keyof InvoiceItem,
            value: string | number
             
         ) => {
            const newItems = [...invoice.items];
            newItems[index] = { ...newItems[index], [field]: value };

             updateInvoice ({ items: newItems });
        };
    return(
    <InvoiceContext.Provider value={{ invoice, updateInvoice, addItem, removeItem, updateItem }}>
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
