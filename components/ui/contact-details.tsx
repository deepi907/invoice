import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from './label'

export default function ContactDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>From & To</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* FROM SECTION */}
        <div className="space-y-4">
          <h3 className="font-medium">From (Your Details)</h3>
          
          <div>
            <Label htmlFor="fromName">Name</Label>
            <Input id="fromName" placeholder="Your name or company" />
          </div>
               <div>
            <Label htmlFor="fromEmail">Email</Label>
            <Input id="fromEmail" placeholder="your@email.com" type="email " />
          </div>

        </div>

        {/* TO SECTION */}
        <div className="space-y-4">
          <h3 className="font-medium">To (Client Details)</h3>
          

          <div>
            <Label htmlFor="toName">Name</Label>
            <Input id="toName" placeholder="Client name or company" />
          </div>

             <div>
            <Label htmlFor="ToEmail">Email</Label>
            <Input id="ToEmail" placeholder="your@email.com" type="email " />
          </div>
        </div>

      </CardContent>
    </Card>
  )
}