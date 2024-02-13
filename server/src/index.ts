import express from 'express';

import { Product } from 'shared-types';

const app = express();
const port = 3000;

const products: Product[] = [
  { id: '1', name: 'Product 1', price: 100 },
  { id: '2', name: 'Product 2', price: 200 },
  { id: '3', name: 'Product 3', price: 300 },
];

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
