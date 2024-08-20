// full_server/server.js
import express from 'express';
import router from './routes/index.js';

const app = express();
const port = 1245;

app.use(router);
app.set('db', process.argv[2]);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;