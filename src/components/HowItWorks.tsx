import { Store, MapPin, Clock, Trophy } from 'lucide-react';

const steps = [
  {
    icon: Store,
    title: 'Dukaan Post Kare',
    description: 'Restaurants, hostels, aur event organizers apna bacha hua khana photos aur pickup time ke saath list karte hain.',
    color: 'bg-primary',
  },
  {
    icon: MapPin,
    title: 'Aap Dhundhein',
    description: 'Aas-paas ke khane ki listings browse karein, dekhein kya available hai - Biryani, Dal, Paneer aur bahut kuch!',
    color: 'bg-secondary',
  },
  {
    icon: Clock,
    title: 'Claim Karein & Pickup',
    description: 'Turant apna khana reserve karein aur scheduled time par pick up karein. Aasaan aur jaldi!',
    color: 'bg-primary',
  },
  {
    icon: Trophy,
    title: 'Rewards Paayein',
    description: 'Har rescue ke liye points paayein! Leaderboard par chadhein aur exclusive badges unlock karein.',
    color: 'bg-secondary',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Aasaan Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">PlateUp</span> Kaise Kaam Karta Hai
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khana bachana kabhi itna aasaan nahi tha. Aaj hi fark laana shuru karein in simple steps se.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-border h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300`}
                  >
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
