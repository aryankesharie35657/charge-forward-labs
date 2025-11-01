import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Leaf, Shield, Gauge, Battery, DollarSign } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Charging",
    description: "Get 200 miles of range in just 15 minutes with our ultra-fast charging network.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Battery,
    title: "Extended Range",
    description: "Travel up to 400+ miles on a single charge with advanced battery technology.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Leaf,
    title: "Zero Emissions",
    description: "Drive guilt-free with 100% electric power and reduce your carbon footprint.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: DollarSign,
    title: "Lower Operating Costs",
    description: "Save thousands annually on fuel and maintenance compared to gas vehicles.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Gauge,
    title: "Instant Acceleration",
    description: "Experience thrilling 0-60 mph in under 3 seconds with electric motor power.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Advanced Safety",
    description: "Protected by cutting-edge driver assistance and autonomous features.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Electric?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of transportation with cutting-edge technology and sustainable innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
