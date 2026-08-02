
export interface InvoiceItem {
id: string
description: string
quantity: number | string
rate: number | string
amount: number
}

export interface InvoiceData {
    invoiceNumber: string
    date: string
    fromEmail: string
    fromName: string
    toEmail: string
    toName: string
    items: InvoiceItem[]
    taxRate: number | string
    subTotal: number
    taxAmount: number
    total: number
}