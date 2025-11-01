import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Zap, Clock } from "lucide-react";
import chargingIcon from "@/assets/charging-icon.png";

const stations = [
  { name: "SuperCharge Downtown", address: "123 Main St, City Center", distance: "0.5 mi", speed: "Ultra Fast", available: 4, total: 6 },
  { name: "EV Plaza North", address: "456 Oak Ave, North District", distance: "1.2 mi", speed: "Fast", available: 2, total: 4 },
  { name: "GreenPower Station", address: "789 Pine Rd, East Side", distance: "2.1 mi", speed: "Ultra Fast", available: 8, total: 8 },
  { name: "ChargeHub West", address: "321 Elm St, West End", distance: "3.4 mi", speed: "Standard", available: 1, total: 3 },
];

const ChargingStations = () => {
  return (
    <section className="py-24 px-6">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={chargingIcon} alt="Charging station" className="w-20 h-20 animate-float" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find Charging Stations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Locate the nearest charging stations with real-time availability
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Search Bar */}
          <Card className="mb-8 border-2 shadow-lg animate-scale-in">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Enter your location or ZIP code" 
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <Button size="lg" className="gap-2">
                  <Search className="w-5 h-5" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Station List */}
          <div className="space-y-4">
            {stations.map((station, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{station.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {station.address}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">{station.distance}</p>
                      <p className="text-sm text-muted-foreground">away</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">{station.speed}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-accent" />
                        <span className="text-sm">
                          <span className="font-semibold text-accent">{station.available}</span>
                          <span className="text-muted-foreground">/{station.total} available</span>
                        </span>
                      </div>
                    </div>
                    <Button variant="outline">Get Directions</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargingStations;
