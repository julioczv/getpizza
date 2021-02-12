const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();

const indexRouter = require ('./routes/index');
const userRouter = require ('./routes/user');
const authRouter = require ('./routes/auth');
const productRouter = require ('./routes/product');

app.use(bodyParser.json());

app.use('/' , indexRouter);
app.use('/users', userRouter);
app.use('/login', authRouter);
app.use('/product', productRouter);

app.listen(process.env.port || 3000);
