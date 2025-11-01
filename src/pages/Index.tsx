import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VehicleComparison from "@/components/VehicleComparison";
import ModelComparison from "@/components/ModelComparison";
import ImpactCalculator from "@/components/ImpactCalculator";
import CostAnalysisCharts from "@/components/CostAnalysisCharts";
import RangeCalculator from "@/components/RangeCalculator";
import TripPlanner from "@/components/TripPlanner";
import ChargingStations from "@/components/ChargingStations";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <VehicleComparison />
      <ModelComparison />
      <ImpactCalculator />
      <CostAnalysisCharts />
      <RangeCalculator />
      <TripPlanner />
      <ChargingStations />
    </main>
  );
};

export default Index;
