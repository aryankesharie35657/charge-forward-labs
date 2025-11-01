import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Thermometer, Wind, Mountain, Gauge } from "lucide-react";

const RangeCalculator = () => {
  const [temperature, setTemperature] = useState(70);
  const [speed, setSpeed] = useState(65);
  const [terrain, setTerrain] = useState(50);
  const [acUsage, setAcUsage] = useState(50);

  // Base range
  const baseRange = 400;

  // Calculate range impact factors
  const tempFactor = temperature < 32 ? 0.6 : temperature > 90 ? 0.85 : 1.0;
  const speedFactor = speed > 70 ? 0.85 : speed < 45 ? 0.95 : 1.0;
  const terrainFactor = 1 - (terrain / 100) * 0.25;
  const acFactor = 1 - (acUsage / 100) * 0.15;

  const estimatedRange = Math.round(baseRange * tempFactor * speedFactor * terrainFactor * acFactor);
  const rangePercentage = Math.round((estimatedRange / baseRange) * 100);

  const getRangeColor = () => {
    if (rangePercentage >= 90) return "text-accent";
    if (rangePercentage >= 70) return "text-primary";
    if (rangePercentage >= 50) return "text-orange-500";
    return "text-destructive";
  };

  return (
    <section className="py-24 px-6">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real-World Range Calculator
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Adjust driving conditions to see how they affect your vehicle's range
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <Card className="border-2 shadow-lg">
            <CardHeader>
              <CardTitle>Driving Conditions</CardTitle>
              <CardDescription>Adjust the sliders to match your typical driving</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-primary" />
                    Temperature
                  </Label>
                  <span className="font-bold text-lg">{temperature}°F</span>
                </div>
                <Slider
                  value={[temperature]}
                  onValueChange={(v) => setTemperature(v[0])}
                  min={-10}
                  max={110}
                  step={5}
                  className="cursor-pointer"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-primary" />
                    Average Speed
                  </Label>
                  <span className="font-bold text-lg">{speed} mph</span>
                </div>
                <Slider
                  value={[speed]}
                  onValueChange={(v) => setSpeed(v[0])}
                  min={25}
                  max={85}
                  step={5}
                  className="cursor-pointer"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <Mountain className="w-5 h-5 text-primary" />
                    Terrain Difficulty
                  </Label>
                  <span className="font-bold text-lg">{terrain}%</span>
                </div>
                <Slider
                  value={[terrain]}
                  onValueChange={(v) => setTerrain(v[0])}
                  min={0}
                  max={100}
                  step={10}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Flat</span>
                  <span>Hilly</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <Wind className="w-5 h-5 text-primary" />
                    Climate Control
                  </Label>
                  <span className="font-bold text-lg">{acUsage}%</span>
                </div>
                <Slider
                  value={[acUsage]}
                  onValueChange={(v) => setAcUsage(v[0])}
                  min={0}
                  max={100}
                  step={10}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Off</span>
                  <span>Max</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card className="border-2 shadow-lg bg-gradient-to-br from-card to-muted/30">
              <CardHeader>
                <CardTitle>Estimated Range</CardTitle>
                <CardDescription>Based on your driving conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className={`text-7xl font-bold mb-4 ${getRangeColor()}`}>
                    {estimatedRange}
                  </p>
                  <p className="text-2xl text-muted-foreground mb-6">miles</p>
                  <Badge variant={rangePercentage >= 70 ? "default" : "secondary"} className="text-base px-4 py-2">
                    {rangePercentage}% of rated range
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Range Impact Factors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Temperature</span>
                  <span className="font-semibold">{Math.round(tempFactor * 100)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Speed</span>
                  <span className="font-semibold">{Math.round(speedFactor * 100)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Terrain</span>
                  <span className="font-semibold">{Math.round(terrainFactor * 100)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Climate Control</span>
                  <span className="font-semibold">{Math.round(acFactor * 100)}%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RangeCalculator;
