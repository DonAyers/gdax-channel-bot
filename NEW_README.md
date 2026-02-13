# Mock Channel Crypto Trading Game 🎮📈

A modern, browser-based cryptocurrency trading simulator that teaches channel trading strategies through gamification. Practice trading without risking real money!

## 🎯 Project Vision

This project is a complete modernization of a crypto trading bot concept, transformed into an interactive trading game/simulator where users can:

- **Learn channel trading**: Practice identifying support and resistance levels
- **Simulate trades**: Execute mock trades without financial risk
- **Track performance**: Monitor profits/losses in a safe environment
- **Understand markets**: Get real-time crypto price data without needing exchange accounts

**Think of it as**: A video game version of crypto trading, using real market data but fake money.

## ✨ Key Features

### Current Features (Legacy)
- Basic crypto price display (BTC, ETH, LTC)
- Simple wallet display
- WebSocket connection to GDAX (now Coinbase Pro)
- Basic React UI with Create React App

### Planned Features (Modern Stack)
- 📊 **Real-time Price Charts**: TradingView-quality candlestick charts
- ✏️ **Interactive Drawing**: Draw channel lines directly on the chart
- 🤖 **Auto-Trading**: Simulated trades execute when price crosses your lines
- 💰 **Mock Wallet**: Start with $10,000 virtual USD, track your trades
- 📜 **Trade History**: See all your executed trades in real-time
- 🎮 **Game Controls**: Simple On/Off toggle and Reset button
- ⚡ **High Performance**: Built with modern tools for 60fps smooth experience
- 📱 **Responsive**: Works on desktop, tablet, and mobile

## 🚀 Modern Tech Stack (2026)

This project will use cutting-edge, performant technologies:

- **Frontend**: React 18+ with TypeScript
- **Build Tool**: Vite (replaces Create React App - 10x faster!)
- **Charts**: TradingView Lightweight Charts (35KB, ultra-fast)
- **Data Source**: Binance WebSocket API (free, no auth required)
- **Styling**: Tailwind CSS (utility-first, optimized)
- **State**: Zustand (lightweight, simple)
- **Testing**: Vitest + React Testing Library
- **Deployment**: Vercel (free tier, edge network)

## 🎓 What You'll Learn

By working on or using this project, you'll learn:

1. **Channel Trading Strategy**: Support/resistance trading fundamentals
2. **Modern Web Development**: Latest React patterns and best practices
3. **Real-time WebSockets**: Streaming data handling
4. **Financial Charting**: Interactive chart implementation
5. **State Management**: Clean architecture for complex state
6. **TypeScript**: Type-safe application development
7. **Performance Optimization**: Building buttery-smooth UIs

## 📋 Project Status

### Current Phase: **Planning & Preparation**

We're currently in the planning phase, researching and documenting the modernization approach.

**Completed**:
- ✅ Research modern tech stack options
- ✅ Research free crypto APIs
- ✅ Create technical specification
- ✅ Break down project into individual issues
- ✅ Document development roadmap

**Next Steps**:
1. Create GitHub issues from `ISSUES.md`
2. Set up new Vite project structure
3. Implement WebSocket connection
4. Build chart component
5. Create trading simulation engine

See [MODERNIZATION_SPEC.md](./MODERNIZATION_SPEC.md) for the complete technical specification.

See [ISSUES.md](./ISSUES.md) for detailed breakdown of all tasks (20 issues ready to be created).

## 🏗️ Development Roadmap

### Phase 1: Foundation (Week 1)
- Set up Vite + React + TypeScript
- Configure build tools and testing
- Implement WebSocket connection
- Create data layer

### Phase 2: Core Features (Week 2)
- Integrate TradingView charts
- Build drawing tools
- Implement trading engine
- Create wallet system

### Phase 3: UI & Polish (Week 3)
- Build all UI components
- Integrate everything
- Add error handling
- Write documentation

### Phase 4: Deploy (Week 4)
- Performance optimization
- End-to-end testing
- Deploy to production
- Add enhancements

**Total Estimated Time**: 53-74 hours (1-2 weeks full-time)

## 🔧 Getting Started (Current Version)

