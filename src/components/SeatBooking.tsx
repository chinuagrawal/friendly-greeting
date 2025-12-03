import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Wind, Fan, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

type SeatStatus = "available" | "morning" | "evening" | "booked";
type Shift = "morning" | "evening" | "fullday";

interface Seat {
  id: number;
  type: "ac" | "fan";
  status: SeatStatus;
}

// Mock data for seats
const generateSeats = (): Seat[] => {
  const seats: Seat[] = [];
  for (let i = 1; i <= 34; i++) {
    const type = i <= 20 ? "ac" : "fan";
    const statuses: SeatStatus[] = ["available", "morning", "evening", "booked"];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    seats.push({ id: i, type, status });
  }
  return seats;
};

const SeatBooking = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [seats] = useState<Seat[]>(generateSeats());
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);
  const [selectedShift, setSelectedShift] = useState<Shift>("fullday");

  const pricing = {
    ac: { morning: 50, evening: 50, fullday: 80 },
    fan: { morning: 30, evening: 30, fullday: 50 },
  };

  const getStatusColor = (status: SeatStatus) => {
    switch (status) {
      case "available": return "bg-emerald-500 hover:bg-emerald-600";
      case "morning": return "bg-amber-500 hover:bg-amber-600";
      case "evening": return "bg-orange-500 hover:bg-orange-600";
      case "booked": return "bg-destructive cursor-not-allowed opacity-60";
    }
  };

  const getStatusLabel = (status: SeatStatus) => {
    switch (status) {
      case "available": return "Available";
      case "morning": return "Morning Booked";
      case "evening": return "Evening Booked";
      case "booked": return "Fully Booked";
    }
  };

  const canBook = (seat: Seat) => {
    if (seat.status === "booked") return false;
    if (selectedShift === "fullday" && seat.status !== "available") return false;
    if (selectedShift === "morning" && seat.status === "morning") return false;
    if (selectedShift === "evening" && seat.status === "evening") return false;
    return true;
  };

  const handleSeatClick = (seat: Seat) => {
    if (!canBook(seat)) {
      toast({
        title: "Seat Unavailable",
        description: `Seat ${seat.id} is not available for ${selectedShift} shift.`,
        variant: "destructive",
      });
      return;
    }
    setSelectedSeat(seat.id);
  };

  const handleBook = () => {
    if (!selectedSeat) {
      toast({
        title: "Select a Seat",
        description: "Please select a seat to continue.",
        variant: "destructive",
      });
      return;
    }
    const seat = seats.find(s => s.id === selectedSeat);
    if (!seat) return;
    
    const price = pricing[seat.type][selectedShift];
    toast({
      title: "Booking Confirmed! 🎉",
      description: `Seat ${selectedSeat} (${seat.type.toUpperCase()}) booked for ${selectedShift} on ${format(date, "PPP")}. Total: ₹${price}`,
    });
    setSelectedSeat(null);
  };

  const selectedSeatData = seats.find(s => s.id === selectedSeat);

  return (
    <section id="booking" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Book Your <span className="text-primary">Perfect Seat</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred date, shift, and seat. Our interactive seat map shows real-time availability.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="space-y-6">
            {/* Date Picker */}
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-card-foreground mb-4">Select Date</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => d && setDate(d)}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Shift Selection */}
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-card-foreground mb-4">Select Shift</h3>
              <div className="grid grid-cols-3 gap-2">
                {(["morning", "evening", "fullday"] as Shift[]).map((shift) => (
                  <button
                    key={shift}
                    onClick={() => setSelectedShift(shift)}
                    className={cn(
                      "py-3 px-4 rounded-lg text-sm font-medium transition-all",
                      selectedShift === shift
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    )}
                  >
                    {shift === "fullday" ? "Full Day" : shift.charAt(0).toUpperCase() + shift.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-card-foreground mb-4">Seat Status</h3>
              <div className="space-y-3">
                {[
                  { status: "available" as SeatStatus, color: "bg-emerald-500" },
                  { status: "morning" as SeatStatus, color: "bg-amber-500" },
                  { status: "evening" as SeatStatus, color: "bg-orange-500" },
                  { status: "booked" as SeatStatus, color: "bg-destructive" },
                ].map(({ status, color }) => (
                  <div key={status} className="flex items-center gap-3">
                    <div className={cn("w-4 h-4 rounded", color)} />
                    <span className="text-sm text-muted-foreground">{getStatusLabel(status)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Info */}
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Info className="w-4 h-4" /> Pricing
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AC - Half Day</span>
                  <span className="font-medium text-card-foreground">₹50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AC - Full Day</span>
                  <span className="font-medium text-card-foreground">₹80</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fan - Half Day</span>
                  <span className="font-medium text-card-foreground">₹30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fan - Full Day</span>
                  <span className="font-medium text-card-foreground">₹50</span>
                </div>
              </div>
            </div>
          </div>

          {/* Seat Map */}
          <div className="lg:col-span-2 bg-card p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-card-foreground">Seat Map</h3>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Wind className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">AC Zone (1-20)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Fan className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">Fan Zone (21-34)</span>
                </div>
              </div>
            </div>

            {/* AC Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Wind className="w-5 h-5 text-primary" />
                <span className="font-medium text-card-foreground">AC Section</span>
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {seats.filter(s => s.type === "ac").map((seat) => (
                  <button
                    key={seat.id}
                    onClick={() => handleSeatClick(seat)}
                    className={cn(
                      "aspect-square rounded-lg flex items-center justify-center text-sm font-medium text-white transition-all",
                      getStatusColor(seat.status),
                      selectedSeat === seat.id && "ring-2 ring-offset-2 ring-primary scale-110",
                      !canBook(seat) && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    {seat.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Fan Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Fan className="w-5 h-5 text-accent" />
                <span className="font-medium text-card-foreground">Fan Section</span>
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-7 gap-2">
                {seats.filter(s => s.type === "fan").map((seat) => (
                  <button
                    key={seat.id}
                    onClick={() => handleSeatClick(seat)}
                    className={cn(
                      "aspect-square rounded-lg flex items-center justify-center text-sm font-medium text-white transition-all",
                      getStatusColor(seat.status),
                      selectedSeat === seat.id && "ring-2 ring-offset-2 ring-primary scale-110",
                      !canBook(seat) && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    {seat.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Booking Summary */}
            {selectedSeat && selectedSeatData && (
              <div className="bg-muted p-4 rounded-lg animate-fade-in">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="font-semibold text-card-foreground">
                      Seat #{selectedSeat} ({selectedSeatData.type.toUpperCase()})
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {format(date, "PPP")} • {selectedShift === "fullday" ? "Full Day" : selectedShift.charAt(0).toUpperCase() + selectedShift.slice(1)}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-2xl font-bold text-primary">
                      ₹{pricing[selectedSeatData.type][selectedShift]}
                    </p>
                    <Button onClick={handleBook} className="bg-primary hover:bg-primary/90">
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeatBooking;
