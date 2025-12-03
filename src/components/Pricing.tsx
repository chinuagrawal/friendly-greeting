import { Check, Wind, Fan, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Fan Section",
      icon: Fan,
      description: "Budget-friendly option for focused study",
      prices: {
        halfDay: 30,
        fullDay: 50,
        monthly: 1200,
      },
      features: [
        "Comfortable seating",
        "Good ventilation",
        "Free WiFi",
        "Power outlets",
        "Drinking water",
        "Clean washrooms",
      ],
      popular: false,
    },
    {
      name: "AC Section",
      icon: Wind,
      description: "Premium experience with climate control",
      prices: {
        halfDay: 50,
        fullDay: 80,
        monthly: 2000,
      },
      features: [
        "Air conditioned",
        "Premium seating",
        "Free WiFi",
        "Power outlets",
        "Drinking water",
        "Clean washrooms",
        "Quieter environment",
        "Priority booking",
      ],
      popular: true,
    },
  ];

  const timings = [
    { shift: "Morning", time: "6:00 AM - 12:00 PM" },
    { shift: "Evening", time: "12:00 PM - 10:00 PM" },
    { shift: "Full Day", time: "6:00 AM - 10:00 PM" },
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Affordable Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Perfect Plan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing options to suit your study schedule. Book by the day or save with monthly plans.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-lg border-2 transition-all hover-lift ${
                plan.popular ? "border-primary" : "border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl ${plan.popular ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                  <plan.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-card-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </div>

              {/* Prices */}
              <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-border">
                <div className="text-center">
                  <p className="text-2xl font-bold text-card-foreground">₹{plan.prices.halfDay}</p>
                  <p className="text-xs text-muted-foreground">Half Day</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-card-foreground">₹{plan.prices.fullDay}</p>
                  <p className="text-xs text-muted-foreground">Full Day</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">₹{plan.prices.monthly}</p>
                  <p className="text-xs text-muted-foreground">Monthly</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                }`}
                onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>

        {/* Timings */}
        <div className="bg-card rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-serif font-bold text-card-foreground">Library Timings</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {timings.map((timing, index) => (
              <div key={index} className="bg-muted p-4 rounded-xl text-center">
                <p className="font-semibold text-card-foreground">{timing.shift}</p>
                <p className="text-sm text-muted-foreground">{timing.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
