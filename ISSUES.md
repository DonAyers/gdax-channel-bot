# GitHub Issues for Mock Channel Crypto Trading Game

This file contains detailed issue descriptions that can be copied into GitHub Issues. Each issue is self-contained and can be worked on sequentially or in parallel depending on dependencies.

---

## Issue #1: Project Setup and Modern Build Configuration

**Title**: Setup Vite + React 18 + TypeScript Project Structure

**Labels**: `setup`, `infrastructure`, `good-first-issue`

**Description**:

Set up a modern development environment using Vite, React 18, and TypeScript to replace the existing Create React App setup.

**Tasks**:
- [ ] Initialize new Vite project with React + TypeScript template
- [ ] Configure TypeScript with strict mode
- [ ] Set up ESLint with React and TypeScript rules
- [ ] Configure Prettier for code formatting
- [ ] Set up Vitest for unit testing
- [ ] Configure React Testing Library
- [ ] Add Husky for pre-commit hooks
- [ ] Create basic project folder structure (components/, services/, store/, utils/, types/)
- [ ] Add .gitignore for node_modules, dist, .env files
- [ ] Create basic README with setup instructions
- [ ] Remove old Create React App dependencies

**Dependencies**: None

**Acceptance Criteria**:
- `npm run dev` starts development server
- `npm run build` creates production build
- `npm test` runs test suite
- `npm run lint` checks code quality
- Pre-commit hooks run linter and tests
- TypeScript compilation has no errors

**Estimated Time**: 2-4 hours

---

## Issue #2: Integrate Tailwind CSS for Styling

**Title**: Set Up Tailwind CSS for Modern Styling

**Labels**: `setup`, `styling`

**Description**:

Replace existing CSS with Tailwind CSS for a modern utility-first styling approach.

**Tasks**:
- [ ] Install Tailwind CSS and dependencies
- [ ] Configure `tailwind.config.js`
- [ ] Set up PostCSS configuration
- [ ] Create base styles file with Tailwind directives
- [ ] Configure purging for production builds
- [ ] Add dark mode support (optional)
- [ ] Create reusable color palette
- [ ] Test Tailwind classes work in components
- [ ] Remove old CSS files

**Dependencies**: Issue #1

**Acceptance Criteria**:
- Tailwind utilities work in components
- Development build includes all utilities
- Production build is optimized and purged
- Custom theme colors are defined
- Dark mode toggle works (if implemented)

**Estimated Time**: 2-3 hours

---

## Issue #3: Implement Binance WebSocket Connection Service

**Title**: Create Real-time Price Data Stream using Binance WebSocket

**Labels**: `feature`, `data-layer`, `websocket`

**Description**:

Build a robust WebSocket service to stream real-time cryptocurrency price data from Binance's public API.

**Tasks**:
- [ ] Create `BinanceWebSocket.ts` service class
- [ ] Implement connection to Binance WebSocket API
- [ ] Add automatic reconnection logic
- [ ] Handle connection errors gracefully
- [ ] Parse incoming kline/candlestick data
- [ ] Create TypeScript interfaces for price data
- [ ] Implement data buffering for reliability
- [ ] Add connection status monitoring
- [ ] Write unit tests for WebSocket service
- [ ] Add JSDoc documentation

**WebSocket Endpoint**: `wss://stream.binance.com:9443/ws/btcusdt@kline_1m`

**Dependencies**: Issue #1

**Acceptance Criteria**:
- WebSocket connects successfully to Binance
- Receives real-time candlestick data
- Auto-reconnects on disconnect
- Handles errors without crashing
- All tests pass
- TypeScript types are defined

**Estimated Time**: 4-6 hours

---

## Issue #4: Create Data Normalization and State Management

**Title**: Build Data Normalization Layer and Price State Store

**Labels**: `feature`, `data-layer`, `state-management`

**Description**:

Create a data normalization layer to convert WebSocket data into a consistent format, and set up Zustand store for price state management.

