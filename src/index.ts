import express, { Router } from 'express';
import { actorsRouter } from './router/actors';
import { movieRouter } from './router/movies';

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world!');
});



app.use('/movies', movieRouter)
app.use('/actors', actorsRouter)

//app.use('/api', apiRouter)
app.listen(1337, () => {
  console.log('Server is listening on port 1337');
});