# Mock Channel Crypto Trading Game - Technical Specification

## Overview
A browser-based mock cryptocurrency trading game that simulates channel trading strategies using real-time crypto price data. This is a complete modernization of the existing GDAX channel bot concept.

## Core Concept
- User views a real-time cryptocurrency price chart
- User can draw channel lines (support/resistance) over the chart
- When price crosses channel boundaries, automatic mock trades are executed
- Sidebar displays current balance and recent trade history
- Simple controls: On/Off toggle and Reset balance button
- This is a SIMULATION/GAME - no real money or trading APIs involved

## Technology Stack (2026 Modern Best Practices)

### Frontend Framework
- **React 18+** with TypeScript
- **Vite** as build tool (replaces Create React App)
  - Lightning-fast HMR and dev server
  - Optimized production builds
  - Native ESM support

### State Management
- **Zustand** - Lightweight, simple, and performant
  - Alternative: React Context + useReducer for simpler needs

### Charting Library
- **TradingView Lightweight Charts**
  - Open source, 35KB bundle size
  - Canvas-based, excellent performance
  - Built specifically for financial charts
  - Supports candlesticks, drawing tools, and overlays

### Real-time Data Source
- **Binance WebSocket API** (Primary choice)
  - Free, no authentication required for market data
  - Low latency, high reliability
  - Supports multiple trading pairs
  - URL: `wss://stream.binance.com:9443/ws/btcusdt@kline_1m`
  
- **Fallback: Coinbase WebSocket**
  - URL: `wss://ws-feed.pro.coinbase.com`

### Styling
- **Tailwind CSS**
  - Modern utility-first approach
  - Excellent performance
  - Easy theming and dark mode
  - Reduces CSS bundle size

### Testing Stack
- **Vitest** - Vite-native testing framework
  - Fast, uses same config as Vite
  - Compatible with Jest API
- **React Testing Library** - Component testing
- **Playwright** - E2E testing (optional for later)

### Code Quality
- **TypeScript** - Type safety throughout
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks

## Architecture

### Project Structure
```
src/
├── components/
│   ├── Chart/
│   │   ├── Chart.tsx              # Main chart container
│   │   ├── ChartDrawingTools.tsx  # Drawing interface
│   │   └── ChartControls.tsx      # Chart settings
│   ├── Sidebar/
│   │   ├── BalanceDisplay.tsx     # Show current balance
│   │   ├── TradeHistory.tsx       # Recent trades list
│   │   └── Controls.tsx           # On/Off, Reset buttons
│   └── Layout/
│       └── MainLayout.tsx         # App layout wrapper
├── services/
│   ├── websocket/
│   │   ├── BinanceWebSocket.ts    # WebSocket connection
│   │   ├── DataNormalizer.ts      # Normalize price data
│   │   └── ConnectionManager.ts   # Handle reconnection
│   └── trading/
│       ├── TradingEngine.ts       # Trade execution logic
│       ├── ChannelDetector.ts     # Channel line logic
│       └── OrderSimulator.ts      # Simulate order fills
├── store/
│   ├── chartStore.ts              # Chart state
│   ├── tradingStore.ts            # Trading state
│   └── walletStore.ts             # Balance state
├── types/
│   ├── price.types.ts
│   ├── trade.types.ts
│   └── chart.types.ts
├── utils/
│   ├── priceCalculations.ts
│   └── formatters.ts
├── hooks/
│   ├── usePriceStream.ts          # WebSocket hook
│   ├── useTrading.ts              # Trading logic hook
│   └── useChannel.ts              # Channel drawing hook
└── App.tsx
```

## Feature Breakdown

### 1. Real-time Price Streaming
**Description**: Connect to Binance WebSocket and stream live cryptocurrency prices

**Components**:
- BinanceWebSocket service
- DataNormalizer for consistent data format
- ConnectionManager for reliability
- usePriceStream custom hook