**Tasks**:
- [ ] Install Zustand for state management
- [ ] Create `DataNormalizer.ts` utility
- [ ] Transform Binance data to standard format
- [ ] Create `priceStore.ts` Zustand store
- [ ] Add actions for updating price data
- [ ] Store candlestick history (last 100 candles)
- [ ] Create selectors for derived data
- [ ] Build `usePriceStream` custom hook
- [ ] Write tests for normalizer
- [ ] Write tests for store
- [ ] Add TypeScript types

**Dependencies**: Issue #3

**Acceptance Criteria**:
- WebSocket data is normalized consistently
- Store maintains price history
- Components can subscribe to price updates
- Hook provides clean API for components
- All tests pass
- Types are properly defined

**Estimated Time**: 3-4 hours

---

## Issue #5: Integrate TradingView Lightweight Charts

**Title**: Implement Chart Component with TradingView Lightweight Charts

**Labels**: `feature`, `ui`, `chart`

**Description**:

Integrate TradingView Lightweight Charts library to display real-time cryptocurrency price charts.

**Tasks**:
- [ ] Install `lightweight-charts` package
- [ ] Create `Chart.tsx` component
- [ ] Initialize chart with proper configuration
- [ ] Implement candlestick series
- [ ] Connect to price data store
- [ ] Add real-time chart updates
- [ ] Implement responsive chart sizing
- [ ] Add chart controls (zoom, pan)
- [ ] Style chart to match app theme
- [ ] Handle chart cleanup on unmount
- [ ] Write component tests
- [ ] Add TypeScript types

**Dependencies**: Issue #4

**Acceptance Criteria**:
- Chart displays candlestick data
- Real-time updates work smoothly
- Chart is responsive to window resize
- 60 FPS performance maintained
- Chart controls work correctly
- Component tests pass

**Estimated Time**: 6-8 hours

---

## Issue #6: Implement Channel Drawing Tools

**Title**: Add Interactive Channel Line Drawing to Chart

**Labels**: `feature`, `ui`, `chart`, `drawing`

**Description**:

Implement drawing tools that allow users to draw channel lines (support/resistance) on the price chart.

**Tasks**:
- [ ] Create `ChartDrawingTools.tsx` component
- [ ] Implement drawing mode toggle
- [ ] Add click handlers for placing lines
- [ ] Draw support lines (horizontal)
- [ ] Draw resistance lines (horizontal)
- [ ] Add trend line drawing (optional)
- [ ] Allow line deletion
- [ ] Store drawn lines in state
- [ ] Persist lines to localStorage
- [ ] Load saved lines on startup
- [ ] Create `useChannel` custom hook
- [ ] Add line styling and labels
- [ ] Write tests for drawing logic
- [ ] Add TypeScript interfaces

**Line Types**:
```typescript
type LineType = 'support' | 'resistance' | 'trend';
interface ChannelLine {
  id: string;
  type: LineType;
  price: number;
  timestamp: number;
  active: boolean;
}
```

**Dependencies**: Issue #5

**Acceptance Criteria**:
- User can draw support lines
- User can draw resistance lines
- Lines persist across reloads
- Lines can be deleted
- Lines are visible on chart
- Tests pass for drawing logic

**Estimated Time**: 6-8 hours

---

## Issue #7: Build Mock Trading Engine

**Title**: Create Trading Simulation Engine with Channel Detection

**Labels**: `feature`, `core-logic`, `trading`

**Description**:

Build the core trading engine that simulates buy/sell orders when price crosses drawn channel lines.

**Tasks**:
- [ ] Create `TradingEngine.ts` service
- [ ] Implement `ChannelDetector.ts` for line crossing detection
- [ ] Build `OrderSimulator.ts` for mock order execution
- [ ] Create trade execution logic
- [ ] Implement buy logic when price crosses support
- [ ] Implement sell logic when price crosses resistance
- [ ] Add position tracking
- [ ] Create `tradingStore.ts` Zustand store
- [ ] Build `useTrading` custom hook
- [ ] Write comprehensive tests
- [ ] Add TypeScript types

