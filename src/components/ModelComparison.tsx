import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, Zap, Battery, Gauge, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const vehicles = [
  {
    id: "ecosport",
    name: "EcoSport EV",
    type: "Compact",
    price: 35990,
    range: 270,
    acceleration: 6.5,
    charging: 30,
    topSpeed: 125,
    battery: 60,
    warranty: 8,
    features: ["Standard Autopilot", "Premium Audio", "Glass Roof", "Heated Seats"],
  },
  {
    id: "powerdrive",
    name: "PowerDrive Pro",
    type: "Sedan",
    price: 48990,
    range: 410,
    acceleration: 3.1,
    charging: 15,
    topSpeed: 155,
    battery: 85,
    warranty: 8,
    features: ["Full Self-Driving", "Premium Audio", "Glass Roof", "Heated Seats", "Air Suspension", "Premium Interior"],
  },
  {
    id: "megatruck",
    name: "MegaTruck EV",
    type: "Pickup",
    price: 59990,
    range: 340,
    acceleration: 4.5,
    charging: 20,
    topSpeed: 140,
    battery: 100,
    warranty: 10,
    features: ["Full Self-Driving", "Off-Road Mode", "Towing Package", "Heated Seats", "Reinforced Bed"],
  },
];

const ModelComparison = () => {
  const [selectedModels, setSelectedModels] = useState<string[]>(["powerdrive", "ecosport"]);
  const { toast } = useToast();

  const toggleModel = (id: string) => {
    if (selectedModels.includes(id)) {
      if (selectedModels.length === 1) {
        toast({
          title: "Selection Required",
          description: "Please keep at least one model selected for comparison",
          variant: "destructive",
        });
        return;
      }
      setSelectedModels(selectedModels.filter(m => m !== id));
    } else {
      if (selectedModels.length >= 3) {
        toast({
          title: "Maximum Selections",
          description: "You can compare up to 3 models at a time",
        });
        return;
      }
      setSelectedModels([...selectedModels, id]);
    }
  };

  const selectedVehicles = vehicles.filter(v => selectedModels.includes(v.id));

  const calculateMonthlyCost = (price: number) => {
    const downPayment = price * 0.1;
    const loanAmount = price - downPayment;
    const monthlyPayment = (loanAmount * (0.05 / 12)) / (1 - Math.pow(1 + 0.05 / 12, -60));
    return Math.round(monthlyPayment);
  };

  const calculateYearlySavings = (price: number) => {
    // Average 12,000 miles/year
    const gasCost = (12000 / 25) * 3.5;
    const evCost = (12000 / 3.5) * 0.13;
    return Math.round(gasCost - evCost);
  };

  return (
    <section className="py-24 px-6">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compare Models Side-by-Side
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select up to 3 models to compare specifications, features, and costs
          </p>
        </div>

        {/* Model Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {vehicles.map((vehicle) => (
            <Button
              key={vehicle.id}
              variant={selectedModels.includes(vehicle.id) ? "default" : "outline"}
              onClick={() => toggleModel(vehicle.id)}
              className="gap-2"
            >
              {selectedModels.includes(vehicle.id) && <Check className="w-4 h-4" />}
              {vehicle.name}
            </Button>
          ))}
        </div>

        <Tabs defaultValue="specs" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="cost">Cost Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="specs" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="border-2 shadow-lg">
                  <CardHeader className="bg-gradient-to-br from-card to-primary/5">
                    <Badge variant="outline" className="w-fit mb-2">{vehicle.type}</Badge>
                    <CardTitle className="text-2xl">{vehicle.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-foreground">
                      ${vehicle.price.toLocaleString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Battery className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Range</span>
                      </div>
                      <span className="font-bold text-lg">{vehicle.range} mi</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-5 h-5 text-accent" />
                        <span className="text-sm text-muted-foreground">0-60 mph</span>
                      </div>
                      <span className="font-bold text-lg">{vehicle.acceleration}s</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Fast Charge</span>
                      </div>
                      <span className="font-bold text-lg">{vehicle.charging} min</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-4 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">Top Speed</p>
                        <p className="font-semibold">{vehicle.topSpeed} mph</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Battery</p>
                        <p className="font-semibold">{vehicle.battery} kWh</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-muted-foreground">Warranty</p>
                        <p className="font-semibold">{vehicle.warranty} years / 100K mi</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="features" className="animate-fade-in">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle>Feature Comparison</CardTitle>
                <CardDescription>See which features are included with each model</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-4 font-semibold">Feature</th>
                        {selectedVehicles.map((vehicle) => (
                          <th key={vehicle.id} className="text-center py-4 px-4 font-semibold">
                            {vehicle.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from(new Set(selectedVehicles.flatMap(v => v.features))).map((feature) => (
                        <tr key={feature} className="border-b hover:bg-muted/30">
                          <td className="py-4 px-4">{feature}</td>
                          {selectedVehicles.map((vehicle) => (
                            <td key={vehicle.id} className="text-center py-4 px-4">
                              {vehicle.features.includes(feature) ? (
                                <Check className="w-5 h-5 text-accent mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-muted-foreground mx-auto" />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cost" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="border-2 shadow-lg">
                  <CardHeader className="bg-gradient-to-br from-card to-accent/5">
                    <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                    <CardDescription>Total Cost of Ownership</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Purchase Price</span>
                      </div>
                      <p className="text-3xl font-bold text-primary">
                        ${vehicle.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Monthly Payment (60mo)</span>
                        <span className="font-semibold">${calculateMonthlyCost(vehicle.price)}/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Down Payment (10%)</span>
                        <span className="font-semibold">${Math.round(vehicle.price * 0.1).toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-accent/10 rounded-lg border-2 border-accent/20">
                      <p className="text-sm text-muted-foreground mb-1">Annual Fuel Savings</p>
                      <p className="text-2xl font-bold text-accent">
                        ${calculateYearlySavings(vehicle.price).toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        vs. equivalent gas vehicle
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground mb-2">5-Year Cost Breakdown</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Purchase + Interest</span>
                          <span className="font-semibold">${Math.round(vehicle.price * 1.12).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Electricity (5 years)</span>
                          <span className="font-semibold">$3,000</span>
                        </div>
                        <div className="flex justify-between text-sm text-accent">
                          <span>Fuel Savings</span>
                          <span className="font-semibold">-${(calculateYearlySavings(vehicle.price) * 5).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-base font-bold pt-2 border-t">
                          <span>Total 5-Year Cost</span>
                          <span>${Math.round(vehicle.price * 1.12 + 3000 - calculateYearlySavings(vehicle.price) * 5).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ModelComparison;
