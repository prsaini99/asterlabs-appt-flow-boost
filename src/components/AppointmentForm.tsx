
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AppointmentForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <div className="flex gap-2">
            <Input disabled value="+91" className="w-16" />
            <Input id="phone" placeholder="Enter your phone number" className="flex-1" />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/90">
        Request Call Back
      </Button>
    </form>
  );
};