**Trading Logic**:
- Price crosses ABOVE support → BUY
- Price crosses BELOW resistance → SELL
- Calculate trade amounts based on available balance
- Update positions and balances

**Dependencies**: Issue #4, Issue #6

**Acceptance Criteria**:
- Engine detects line crossings accurately
- Trades execute at correct prices
- Balances update correctly
- Position tracking works
- All tests pass (>90% coverage)
- Logic is well-documented

**Estimated Time**: 6-8 hours

---

## Issue #8: Implement Wallet and Balance Management

**Title**: Create Wallet System for Mock Trading Balance

**Labels**: `feature`, `core-logic`, `wallet`

**Description**:

Build a wallet system to track mock USD and cryptocurrency balances.

**Tasks**:
- [ ] Create `walletStore.ts` Zustand store
- [ ] Define initial balances (USD: $10,000, BTC: 0)
- [ ] Implement balance update logic
- [ ] Track individual positions
- [ ] Calculate total portfolio value
- [ ] Calculate profit/loss
- [ ] Add transaction history
- [ ] Implement reset functionality
- [ ] Build `useWallet` custom hook
- [ ] Write tests for wallet logic
- [ ] Add TypeScript interfaces

**Initial State**:
```typescript
interface Wallet {
  usd: number;
  btc: number;
  initialBalance: number;
  positions: Position[];
  profitLoss: number;
}
```

**Dependencies**: Issue #1

**Acceptance Criteria**:
- Initial balance is $10,000 USD
- Balance updates reflect trades
- P&L calculation is accurate
- Reset returns to initial state
- All tests pass
- Types are defined

**Estimated Time**: 3-4 hours

---

## Issue #9: Build Balance Display Component

**Title**: Create Sidebar Balance Display Component

**Labels**: `feature`, `ui`, `component`

**Description**:

Build a component to display current wallet balances and portfolio value in the sidebar.

**Tasks**:
- [ ] Create `BalanceDisplay.tsx` component
- [ ] Connect to wallet store
- [ ] Display USD balance
- [ ] Display BTC balance
- [ ] Show total portfolio value in USD
- [ ] Display profit/loss with color coding (green/red)
- [ ] Show profit/loss percentage
- [ ] Add real-time updates
- [ ] Style with Tailwind CSS
- [ ] Make responsive for mobile
- [ ] Write component tests
- [ ] Add loading state

**Dependencies**: Issue #2, Issue #8

**Acceptance Criteria**:
- All balances display correctly
- Updates happen in real-time
- P&L shows with correct colors
- Responsive design works
- Component tests pass
- Accessible (ARIA labels)

**Estimated Time**: 2-3 hours

---

## Issue #10: Create Trade History Component

**Title**: Build Trade History List in Sidebar

**Labels**: `feature`, `ui`, `component`

**Description**:

Create a component that displays a list of recent mock trades in the sidebar.

**Tasks**:
- [ ] Create `TradeHistory.tsx` component
- [ ] Connect to trading store
- [ ] Display last 20 trades
- [ ] Show timestamp, type (buy/sell), price, amount
- [ ] Color code trades (green for buy, red for sell)
- [ ] Add auto-scroll to newest trade
- [ ] Implement clear history button
- [ ] Show empty state when no trades
- [ ] Style with Tailwind CSS
- [ ] Make responsive
- [ ] Write component tests
- [ ] Add animations for new trades

**Trade Display Format**:
```
BUY  0.0125 BTC @ $45,231.50  [09:32:15]
SELL 0.0125 BTC @ $46,102.00  [09:45:22]
```

**Dependencies**: Issue #2, Issue #7

**Acceptance Criteria**:
- Shows recent trades
- New trades appear at top
- Color coding works
- Timestamps are formatted
- Scrolling works properly
- Component tests pass

**Estimated Time**: 3-4 hours

---

## Issue #11: Build Control Panel Component

