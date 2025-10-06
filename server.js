const path = require('path');
const express = require('express');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 10000;
const DIST = path.join(__dirname, 'dist');

app.use(compression());
app.use(express.static(DIST, {
  setHeaders(res) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
}));

app.get('/health', (_req, res) => res.status(200).send('OK'));
app.get('*', (_req, res) => res.sendFile(path.join(DIST, 'index.html')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