**Data Structure**:
```typescript
interface PriceData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  symbol: string;
}
```

### 2. Interactive Chart with Drawing Tools
**Description**: Display price chart with ability to draw channel lines

**Components**:
- Chart component using TradingView Lightweight Charts
- ChartDrawingTools for drawing interface
- Drawing state management

**Features**:
- Candlestick chart display
- Draw trend lines
- Draw horizontal support/resistance lines
- Save/load drawn lines
- Delete lines
- Zoom and pan

**Channel Line Structure**:
```typescript
interface ChannelLine {
  id: string;
  type: 'support' | 'resistance' | 'trend';
  points: Array<{ time: number; price: number }>;
  active: boolean;
}
```

### 3. Mock Trading Engine
**Description**: Simulate trades when price crosses channel boundaries

**Logic**:
1. Monitor current price against active channel lines
2. When price crosses a buy line (support), execute mock buy
3. When price crosses a sell line (resistance), execute mock sell
4. Update wallet balances
5. Record trade history

**Trade Structure**:
```typescript
interface Trade {
  id: string;
  timestamp: number;
  type: 'buy' | 'sell';
  price: number;
  amount: number;
  total: number;
  channelLineId: string;
}
```

### 4. Wallet/Balance Management
**Description**: Track mock USD and crypto balances

**Initial State**:
- USD: $10,000
- BTC: 0
- ETH: 0 (optional additional pairs)

**Features**:
- Display current balances
- Calculate total portfolio value
- Show profit/loss
- Reset to initial state

### 5. Control Panel
**Description**: Simple controls for the trading simulation

**Controls**:
- **On/Off Toggle**: Start/stop automated trading
- **Reset Button**: Reset balances to initial $10,000
- **Symbol Selector**: Choose BTC, ETH, etc. (optional)

### 6. Trade History Sidebar
**Description**: Display recent trade executions

**Features**:
- List last 20 trades
- Show timestamp, type, price, amount
- Color code: green for profitable, red for losses
- Auto-scroll to newest trade
- Clear history option

## User Flow

1. **Initial Load**:
   - Chart loads with streaming BTC price data
   - Balance shows $10,000 USD, 0 BTC
   - Trading is OFF by default

2. **Setting Up Channels**:
   - User clicks "Draw Support Line" button
   - User clicks on chart to place support line
   - User clicks "Draw Resistance Line" button
   - User clicks on chart to place resistance line
   - Lines appear on chart with labels

3. **Starting Trading**:
   - User clicks "Start Trading" button
   - Trading engine activates
   - When price crosses support line → Auto buy
   - When price crosses resistance line → Auto sell
   - Trades appear in history sidebar
   - Balance updates in real-time

4. **Monitoring**:
   - Chart continues updating with live prices
   - User can see executed trades
   - User can see current P&L
   - User can draw additional lines

5. **Reset**:
   - User clicks "Reset" button
   - Balances reset to $10,000 USD
   - Trade history clears
   - Channel lines remain (optional: clear them too)

## Development Phases

### Phase 1: Project Setup (Est: 2-4 hours)
- Initialize Vite + React + TypeScript project
- Configure ESLint, Prettier, Vitest
- Set up Tailwind CSS
- Create basic project structure
- Set up Git hooks with Husky

### Phase 2: Data Layer (Est: 4-6 hours)
- Implement Binance WebSocket connection
- Build DataNormalizer
- Create ConnectionManager with reconnection
- Build usePriceStream hook
- Add error handling
- Write tests for services

### Phase 3: Chart Component (Est: 6-8 hours)
- Integrate TradingView Lightweight Charts
- Build Chart component
- Implement candlestick display
- Add real-time price updates
- Create drawing tools UI
- Implement channel line drawing logic
- Add line persistence (localStorage)

### Phase 4: Trading Engine (Est: 6-8 hours)
- Build TradingEngine service
- Implement ChannelDetector logic
- Create OrderSimulator
- Build trade execution logic
- Add wallet balance management
- Create Zustand stores
- Write comprehensive tests

