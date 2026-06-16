# 🎨 Satyam Trader - Premium Binary Trading Journal

## Overview
Satyam Trader is a production-ready, cross-platform binary trading journal application built with Next.js 14+, featuring a luxury Liquid Glass (Glassmorphism) UI design, advanced psychological tracking, and automated OCR-based trade analysis.

## ✨ Key Features

### 🎯 Core Functionality
- **Automated OCR Trade Upload**: Drag-and-drop screenshot analysis with AI-powered trade extraction
- **Psychological Emotion Tracking**: Real-time emotion wheel with behavioral pattern detection
- **AI Trading Advisor**: Smart alerts and actionable coaching based on trading patterns
- **Live Status Bar**: Real-time profit/loss tracking, market trends, and smart reminders
- **Broker Integration**: Support for Quotex, IQ Option, Pocket Option, Olymp Trade
- **Telegram/Discord Sync**: Automated trade logging to personal channels

### 🎨 Design & UX
- **Liquid Glass UI**: Premium frosted glass morphism design with dynamic gradients
- **Smooth Animations**: Framer Motion micro-interactions and glass panel warping effects
- **Responsive Design**: Seamless adaptation from ultra-wide desktops to Android mobile
- **Dark Mode Premium**: Deep slate backgrounds with neon emerald & crimson accents

### 📊 Analytics & Insights
- **Trade History Dashboard**: Comprehensive trade statistics and performance metrics
- **Emotional Pattern Analysis**: Identify behavioral triggers and trading biases
- **Daily Goal Tracking**: Visual progress indicators with psychological milestones
- **Advanced Filtering**: Filter trades by emotion, outcome, asset, and time period

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Modern browser (Chrome, Firefox, Safari, Edge)
- Android browser for mobile testing

### Installation

```bash
# Clone the repository
git clone https://github.com/Quotexautobot/satyam-trader.git
cd satyam-trader

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Liquid Glass styling
│   ├── page.tsx           # Landing & onboarding pages
│   └── dashboard/         # Main trading journal dashboard
├── components/
│   ├── LiquidGlassShell.tsx       # Premium glass container wrapper
│   ├── Dashboard/                  # Dashboard modules
│   │   ├── TradeUploadZone.tsx    # OCR screenshot upload
│   │   ├── EmotionWheel.tsx       # Psychological tracker
│   │   ├── StatusBar.tsx          # Live notifications & stats
│   │   ├── TradeHistory.tsx       # Trade log table
│   │   └── AIAdvisor.tsx          # Smart coaching alerts
│   ├── Onboarding/                # Landing page sequence
│   ├── common/                    # Shared UI components
│   └── animations/                # Reusable Framer Motion effects
├── stores/
│   ├── tradeStore.ts      # Zustand trade state management
│   ├── emotionStore.ts    # Emotion tracking store
│   └── notificationStore.ts
├── lib/
│   ├── ocr.ts             # Tesseract.js OCR engine
│   ├── brokerIntegration.ts
│   ├── webhookSync.ts     # Telegram/Discord integration
│   └── aiAdvisor.ts       # Behavioral analysis engine
├── types/
│   └── index.ts           # TypeScript type definitions
├── hooks/
│   ├── useTradeStore.ts
│   ├── useEmotionTracking.ts
│   └── useStatusBar.ts
└── styles/
    └── globals.css        # Global Liquid Glass styling
```

## 🎨 Design System

### Color Palette
- **Dark Base**: `#0B0F19` (Deep Dark Slate)
- **Success/Win**: `#00FFCC` (Emerald Glow)
- **Loss/Alert**: `#FF3366` (Neon Crimson)
- **Accent**: `#00D4FF` (Cyan Glow)
- **Glass Light**: `#1A1F2E` (Card Background)

### Typography
- **Headings**: Syne, Clash Display, or Outfit
- **Body**: Inter, Helvetica Neue
- **Monospace**: Fira Code (for chart values)

### Glass Effect Specifications
```css
backdrop-filter: blur(25px) saturate(180%);
background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(255, 255, 255, 0.08);
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```
# Broker Configuration
NEXT_PUBLIC_QUOTEX_API_KEY=your_key
NEXT_PUBLIC_IQ_OPTION_API_KEY=your_key

# Telegram Bot
TELEGRAM_BOT_TOKEN=your_token
TELEGRAM_CHAT_ID=your_chat_id

# Discord Webhook
DISCORD_WEBHOOK_URL=your_webhook_url
```

## 📱 Responsive Breakpoints

- **Desktop**: 1920px+ (4K displays)
- **Tablet**: 768px - 1024px
- **Mobile**: 360px - 767px (Android focus)

## 🤖 AI Advisor Engine

The app includes an intelligent coaching system that:

1. **Pattern Detection**: Identifies emotional trading triggers
2. **Risk Assessment**: Flags high-risk behavioral patterns
3. **Smart Alerts**: Delivers timely psychological interventions
4. **Actionable Advice**: Provides context-aware trading guidance

### Example Alert Flow
```
3 consecutive losses under "Revenge Trading" emotion
→ System triggers blocking modal
→ Displays: "Step away for 15 minutes. Protect capital."
→ Logs behavioral pattern for analysis
```

## 🔌 Integrations

### Telegram Bot
```typescript
// Automatic trade logging to private Telegram channel
Format: "🎯 EUR/USD | $100 Investment | ✅ +$85 Win | 1min | Disciplined"
```

### Discord Webhook
```typescript
// Embed-based trade notifications with emojis and timestamps
Color-coded by win/loss status
```

## 📊 OCR Trade Extraction

Supports extraction of:
- Market/Asset (EUR/USD, BTC, Crypto IDX, etc.)
- Investment Amount
- Payout/Profit
- Expiry Time
- Win/Loss Outcome
- Broker Logo & Asset Flag

## 🔐 Privacy & Storage

- **Local First**: All trades stored in IndexedDB locally
- **Encrypted**: Optional end-to-end encryption for sensitive data
- **Cloud Ready**: Architecture supports Supabase/Firebase integration
- **No Tracking**: Zero telemetry or analytics

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Docker
```bash
docker build -t satyam-trader .
docker run -p 3000:3000 satyam-trader
```

## 📝 License

MIT License - See LICENSE.md for details

## 🤝 Contributing

Contributions are welcome! Please read CONTRIBUTING.md for guidelines.

## 📞 Support

For support, reach out via GitHub Issues or the documentation wiki.

---

**Built with ❤️ by Quotexautobot | Premium Binary Trading Journal**
