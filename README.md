
# Real-Time Cryptocurrency Price Updates with WebSocket
This repository contains a Node.js server utilizing Express and WebSocket to provide real-time cryptocurrency price updates from the Binance API. Clients can connect to the server via WebSocket to receive live price updates for various cryptocurrencies.

## Features
  Real-Time Updates: Utilizes WebSocket to establish a real-time connection with the Binance API for live cryptocurrency price updates.
  Client Connectivity: Allows clients to connect to the server and receive live price updates for selected cryptocurrencies.
  Dynamic Configuration: Clients can specify the cryptocurrency and default currency pair they're interested in, allowing for dynamic customization of price updates.
## Technologies Used
  Node.js: Backend server environment for running the WebSocket server.
  Express: Web framework for Node.js used to handle HTTP requests and serve static files.
  WebSocket: Provides full-duplex communication channels over a single TCP connection, enabling real-time data transfer between the server and clients.
  Binance API: Utilized to fetch live cryptocurrency price data based on client requests.
## Setup Instructions
  Clone the repository.
  Install dependencies using npm install.
  Start the server using npm start.
  Connect clients to the WebSocket server to receive real-time cryptocurrency price updates.

### 
