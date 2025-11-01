import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Battery, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-ev.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern electric vehicle on sustainable highway" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-6 h-6 text-primary animate-glow" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              The Future is Electric
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Drive Into a{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Cleaner Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Experience the power, efficiency, and sustainability of electric vehicles. 
            Join the revolution that's transforming transportation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => scrollToSection("vehicle-comparison")}
            >
              Explore Models
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => scrollToSection("impact-calculator")}
            >
              Calculate Savings
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 animate-slide-in-left">
              <div className="p-3 rounded-lg bg-primary/10">
                <Battery className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">400+</p>
                <p className="text-sm text-muted-foreground">Miles Range</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              <div className="p-3 rounded-lg bg-accent/10">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">15 Min</p>
                <p className="text-sm text-muted-foreground">Fast Charging</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <div className="p-3 rounded-lg bg-accent/10">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">Zero</p>
                <p className="text-sm text-muted-foreground">Emissions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
