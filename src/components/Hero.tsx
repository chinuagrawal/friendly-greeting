import { ArrowRight, Wifi, Wind, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const features = [
    { icon: Wind, text: "AC & Non-AC" },
    { icon: Wifi, text: "Free WiFi" },
    { icon: Clock, text: "24/7 Access" },
    { icon: Users, text: "34 Seats" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary-foreground text-sm font-medium animate-fade-in">
              ✨ Premium Study Space in Town
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Your Perfect
              <span className="block text-primary"> Study Haven</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/80 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Experience the ideal environment for focused learning at Kanha Library. 
              Modern amenities, peaceful atmosphere, and affordable pricing for students and professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Your Seat
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Pricing
              </Button>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground/90 text-sm"
                >
                  <feature.icon className="w-4 h-4" />
                  {feature.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image/Card */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"
                alt="Kanha Library Interior"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-primary-foreground">500+</p>
                    <p className="text-sm text-primary-foreground/70">Happy Students</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-foreground">4.8</p>
                    <p className="text-sm text-primary-foreground/70">Rating</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-foreground">24/7</p>
                    <p className="text-sm text-primary-foreground/70">Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -top-4 -right-4 p-4 bg-card rounded-xl shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Limited Offer!</p>
                  <p className="text-sm text-muted-foreground">20% off first month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
