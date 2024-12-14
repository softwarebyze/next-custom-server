import { createServer } from "http";
import next from "next";
import { parse } from "url";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);

    // GET /api/time
    if (parsedUrl.pathname === "/api/time") {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ time: new Date().toISOString() }));
      return;
    }

    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
