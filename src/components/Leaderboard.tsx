import { Trophy, Medal, Award, Crown, Flame } from 'lucide-react';

const topUsers = [
  { rank: 1, name: 'Sarah Green', points: 12450, meals: 89, badge: '🌟 Eco Hero', avatar: '👩‍🦰' },
  { rank: 2, name: 'Mike Chen', points: 10280, meals: 76, badge: '🏆 Food Saver', avatar: '👨' },
  { rank: 3, name: 'Emma Wilson', points: 9150, meals: 68, badge: '💚 Green Champion', avatar: '👩' },
  { rank: 4, name: 'James Park', points: 7820, meals: 54, badge: '⭐ Rising Star', avatar: '👨‍🦱' },
  { rank: 5, name: 'Lisa Johnson', points: 6540, meals: 47, badge: '🌱 Sustainability Pro', avatar: '👩‍🦳' },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-6 h-6 text-yellow-500" />;
    case 2:
      return <Medal className="w-6 h-6 text-gray-400" />;
    case 3:
      return <Award className="w-6 h-6 text-amber-600" />;
    default:
      return <span className="w-6 h-6 flex items-center justify-center font-bold text-muted-foreground">#{rank}</span>;
  }
};

const getRankStyle = (rank: number) => {
  switch (rank) {
    case 1:
      return 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/50 shadow-yellow-500/20';
    case 2:
      return 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400/50 shadow-gray-400/20';
    case 3:
      return 'bg-gradient-to-r from-amber-600/20 to-orange-600/20 border-amber-600/50 shadow-amber-600/20';
    default:
      return 'bg-card border-border';
  }
};

const Leaderboard = () => {
  return (
    <section id="leaderboard" className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            Gamification
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Top <span className="gradient-text">Food Heroes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our community champions who are leading the fight against food waste. Will you join them?
          </p>
        </div>

        {/* Leaderboard */}
        <div className="space-y-4">
          {topUsers.map((user, index) => (
            <div
              key={user.name}
              className={`relative flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transform hover:-translate-x-2 transition-all duration-300 ${getRankStyle(user.rank)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rank */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-md">
                {getRankIcon(user.rank)}
              </div>

              {/* Avatar */}
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent flex items-center justify-center text-2xl sm:text-3xl border-2 border-primary/30">
                {user.avatar}
              </div>

              {/* User Info */}
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-bold truncate">{user.name}</h3>
                  {user.rank === 1 && <Flame className="w-5 h-5 text-orange-500 animate-pulse" />}
                </div>
                <p className="text-sm text-muted-foreground">{user.badge}</p>
              </div>

              {/* Stats */}
              <div className="flex-shrink-0 text-right">
                <div className="text-xl sm:text-2xl font-bold text-primary">{user.points.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">{user.meals} meals saved</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Start saving food today and climb the leaderboard!</p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Join the Challenge
          </button>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
