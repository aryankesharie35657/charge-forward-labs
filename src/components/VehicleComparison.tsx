import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const vehicles = [
  {
    name: "EcoSport EV",
    type: "Compact",
    price: "$35,990",
    range: "270 miles",
    acceleration: "6.5s",
    charging: "30 min",
    features: ["Standard Autopilot", "Premium Audio", "Glass Roof", "Heated Seats"],
    popular: false,
  },
  {
    name: "PowerDrive Pro",
    type: "Sedan",
    price: "$48,990",
    range: "410 miles",
    acceleration: "3.1s",
    charging: "15 min",
    features: ["Full Self-Driving", "Premium Audio", "Glass Roof", "Heated Seats", "Air Suspension", "Premium Interior"],
    popular: true,
  },
  {
    name: "MegaTruck EV",
    type: "Pickup",
    price: "$59,990",
    range: "340 miles",
    acceleration: "4.5s",
    charging: "20 min",
    features: ["Full Self-Driving", "Off-Road Mode", "Towing Package", "Heated Seats", "Reinforced Bed"],
    popular: false,
  },
];

const VehicleComparison = () => {
  return (
    <section id="vehicle-comparison" className="py-24 px-6 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare our electric vehicle lineup and find the perfect match for your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl animate-scale-in ${
                vehicle.popular ? "border-primary shadow-lg scale-105" : "hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {vehicle.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="text-center mb-2">
                  <Badge variant="outline" className="mb-3">
                    {vehicle.type}
                  </Badge>
                  <CardTitle className="text-2xl mb-2">{vehicle.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">
                    {vehicle.price}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Specs */}
                <div className="space-y-3 pb-6 border-b">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Range</span>
                    <span className="font-semibold">{vehicle.range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">0-60 mph</span>
                    <span className="font-semibold">{vehicle.acceleration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fast Charge</span>
                    <span className="font-semibold">{vehicle.charging}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleComparison;