**Title**: Create Control Panel with On/Off and Reset Buttons

**Labels**: `feature`, `ui`, `component`

**Description**:

Build a control panel component with buttons to start/stop trading and reset the wallet.

**Tasks**:
- [ ] Create `Controls.tsx` component
- [ ] Add On/Off toggle button
- [ ] Implement trading state toggle
- [ ] Add Reset balance button
- [ ] Add confirmation modal for reset
- [ ] Show current trading status (ON/OFF)
- [ ] Add keyboard shortcuts (optional)
- [ ] Connect to trading and wallet stores
- [ ] Style with Tailwind CSS
- [ ] Add button hover/active states
- [ ] Write component tests
- [ ] Add accessibility features

**Controls**:
1. **Start/Stop Trading**: Toggle button (green when ON, red when OFF)
2. **Reset**: Button with confirmation to reset to $10,000
3. **Status Indicator**: Show "Trading Active" or "Trading Paused"

**Dependencies**: Issue #2, Issue #7, Issue #8

**Acceptance Criteria**:
- Toggle starts/stops trading engine
- Reset clears trades and balances
- Confirmation prevents accidental resets
- Visual feedback for states
- Component tests pass
- Keyboard accessible

**Estimated Time**: 2-3 hours

---

## Issue #12: Create Main Layout Component

**Title**: Build Responsive Main Layout Structure

**Labels**: `feature`, `ui`, `layout`

**Description**:

Create the main layout component that organizes the chart and sidebar.

**Tasks**:
- [ ] Create `MainLayout.tsx` component
- [ ] Implement responsive grid layout
- [ ] Position chart in main area
- [ ] Position sidebar on right
- [ ] Add mobile responsive breakpoints
- [ ] Implement collapsible sidebar (mobile)
- [ ] Add app header with title
- [ ] Style with Tailwind CSS
- [ ] Test on different screen sizes
- [ ] Write component tests
- [ ] Add loading state

**Layout Structure**:
```
┌─────────────────────────────┬─────────┐
│                             │ Balance │
│        Chart                │─────────│
│                             │ History │
│                             │─────────│
│                             │Controls │
└─────────────────────────────┴─────────┘
```

**Dependencies**: Issue #2, Issue #5, Issue #9, Issue #10, Issue #11

**Acceptance Criteria**:
- Layout is responsive
- Chart takes most space
- Sidebar is properly sized
- Mobile layout works
- Component tests pass

**Estimated Time**: 3-4 hours

---

## Issue #13: Integration and E2E Testing

**Title**: Integrate All Components and Add E2E Tests

**Labels**: `testing`, `integration`

**Description**:

Integrate all components into the main application and add end-to-end tests.

**Tasks**:
- [ ] Wire up all components in App.tsx
- [ ] Test WebSocket → Chart data flow
- [ ] Test drawing → Trading engine flow
- [ ] Test trading → Wallet flow
- [ ] Test all user interactions
- [ ] Add integration tests
- [ ] Set up Playwright (optional)
- [ ] Write E2E test scenarios
- [ ] Test error scenarios
- [ ] Test edge cases
- [ ] Fix integration bugs
- [ ] Optimize performance

**Test Scenarios**:
1. User draws lines and starts trading
2. Trades execute when price crosses lines
3. Balances update correctly
4. Reset functionality works
5. WebSocket reconnection works

**Dependencies**: All previous issues

**Acceptance Criteria**:
- All components work together
- Data flows correctly
- No console errors
- All tests pass
- Performance is good (60fps chart)

**Estimated Time**: 4-6 hours

---

## Issue #14: Add Error Handling and Loading States

**Title**: Implement Comprehensive Error Handling and UX Improvements

**Labels**: `feature`, `ux`, `error-handling`

**Description**:

Add proper error handling, loading states, and error boundaries throughout the application.