### Prerequisites
- Node.js 14+ (recommend Node 18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/DonAyers/gdax-channel-bot.git
cd gdax-channel-bot

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

## 🔜 Getting Started (After Modernization)

```bash
# Install dependencies
npm install

# Start development server (Vite - super fast!)
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure (Planned)

```
src/
├── components/          # React components
│   ├── Chart/          # Chart and drawing tools
│   ├── Sidebar/        # Balance, history, controls
│   └── Layout/         # App layout
├── services/           # Business logic
│   ├── websocket/      # WebSocket connection
│   └── trading/        # Trading engine
├── store/              # State management (Zustand)
├── hooks/              # Custom React hooks
├── types/              # TypeScript types
└── utils/              # Helper functions
```

## 🎮 How It Works

1. **Connect**: App connects to Binance WebSocket for real-time BTC prices
2. **Draw**: User draws support line at $44,000 and resistance at $46,000
3. **Start**: User clicks "Start Trading" button
4. **Execute**: When price drops to $44,000 → Auto-buy 0.1 BTC
5. **Profit**: When price rises to $46,000 → Auto-sell 0.1 BTC
6. **Track**: See trade history and updated balance in sidebar

All with **fake money** - perfect for learning! 🎓

## 🔑 Key Concepts

### Channel Trading
A trading strategy that identifies price "channels" (areas of support and resistance) and:
- **Buys** when price touches support (bottom of channel)
- **Sells** when price touches resistance (top of channel)
- **Profits** from price oscillation within the channel

### Why Simulation?
- **Risk-free learning**: Practice without losing real money
- **Instant feedback**: See results of your strategies immediately
- **Replay history**: Reset and try different approaches
- **Build confidence**: Gain experience before real trading

## 🌟 Why This Project?

### For Users
- Learn trading strategies in a safe environment
- Understand crypto markets without financial risk
- Practice technical analysis and chart reading
- Track your trading performance

### For Developers
- Modern React development patterns
- Real-time data handling
- Financial application architecture
- High-performance UI implementation
- TypeScript best practices

## 🚧 Current Limitations

The existing app has several limitations we're addressing:

- ❌ Uses outdated Create React App (slow builds)
- ❌ No interactive charts (just ticker prices)
- ❌ Basic UI with limited functionality
- ❌ No drawing tools
- ❌ No automated trading simulation
- ❌ Uses deprecated GDAX API
- ❌ No TypeScript type safety
- ❌ Limited testing

## ✅ After Modernization

- ✅ Lightning-fast Vite builds
- ✅ Beautiful interactive TradingView charts
- ✅ Draw channel lines on chart
- ✅ Automated trade simulation
- ✅ Modern, responsive UI
- ✅ Free Binance API (no auth needed)
- ✅ Full TypeScript coverage
- ✅ Comprehensive test suite

## 🤝 Contributing

We'd love your help! Here's how to contribute:

1. **Check Issues**: Look at [ISSUES.md](./ISSUES.md) for tasks
2. **Pick One**: Choose an issue that interests you
3. **Create Branch**: `git checkout -b feature/issue-name`
4. **Code**: Implement the feature with tests
5. **Test**: Run `npm test` and `npm run lint`
6. **Pull Request**: Submit PR with clear description

### Contribution Areas
- 🎨 **UI/UX**: Design and implement components
- ⚙️ **Engineering**: Build services and logic
- 🧪 **Testing**: Write tests and find bugs
- 📝 **Documentation**: Improve docs and guides
- 🎓 **Education**: Create tutorials and examples

## 📚 Resources

### Learning Materials
- [Channel Trading Strategy Explained](https://www.investopedia.com/articles/active-trading/101014/trading-channel-strategy.asp)
- [React 18 Documentation](https://react.dev/)
- [TradingView Lightweight Charts](https://tradingview.github.io/lightweight-charts/)
- [Binance WebSocket API](https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams)

### Related Projects
- [TradingView](https://www.tradingview.com/) - Professional trading platform
- [Coinbase Pro](https://pro.coinbase.com/) - Real crypto exchange
- [Binance](https://www.binance.com/) - Crypto exchange with APIs

## 📄 License

MIT License - feel free to use this project for learning and building!

## 🎯 Future Vision

This project is designed to be extensible. Future possibilities:

- **Backtesting**: Test strategies on historical data
- **Multiple Strategies**: Implement various trading algorithms
- **Social Features**: Share strategies with other users
- **Leaderboards**: Compete with others for best returns
- **Real Trading**: Connect to actual exchange APIs (advanced users)
- **Mobile App**: Native iOS/Android versions
- **AI Assistant**: Get strategy suggestions from AI

## 💬 Support

- **Questions?** Open an issue with the `question` label
- **Found a bug?** Open an issue with the `bug` label
- **Feature idea?** Open an issue with the `enhancement` label

## 🙏 Acknowledgments

- Original project concept by Don Ayers
- TradingView for the excellent charting library
- Binance for free WebSocket API access
- The React and TypeScript communities

---

**Built with ❤️ for learning and experimenting with crypto trading**

*Remember: This is a simulation. Real trading involves risk. Always do your research and never invest more than you can afford to lose.*
