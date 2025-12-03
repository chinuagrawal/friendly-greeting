import { Target, Heart, Award, BookOpen } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide students and professionals with the perfect environment for focused study and personal growth.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Quality, affordability, and creating a supportive community for learners of all backgrounds.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain high standards in cleanliness, amenities, and customer service to ensure your success.",
    },
  ];

  const founders = [
    {
      name: "Founder Name",
      role: "Founder & Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      quote: "Education is the key to unlocking potential.",
    },
    {
      name: "Co-Founder Name",
      role: "Co-Founder & Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
      quote: "Creating spaces where dreams take shape.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Welcome to <span className="text-primary">Kanha Library</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Established with a vision to support students in their academic journey, Kanha Library 
            has become a trusted name in providing quality study spaces. We understand the importance 
            of a conducive environment for learning and growth.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-lg hover-lift border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Founders Section */}
        <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground text-center mb-12">
            Meet Our Founders
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary/30 object-cover"
                />
                <h4 className="text-xl font-semibold text-primary-foreground">{founder.name}</h4>
                <p className="text-primary/80 text-sm mb-4">{founder.role}</p>
                <p className="text-primary-foreground/80 italic">"{founder.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