**Tasks**:
- [ ] Create ErrorBoundary component
- [ ] Add loading states for WebSocket connection
- [ ] Handle WebSocket connection errors
- [ ] Show user-friendly error messages
- [ ] Add retry mechanism for failed connections
- [ ] Implement toast notifications for trades
- [ ] Add loading skeleton for chart
- [ ] Handle API rate limits
- [ ] Log errors to console (dev mode)
- [ ] Add error recovery strategies
- [ ] Test error scenarios
- [ ] Write tests for error handling

**Dependencies**: Issue #13

**Acceptance Criteria**:
- App doesn't crash on errors
- User sees helpful error messages
- Loading states are clear
- Automatic retry works
- Tests cover error cases

**Estimated Time**: 3-4 hours

---

## Issue #15: Documentation and Code Comments

**Title**: Add Comprehensive Documentation and Code Comments

**Labels**: `documentation`

**Description**:

Write complete documentation for the project including README, user guide, and inline code comments.

**Tasks**:
- [ ] Update README.md with project overview
- [ ] Add setup and installation instructions
- [ ] Document environment variables
- [ ] Create user guide (HOW_TO_USE.md)
- [ ] Add inline JSDoc comments to key functions
- [ ] Document trading logic and algorithms
- [ ] Add architecture diagrams (optional)
- [ ] Create CONTRIBUTING.md
- [ ] Add LICENSE file
- [ ] Document API endpoints used
- [ ] Create troubleshooting guide
- [ ] Add screenshots/GIFs of app

**Dependencies**: Issue #13

**Acceptance Criteria**:
- README is complete and clear
- Setup instructions work
- Code has helpful comments
- User guide explains all features
- Documentation is professional

**Estimated Time**: 3-4 hours

---

## Issue #16: Performance Optimization

**Title**: Optimize Application Performance

**Labels**: `optimization`, `performance`

**Description**:

Analyze and optimize application performance for smooth user experience.

**Tasks**:
- [ ] Run Lighthouse audit
- [ ] Optimize bundle size
- [ ] Implement code splitting
- [ ] Lazy load components
- [ ] Optimize chart rendering
- [ ] Debounce expensive operations
- [ ] Use React.memo for heavy components
- [ ] Optimize WebSocket message handling
- [ ] Reduce re-renders
- [ ] Optimize Tailwind CSS purge
- [ ] Test on slower devices
- [ ] Measure and document improvements

**Performance Targets**:
- Bundle size: < 500KB gzipped
- Initial load: < 2s
- Chart FPS: 60
- Lighthouse score: > 90

**Dependencies**: Issue #13

**Acceptance Criteria**:
- Performance targets are met
- No unnecessary re-renders
- Bundle size is optimized
- Lighthouse score > 90
- Smooth 60fps chart

**Estimated Time**: 4-6 hours

---

## Issue #17: Deployment Configuration

**Title**: Set Up Deployment to Vercel/Netlify

**Labels**: `deployment`, `devops`

**Description**:

Configure deployment to a static hosting platform with CI/CD.

**Tasks**:
- [ ] Choose hosting platform (Vercel recommended)
- [ ] Create deployment configuration
- [ ] Set up environment variables
- [ ] Configure build command
- [ ] Set up automatic deployments from main branch
- [ ] Configure custom domain (optional)
- [ ] Set up preview deployments for PRs
- [ ] Add deployment badge to README
- [ ] Test production deployment
- [ ] Document deployment process
- [ ] Set up monitoring (optional)

**Dependencies**: Issue #13, Issue #16

**Acceptance Criteria**:
- App is deployed and accessible
- CI/CD pipeline works
- Environment variables are configured
- HTTPS is enabled
- Deployment is documented

**Estimated Time**: 2-3 hours

---

## Issue #18: Add Additional Trading Pairs (Enhancement)

**Title**: Support Multiple Cryptocurrency Trading Pairs

**Labels**: `enhancement`, `feature`

**Description**:

Extend the application to support trading multiple cryptocurrency pairs (ETH, LTC, etc.).

