import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Battery, Clock, Zap } from "lucide-react";

const TripPlanner = () => {
  const [distance, setDistance] = useState(250);
  const [showRoute, setShowRoute] = useState(false);

  const batteryCapacity = 400; // miles
  const chargingStops = Math.max(0, Math.ceil((distance - batteryCapacity) / (batteryCapacity * 0.8)));
  const chargingTime = chargingStops * 20; // 20 min per stop
  const drivingTime = Math.floor(distance / 65 * 60); // at 65 mph
  const totalTime = drivingTime + chargingTime;

  const handlePlanRoute = () => {
    setShowRoute(true);
  };

  const chargingStopsList = Array.from({ length: chargingStops }, (_, i) => ({
    name: `Charging Station ${i + 1}`,
    distance: Math.round(batteryCapacity + (i * batteryCapacity * 0.8)),
    duration: 20,
    type: "Ultra Fast",
  }));

  return (
    <section className="py-24 px-6">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trip Planner
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plan your journey with optimized charging stops along the way
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Input Section */}
          <Card className="lg:col-span-2 border-2 shadow-lg">
            <CardHeader>
              <CardTitle>Route Details</CardTitle>
              <CardDescription>Enter your trip information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="start" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Starting Location
                </Label>
                <Input id="start" placeholder="San Francisco, CA" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="end" className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-accent" />
                  Destination
                </Label>
                <Input id="end" placeholder="Los Angeles, CA" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="distance" className="flex items-center gap-2">
                  Distance: <span className="font-bold text-primary">{distance} miles</span>
                </Label>
                <Input
                  id="distance"
                  type="range"
                  min="50"
                  max="800"
                  step="50"
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="cursor-pointer"
                />
              </div>

              <Button onClick={handlePlanRoute} className="w-full gap-2" size="lg">
                <Navigation className="w-5 h-5" />
                Plan Route
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="lg:col-span-3 space-y-6">
            {showRoute ? (
              <>
                {/* Trip Summary */}
                <Card className="border-2 shadow-lg bg-gradient-to-br from-card to-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Trip Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-card rounded-lg border-2">
                        <p className="text-3xl font-bold text-primary">{distance}</p>
                        <p className="text-sm text-muted-foreground">Miles</p>
                      </div>
                      <div className="text-center p-4 bg-card rounded-lg border-2">
                        <p className="text-3xl font-bold text-accent">{Math.floor(totalTime / 60)}h {totalTime % 60}m</p>
                        <p className="text-sm text-muted-foreground">Total Time</p>
                      </div>
                      <div className="text-center p-4 bg-card rounded-lg border-2">
                        <p className="text-3xl font-bold">{chargingStops}</p>
                        <p className="text-sm text-muted-foreground">Charging Stops</p>
                      </div>
                      <div className="text-center p-4 bg-card rounded-lg border-2">
                        <p className="text-3xl font-bold">{chargingTime}m</p>
                        <p className="text-sm text-muted-foreground">Charging Time</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Route Details */}
                <Card className="border-2 shadow-lg">
                  <CardHeader>
                    <CardTitle>Recommended Route</CardTitle>
                    <CardDescription>Optimized for fastest charging and minimal stops</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Start */}
                    <div className="flex items-start gap-4 pb-4 border-b">
                      <div className="p-2 rounded-full bg-primary/10">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Starting Point</p>
                        <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                        <Badge variant="outline" className="mt-2">
                          <Battery className="w-3 h-3 mr-1" />
                          100% Charged
                        </Badge>
                      </div>
                      <p className="text-sm font-medium">0 mi</p>
                    </div>

                    {/* Charging Stops */}
                    {chargingStopsList.map((stop, index) => (
                      <div key={index} className="flex items-start gap-4 pb-4 border-b animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="p-2 rounded-full bg-accent/10">
                          <Zap className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{stop.name}</p>
                          <p className="text-sm text-muted-foreground">{stop.type} Charging</p>
                          <Badge variant="secondary" className="mt-2">
                            <Clock className="w-3 h-3 mr-1" />
                            {stop.duration} min stop
                          </Badge>
                        </div>
                        <p className="text-sm font-medium">{stop.distance} mi</p>
                      </div>
                    ))}

                    {/* Destination */}
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-accent/10">
                        <Navigation className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Destination</p>
                        <p className="text-sm text-muted-foreground">Los Angeles, CA</p>
                        <Badge variant="outline" className="mt-2">
                          Arrival with {Math.max(10, 100 - (distance % 100))}% battery
                        </Badge>
                      </div>
                      <p className="text-sm font-medium">{distance} mi</p>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="border-2 border-dashed min-h-[400px] flex items-center justify-center">
                <CardContent className="text-center">
                  <Navigation className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-xl text-muted-foreground">
                    Enter your route details and click "Plan Route" to see your optimized trip
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlanner;
