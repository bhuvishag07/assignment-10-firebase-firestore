const express = require('express');

require('./config/firebase');

const userRouter = require('./router/userRouter');
const PORT = 4000;

const app = express();

app.use(express.json());

app.use('/api', userRouter);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});