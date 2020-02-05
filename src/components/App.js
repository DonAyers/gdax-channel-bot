import React from "react";
import Ticker from "./Ticker";
import ThresholdInputs from "./ThresholdInputs";
import OrderDisplay from "./OrdersDisplay";
import WalletDisplay from "./WalletDisplay";
import Gdax from "gdax";
import { get } from "https";

// ------------API-------------Connection---------------------//
const key = process.env.REACT_APP_GDAX_API_KEY;
const secret = process.env.REACT_APP_GDAX_API_KEY_SEC;
const passphrase = process.env.REACT_APP_GDAX_API_PASS;
const proxyURI = "http://localhost:8080/";

//const apiURI = "https://api.pro.coinbase.com";
const sandboxURI = "https://api-public.sandbox.pro.coinbase.com";
const combinedURI = proxyURI + sandboxURI;

const authedClient = new Gdax.AuthenticatedClient(
  key,
  secret,
  passphrase,
  combinedURI
);

class App extends React.Component {
  constructor(props) {
    super(props);

    const buttonMessage = "Start";
    this.state = {
      buttonMessage: "Start",
      started: false,
      stake: 0,
      coins: [
        { name: "BTC", price: null },
        { name: "ETH", price: null },
        { name: "LTC", price: null }
      ],
      orders: [],
      executed: [],
      apiOrders: [
        {
          price: 299,
          size: 1,
          side: "buy",
          product_id: "ETH-USD",
          id: 39282
        },
        {
          price: 299.5,
          size: 1,
          side: "buy",
          product_id: "ETH-USD",
          id: 39281
        },
        {
          price: 295,
          size: 1,
          side: "sell",
          product_id: "ETH-USD",
          id: 39283
        }
      ],
      accounts: [
        { currency: "USD", available: "0" },
        { currency: "BTC", available: "0" },
        { currency: "ETH", available: "0" },
        { currency: "LTC", available: "0" }
      ],
      thresholds: { buyThreshold: null, sellThreshold: null }
    };
  }

