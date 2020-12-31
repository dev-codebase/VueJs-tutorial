const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enfore = require('express-sslify');

const app = express();

// Enforce Https
app.use(enforce.HTTPS ({trustProtoHeader: true }));

// Serve files from dist folder
app.use(serveStatic(_dirname + '/dist'));

// Create history
app.use(history());

app.listen(process.env.PORT || 5000);