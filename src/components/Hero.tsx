import { ArrowRight, Sparkles, Users, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float stagger-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl" />
      </div>

      {/* Floating Food Icons */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <span className="absolute top-[15%] left-[10%] text-6xl animate-float opacity-20">🍕</span>
        <span className="absolute top-[25%] right-[15%] text-5xl animate-float stagger-2 opacity-20">🥗</span>
        <span className="absolute bottom-[30%] left-[20%] text-4xl animate-float stagger-3 opacity-20">🍎</span>
        <span className="absolute bottom-[20%] right-[10%] text-6xl animate-float stagger-4 opacity-20">🥪</span>
        <span className="absolute top-[40%] left-[5%] text-5xl animate-float stagger-5 opacity-20">🍲</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-bounce-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Join the Food Revolution</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slide-up">
          Save Food.{' '}
          <span className="gradient-text">Feed People.</span>
          <br />
          <span className="text-foreground/80">Earn Rewards.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up stagger-2">
          Connect with restaurants, hostels, and events to rescue surplus food in real-time. 
          Reduce waste, help your community, and earn points for every plate you save!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up stagger-3">
          <Button
            size="lg"
            className="w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Saving Food
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-lg px-8 py-6 border-2 hover:bg-accent transition-all duration-300"
          >
            List Your Surplus
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Utensils, value: '50K+', label: 'Meals Saved' },
            { icon: Users, value: '10K+', label: 'Active Users' },
            { icon: Sparkles, value: '1M+', label: 'Points Earned' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up stagger-${index + 3}`}
            >
              <stat.icon className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