  componentWillMount() {
    const subscribe = {
      type: "subscribe",
      channels: [
        {
          name: "ticker",
          product_ids: ["BTC-USD", "ETH-USD", "LTC-USD"]
        }
      ]
    };

    this.ws = new WebSocket("wss://ws-feed.gdax.com");

    this.ws.onopen = () => {
      this.ws.send(JSON.stringify(subscribe));
    };

    this.ws.onmessage = e => {
      const value = JSON.parse(e.data);
      if (value.type !== "ticker") return;
      var i = 0;
      // 1. Make a shallow copy of the items
      let coins = [...this.state.coins];
      // 2. Make a shallow copy of the item you want to mutate

      switch (value.product_id) {
        case "BTC-USD":
          i = 0;
          //
          break;

        case "ETH-USD":
          i = 1;
          //
          break;

        case "LTC-USD":
          i = 2;
          //
          break;
        default:
          break;
      }

      let coin = { ...coins[i] };
      // 3. Replace the property you're intested in
      coin.price = value.price;
      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      coins[i] = coin;
      // 5. Set the state to our new copy
      this.setState({ coins });
      //
    };

    // --------------public client test ------------------------

    //const publicClient = new Gdax.PublicClient();
    //All methods, unless otherwise specified, can be used with either a promise or callback API.

    //Using Promises
    // publicClient
    //   .getProducts()
    //   .then(data => {
    //
    //   })
    //   .catch(error => {
    //
    //   });

    // ---------------auth client test------------------------

    // authedClient
    //   .getProducts()
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    var callback = function(error, response, data) {
      if (error) {
        console.log(error);
      } else {
        //if (response) console.log(response);
        if (data) console.log(data);
      }
    };
    // Buy 1 BTC @ 100 USD
    const buyParams = {
      price: "45.00", // USD
      size: "1", // BTC
      product_id: "BTC-USD"
    };
    //authedClient.buy(buyParams, callback);

    // Sell 1 BTC @ 110 USD
    const sellParams = {
      price: "110.00", // USD
      size: "1", // BTC
      product_id: "BTC-USD"
    };

    const params = {
      side: "buy",
      price: "5250.00", // USD
      size: "1", // LTC
      product_id: "BTC-USD"
    };

    console.log("creating order");

    // this.order = (authedClient, params) => {
    //   authedClient
    //     .placeOrder(params)
    //     .then(data => {
    //       console.log("data: ", data);
    //     })
    //     .catch(error => {
    //       console.log("error: ", error);
    //       // handle the error
    //     });
    // };

    // this.order(authedClient, params);
    //----------------------------------------------------------------
    //----------------------------------------------------------------

    var fakeWallet = [
      { currency: "USD", available: "1000" },
      { currency: "BTC", available: "0" },
      { currency: "ETH", available: "0" },
      { currency: "LTC", available: "0" }
    ];
    // var orders = [];

    // this.prepareOrder = () => {
    //   var x = 1.01;
    //   var numOrders = 10;
    //   var spread = numOrders;
    //   var order = { price: null, amount: null };
    //   var orderAmount = parseFloat(this.state.thresholds.stake) / numOrders;
    //   var buyThresh = parseFloat(this.state.thresholds.buyThreshold);

    //   var current;
    //   var currentPrice = this.state.coins[0].price;
    //   var diff = currentPrice - buyThresh;
    //   var piece = diff / spread;
    //   var prev = buyThresh;
    //   console.log(currentPrice, buyThresh, diff, numOrders, piece);
    //   var buy;

    //   for (var i = 0; i < numOrders; i++) {
    //     current = prev + piece;
    //     //console.log(current);
    //     //buy = current * 1.02;
    //     order = {
    //       price: current,
    //       size: orderAmount,
    //       side: "buy",
    //       product_id: "BTC-USD",
    //       id: i
    //     };
    //     //console.log(current, orderAmount);
    //     orders.push(order);
    //     prev = current;
    //   }
    //   this.setState({ orders: orders });
    //   console.log(this.state.orders);
    // };
    this.setState({ accounts: fakeWallet });

    this.engine = () => {
      var order = {
        id: "25d4d2f29832",
        price: "0.01000000",
        size: "12.00000000",
        product_id: "BTC-USD",
        side: "buy",
        type: "limit"
      };
      this.setState({ orders: this.state.apiOrders });
      var price = parseFloat(this.state.coins[1].price);

      var currentPrice = parseFloat(this.state.coins[0].price);

      if (this.state.started) {
        console.log("engine running");
      }
      //getOrders

      //console.log(this.state.coins[1].price);

      for (order in this.state.orders) {
        var size = parseFloat(this.state.orders[order].size);

        if (
          this.state.orders[order].side === "sell" &&
          price >= this.state.orders[order].price
        ) {
          console.log("Sell: ", size, "@", price);

          var orders = this.state.orders;
          var currentOrders = [...this.state.orders]; // make a separate copy of the array

          var index = currentOrders.indexOf(this.state.orders[order]);
          if (index !== -1) {
            currentOrders.splice(index, 1);
            this.setState({ apiOrders: currentOrders });
          }
        }

        if (
          this.state.orders[order].side === "buy" &&
          price <= this.state.orders[order].price
        ) {
          // this.setState({
          //   apiOrders: [...this.state.apiOrders, this.state.orders[order]]
          // });
          console.log("Buy: ", size, "@", price);
        }
      }
    };

    //authedClient.sell(sellParams, callback);

    // authedClient
    //   .getOrders()
    //   .then(data => {
    //     //console.log(data);
    //     //console.log;
    //     this.setState({
    //       orders: data
    //     });
    //     console.log(this.state.orders);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // authedClient
    //   .getAccounts()
    //   .then(data => {
    //     //console.log(data);
    //     //var d = JSON.parse(data);
    //     this.setState({ accounts: data });
    //     console.log(this.state.accounts);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  getOrders = event => {
    //Real
    authedClient
      .getOrders()
      .then(data => {
        //console.log(data);
        //console.log;
        this.setState({
          orders: data
        });
        console.log(this.state.orders);
      })
      .catch(error => {
        console.log(error);
      });

    //Fake
    this.setState({ orders: this.state.apiOrders });
    console.log(this.state.apiOrders);
  };

  createOrder = event => {
    const params = {
      side: "buy",
      price: "5250.00", // USD
      size: "1", // LTC
      product_id: "BTC-USD"
    };

    console.log(event);

    //console.log(this.authedClient);

    authedClient
      .placeOrder(params)
      .then(data => {
        console.log("data: ", data);
        this.getOrders();
      })
      .catch(error => {
        console.log("error: ", error);
        // handle the error
      });
  };

  setThresholds = thresholds => {
    console.log("Set Thresholds to: ", thresholds);
    this.setState({ thresholds: thresholds });
  };

  toggleStart = () => {
    if (this.state.started) {
      this.setState({ started: false, buttonMessage: "Start" });
      console.log("Stopped!");
    } else {
      this.setState({ started: true, buttonMessage: "Stop" });
      console.log("Started!");
      setInterval(this.engine, 1000);
    }
    //this.setState({ started: !this.state.started });
  };

  componentWillUnmount() {
    this.ws.close();
  }

  render() {
    return (
      <div className="ui segment container">
        <h1 onClick={this.createOrder} className="ui center aligned header">
          Stake - {this.state.thresholds.stake}
        </h1>
        <div className="ui equal width grid">
          <div className="row">
            <div className="column">
              <Ticker coins={this.state.coins} />
            </div>
            <div className="column">
              <ThresholdInputs setThresholds={this.setThresholds} />
            </div>
            <div className="column">
              <WalletDisplay accounts={this.state.accounts} />
              <button
                onClick={this.toggleStart}
                className="ui button inverted red"
              >
                {this.state.buttonMessage}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <OrderDisplay orders={this.state.orders} />
            </div>
            <div className="column" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
