
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export const AppointmentForm = () => {
  const [date, setDate] = useState<Date>();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
        </div>

        <div>
          <Label>Gender</Label>
          <RadioGroup defaultValue="male" className="flex gap-4 mt-1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="Enter your city" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <div className="flex gap-2">
            <Input disabled value="+91" className="w-16" />
            <Input id="phone" placeholder="Enter your phone number" className="flex-1" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Date of Birth</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/90">
        Request Call Back
      </Button>
    </form>
  );
};
