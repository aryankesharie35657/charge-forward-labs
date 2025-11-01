import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Leaf, DollarSign, Fuel } from "lucide-react";

const ImpactCalculator = () => {
  const [milesPerYear, setMilesPerYear] = useState(12000);
  
  // Calculations
  const gasCost = (milesPerYear / 25) * 3.5; // Assuming 25 MPG and $3.5/gallon
  const evCost = (milesPerYear / 3.5) * 0.13; // Assuming 3.5 mi/kWh and $0.13/kWh
  const savings = gasCost - evCost;
  const co2Saved = (milesPerYear / 25) * 19.6; // lbs of CO2 per gallon

  return (
    <section id="impact-calculator" className="py-24 px-6">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Calculate Your Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how much you could save and the environmental impact you'd make by switching to electric
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Annual Driving Impact</CardTitle>
              <CardDescription>Adjust the slider to see your potential savings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <Label htmlFor="miles" className="text-base">
                  Miles Driven Per Year: <span className="font-bold text-primary">{milesPerYear.toLocaleString()}</span>
                </Label>
                <Slider
                  id="miles"
                  min={5000}
                  max={30000}
                  step={1000}
                  value={[milesPerYear]}
                  onValueChange={(value) => setMilesPerYear(value[0])}
                  className="cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="text-center p-6 rounded-lg bg-accent/10 border-2 border-accent/20 animate-scale-in">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-accent/20">
                      <DollarSign className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-accent mb-2">
                    ${Math.round(savings).toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Annual Fuel Savings</p>
                </div>

                <div className="text-center p-6 rounded-lg bg-primary/10 border-2 border-primary/20 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-primary/20">
                      <Leaf className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-primary mb-2">
                    {Math.round(co2Saved / 2000).toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Tons of CO₂ Saved</p>
                </div>

                <div className="text-center p-6 rounded-lg bg-muted border-2 border-border animate-scale-in" style={{ animationDelay: "0.2s" }}>
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-muted-foreground/20">
                      <Fuel className="w-8 h-8 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold mb-2">
                    {Math.round(milesPerYear / 25).toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Gallons Not Burned</p>
                </div>
              </div>

              <div className="pt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  * Calculations based on average gas prices, electricity costs, and vehicle efficiency. Actual savings may vary.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactCalculator;
