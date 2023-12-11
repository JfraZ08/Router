import { Router } from "express";

export const movieRouter = Router();



movieRouter.get('/', (req, res) => {
  res.send('list of movies');
});

movieRouter.post('/', (req, res) => {
  res.send('post movies');
});

movieRouter.get('/:id', (req, res) => {
  req.params.id;
  res.send('id movies');
});

movieRouter.put('/:id', (req, res) => {
    req.params.id;
});

movieRouter.delete('/:id', (req, res) => {
    req.params.id;
})