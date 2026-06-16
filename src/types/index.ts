export interface Trade {
  id: string;
  brokerLogo: string;
  asset: string;
  assetFlag?: string;
  investmentAmount: number;
  payout: number;
  profit: number;
  expiryTime: string;
  outcome: 'win' | 'loss';
  emotion: EmotionType;
  setupType: SetupType;
  timestamp: Date;
  screenshotUrl?: string;
  notes?: string;
  riskLevel: 'low' | 'medium' | 'high';
}

export type EmotionType = 
  | 'disciplined'
  | 'greedy'
  | 'fearful'
  | 'revenge_trading'
  | 'confident'
  | 'bored';

export type SetupType =
  | 'support_resistance'
  | 'trendline_bounce'
  | 'ma_cross'
  | 'price_action'
  | 'blind_guess';

export interface BrokerConfig {
  name: string;
  logo: string;
  apiKey?: string;
  enabled: boolean;
}

export interface PsychologicalPattern {
  emotion: EmotionType;
  consecutiveLosses: number;
  winRate: number;
  lastDetected: Date;
  severity: 'low' | 'medium' | 'high';
}

export interface DailyStats {
  date: Date;
  totalTrades: number;
  wins: number;
  losses: number;
  totalProfit: number;
  winRate: number;
  averageProfit: number;
  dailyGoal: number;
  goalProgress: number;
}

export interface NotificationAlert {
  id: string;
  type: 'psychology' | 'profit' | 'reminder' | 'warning';
  message: string;
  icon: string;
  timestamp: Date;
  dismissed: boolean;
}

export interface WebhookConfig {
  telegramToken?: string;
  telegramChatId?: string;
  discordWebhookUrl?: string;
  enabled: boolean;
}
