import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VehicleComparison from "@/components/VehicleComparison";
import ImpactCalculator from "@/components/ImpactCalculator";
import ChargingStations from "@/components/ChargingStations";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <VehicleComparison />
      <ImpactCalculator />
      <ChargingStations />
    </main>
  );
};

export default Index;
