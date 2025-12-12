import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "UPSC Aspirant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Kanha Library has been my go-to study spot for months. The AC section is perfect for long study sessions. Highly recommended for serious students!",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Medical Student",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Clean, quiet, and affordable. The staff is very helpful and the atmosphere is perfect for concentration. Best library in town!",
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "CA Student",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The online booking system is super convenient. I love that I can reserve my favorite seat in advance. Great facilities overall!",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Engineering Student",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      text: "Excellent environment for studying. The fan section is great value for money. WiFi is fast and reliable.",
    },
    {
      id: 5,
      name: "Vikash Singh",
      role: "Government Exam Prep",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "I've tried many libraries but Kanha stands out. The peaceful environment and helpful staff make all the difference.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Student Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied students who have made Kanha Library their study home.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 hover-lift"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-card-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-gold fill-gold"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "500+", label: "Happy Students" },
            { value: "4.8", label: "Average Rating" },
            { value: "50+", label: "Google Reviews" },
            { value: "2+", label: "Years of Service" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
