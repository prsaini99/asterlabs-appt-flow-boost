
import { AppointmentForm } from "@/components/AppointmentForm";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Shield, Star, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-light to-white">
      {/* Hero Section */}
      <div className="container pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-brand-secondary text-brand-primary">Healthcare at Your Doorstep</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">
              Book Your Home Visit for Lab Tests
            </h1>
            <p className="text-lg text-gray-600">
              Experience convenient and reliable diagnostic services from Aster Labs in the comfort of your home.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Shield className="text-brand-primary" />
                <span className="font-medium">NABL Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-brand-primary" />
                <span className="font-medium">Trusted by 1M+ Patients</span>
              </div>
            </div>
          </div>
          
          <div className="lg:ml-auto w-full max-w-md">
            <AppointmentForm />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Aster Labs Home Collection?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center">
                <Clock className="text-brand-primary w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl">Flexible Timing</h3>
              <p className="text-gray-600">Choose your preferred time slot for sample collection</p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center">
                <Users className="text-brand-primary w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl">Expert Phlebotomists</h3>
              <p className="text-gray-600">Trained professionals for safe and painless collection</p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center">
                <Calendar className="text-brand-primary w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl">Quick Reports</h3>
              <p className="text-gray-600">Get your test results within 24-48 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="container py-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Available in Major Cities</h2>
          <p className="text-gray-600">
            We provide home collection services in major cities across India
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["Bangalore", "Mumbai", "Delhi", "Chennai", "Hyderabad"].map((city) => (
              <div key={city} className="flex items-center gap-2 bg-brand-secondary px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-brand-primary" />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
