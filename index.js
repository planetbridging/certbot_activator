require("dotenv").config();
const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");

// Configure & Run the http server
const app = express();

(async () => {
  console.log("Welcome to certbot activator");
  const PORThttp = process.env.PORThttp;
  const isHttpsEnabled = process.env.PROTOCOL === "https";
  console.log("HTTPS Enabled:", isHttpsEnabled);
  console.log("Server is running on port:", PORThttp);

  app.use(express.static("public", { dotfiles: "allow" }));

  app.use((req, res) => {
    res.send("Hello there !");
  });

  // Starting both http & https servers
  const httpServer = http.createServer(app);

  if (process.env.PROTOCOL == "https") {
    const PORThttps = process.env.PORThttp;
    console.log("Server is running on port:", PORThttps);
    // Certificate
    const privateKey = fs.readFileSync(process.env.privkey, "utf8");
    const certificate = fs.readFileSync(process.env.cert, "utf8");
    const ca = fs.readFileSync(process.env.chain, "utf8");

    const credentials = {
      key: privateKey,
      cert: certificate,
      ca: ca,
    };

    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(PORThttps, () => {
      console.log("HTTPS Server running on port ", PORThttps);
    });
  }

  httpServer.listen(PORThttp, () => {
    console.log("HTTP Server running on port ", PORThttp);
  });
})();