### Phase 5: UI Components (Est: 4-6 hours)
- Build BalanceDisplay component
- Create TradeHistory component
- Build Controls component
- Implement MainLayout
- Add responsive design
- Style with Tailwind CSS

### Phase 6: Integration & Testing (Est: 4-6 hours)
- Integrate all components
- Add integration tests
- Test trading scenarios
- Fix bugs
- Performance optimization
- Add loading states and error boundaries

### Phase 7: Documentation & Polish (Est: 2-4 hours)
- Write README with setup instructions
- Add inline code documentation
- Create user guide
- Add demo video/screenshots
- Final code review

## Future Enhancements (Post-MVP)

### Short-term:
- Multiple trading pairs (ETH, LTC, etc.)
- Multiple timeframes (1m, 5m, 1h, 1d)
- More drawing tools (Fibonacci, rectangles)
- Trade statistics dashboard
- Export trade history (CSV)
- Dark/Light theme toggle

### Long-term:
- Backtesting mode with historical data
- Multiple strategy templates
- Advanced order types (stop-loss, take-profit)
- Paper trading leaderboard
- Real exchange API integration (Binance, Coinbase)
- Mobile responsive design
- PWA capabilities

## Performance Targets

- Initial page load: < 2s
- Chart frame rate: 60 FPS
- WebSocket reconnection: < 5s
- Bundle size: < 500KB (gzipped)
- Lighthouse score: > 90

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## API Rate Limits

### Binance WebSocket:
- Connections: Up to 10 per IP
- No authentication required for public data
- Auto-reconnect on disconnect

### Data Updates:
- 1-minute candlesticks
- Updates every second for current candle
- Historical data: last 100 candles on load

## Security Considerations

- No real API keys needed (mock/simulation only)
- No sensitive data storage
- No backend required
- Client-side only implementation
- Safe to deploy as static site

## Success Criteria

1. ✅ Real-time price chart displays correctly
2. ✅ User can draw channel lines on chart
3. ✅ Trading engine executes mock trades at channel boundaries
4. ✅ Balance updates reflect trades correctly
5. ✅ Trade history displays recent executions
6. ✅ Controls work as expected (On/Off, Reset)
7. ✅ Performance meets targets
8. ✅ Code is well-tested (>80% coverage)
9. ✅ Documentation is complete
10. ✅ Deployed and accessible via URL

## Deployment

### Static Hosting Options:
- **Vercel** (Recommended)
  - One-click deploy from GitHub
  - Automatic HTTPS
  - Edge network CDN
  - Free tier available

- **Netlify**
  - Similar to Vercel
  - Great CI/CD
  - Free tier available

- **GitHub Pages**
  - Free for public repos
  - Simple deployment
  - Custom domain support

### Build Command:
```bash
npm run build
```

### Output:
- Static files in `dist/` directory
- Ready for deployment to any static host

## Development Workflow

1. Create feature branch from `main`
2. Implement feature with tests
3. Run tests: `npm test`
4. Run linter: `npm run lint`
5. Create pull request
6. Review and merge
7. Deploy to production

## Getting Started (After Implementation)

```bash
# Clone repository
git clone https://github.com/DonAyers/gdax-channel-bot.git

# Install dependencies
cd gdax-channel-bot
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

```env
# Optional: Override default WebSocket endpoint
VITE_BINANCE_WS_URL=wss://stream.binance.com:9443/ws
VITE_DEFAULT_SYMBOL=btcusdt
VITE_DEFAULT_INTERVAL=1m
VITE_INITIAL_BALANCE=10000
```

## Conclusion

This specification provides a complete roadmap for building a modern, performant mock cryptocurrency trading game. The chosen stack (React + Vite + TypeScript + TradingView Charts + Binance WebSocket) represents current best practices in 2026 and provides an excellent foundation for future expansion into real trading capabilities.
