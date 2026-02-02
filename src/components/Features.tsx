import { Bell, MapPin, Star, Shield, Zap, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    description: 'Get notified instantly when new food is available near you. Never miss a chance to save!',
  },
  {
    icon: MapPin,
    title: 'Location-Based',
    description: 'Find surplus Biryani, Dosa, Chole Bhature from nearby restaurants, dhabas, and events.',
  },
  {
    icon: Star,
    title: 'Gamification',
    description: 'Earn points, unlock badges, and compete on leaderboards. Make saving food fun!',
  },
  {
    icon: Shield,
    title: 'Verified Listings',
    description: 'All food providers are verified for quality and safety. Eat with confidence.',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Reserve your food in seconds. Quick, simple, and hassle-free experience.',
  },
  {
    icon: MessageCircle,
    title: 'Community Reviews',
    description: 'Read and leave reviews to help others find the best food rescues in your area.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-[200px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-tr-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to rescue food and make an impact, all in one platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 w-14 h-14 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
