export interface Screenshot {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface GameMode {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  ctaText: string;
  badges?: string[];
  levels?: string[];
  gradient: string;
}

export interface PlayerProfile {
  username: string;
  avatar: string;
  level: number;
  xp: number;
  maxXp: number;
  victories: number;
  rank: string;
  winRate: number;
  bestScore: number;
  avgAttempts: number;
  gamesPlayed: number;
  achievements: {
    id: string;
    title: string;
    icon: string;
    unlocked: boolean;
  }[];
}
