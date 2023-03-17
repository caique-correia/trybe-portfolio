const app = require('./app');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`TrybeCash API executed on port ${PORT}`);
});