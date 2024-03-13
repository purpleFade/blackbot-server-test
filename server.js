const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  console.log('Client connected');

  let binanceWebSocket;

  ws.on('message', function incoming(message) {
    const { cryptocurrency, defaultCurrency } = JSON.parse(message);

    const binanceWebSocketURL = `wss://stream.binance.com:9443/ws/${cryptocurrency.toLowerCase()}${defaultCurrency.toLowerCase()}@trade`;
    console.log(binanceWebSocketURL);

    // Close the previous WebSocket connection to Binance API
    if (binanceWebSocket) {
      binanceWebSocket.close();
    }

    // Create a new WebSocket connection to Binance API
    binanceWebSocket = new WebSocket(binanceWebSocketURL);

    binanceWebSocket.onmessage = (event) => {
      let stockObject = JSON.parse(event.data);
      
      // Send the stock price to the client
      ws.send(stockObject.p);
      console.log(stockObject.p);
    };

    binanceWebSocket.on('error', function error(err) {
      console.error('WebSocket to Binance API error:', err);
      binanceWebSocket.close();
    });
  });

  ws.on('close', function close() {
    console.log('Client disconnected');
    // Close the WebSocket connection to Binance API when the client disconnects
    if (binanceWebSocket) {
      binanceWebSocket.close();
    }
  });
});

server.listen(8080, function () {
  console.log('Server is running on port 8080');
});