**Tasks**:
- [ ] Add symbol selector dropdown
- [ ] Update WebSocket service for multiple symbols
- [ ] Add symbol to store state
- [ ] Update chart to show selected symbol
- [ ] Update balance display for multiple assets
- [ ] Add conversion rates
- [ ] Update trading engine for different pairs
- [ ] Test with ETH-USD, LTC-USD
- [ ] Update documentation
- [ ] Write tests for multi-symbol support

**Dependencies**: Issue #13

**Acceptance Criteria**:
- User can switch between BTC, ETH, LTC
- Chart updates with new symbol
- Trading works for all symbols
- Balances tracked separately
- Tests pass

**Estimated Time**: 4-6 hours

---

## Issue #19: Add Multiple Timeframes (Enhancement)

**Title**: Support Different Chart Timeframes (1m, 5m, 1h, 1d)

**Labels**: `enhancement`, `feature`

**Description**:

Add support for viewing different timeframes on the chart.

**Tasks**:
- [ ] Add timeframe selector UI
- [ ] Update WebSocket service for different intervals
- [ ] Fetch historical data for timeframe
- [ ] Update chart with new interval data
- [ ] Maintain separate channel lines per timeframe
- [ ] Update trading logic for timeframes
- [ ] Test all timeframes
- [ ] Write tests
- [ ] Update documentation

**Timeframes**: 1m, 5m, 15m, 1h, 4h, 1d

**Dependencies**: Issue #13

**Acceptance Criteria**:
- User can switch timeframes
- Chart displays correct interval
- Historical data loads correctly
- Trading adapts to timeframe
- Tests pass

**Estimated Time**: 5-7 hours

---

## Issue #20: Add Dark Mode Theme (Enhancement)

**Title**: Implement Dark Mode Toggle

**Labels**: `enhancement`, `ui`, `theme`

**Description**:

Add dark mode theme with toggle button.

**Tasks**:
- [ ] Configure Tailwind dark mode
- [ ] Create theme context/store
- [ ] Add dark mode variants to all components
- [ ] Style chart for dark mode
- [ ] Add theme toggle button
- [ ] Persist theme preference
- [ ] Test in both modes
- [ ] Update documentation

**Dependencies**: Issue #2, Issue #12

**Acceptance Criteria**:
- Dark mode toggle works
- All components styled for dark
- Preference persists
- Chart readable in both modes
- Smooth theme transitions

**Estimated Time**: 3-4 hours

---

## Priority Order

### Phase 1 - Foundation (Critical)
1. Issue #1 - Project Setup
2. Issue #2 - Tailwind CSS
3. Issue #3 - WebSocket Service
4. Issue #4 - Data Normalization

### Phase 2 - Core Features (Critical)
5. Issue #5 - Chart Component
6. Issue #6 - Drawing Tools
7. Issue #7 - Trading Engine
8. Issue #8 - Wallet Management

### Phase 3 - UI Components (High Priority)
9. Issue #9 - Balance Display
10. Issue #10 - Trade History
11. Issue #11 - Control Panel
12. Issue #12 - Main Layout

### Phase 4 - Polish (High Priority)
13. Issue #13 - Integration Testing
14. Issue #14 - Error Handling
15. Issue #15 - Documentation
16. Issue #16 - Performance

### Phase 5 - Deploy (Medium Priority)
17. Issue #17 - Deployment

### Phase 6 - Enhancements (Low Priority)
18. Issue #18 - Multiple Pairs
19. Issue #19 - Timeframes
20. Issue #20 - Dark Mode

---

## Notes for Contributors

- Each issue should be worked on in a separate branch
- Write tests for all new code
- Follow the existing code style
- Update documentation as you go
- Ask questions in issue comments if unclear
- Link related PRs to issues

## Estimated Total Time

- **Phase 1-2**: 16-23 hours
- **Phase 3-4**: 23-31 hours
- **Phase 5-6**: 14-20 hours
- **Total**: 53-74 hours (approximately 1-2 weeks for a full-time developer)

---

These issues can be created in the GitHub repository by copying each issue section into a new GitHub Issue.
