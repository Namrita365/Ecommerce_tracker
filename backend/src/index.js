import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Sample product data
const products = [
  {
    id: 1,
    make: "Apple",
    model: "iPhone 15",
    price: 45000,
    images: [
      "https://picsum.photos/500",
      "https://picsum.photos/600"
    ],
    seller: "John Doe",
    location: "Jones Grove, 2085 Nichole Point Suite 964",
    phoneNumber: 9876543210
  },
  {
    id: 2,
    make: "Samsung",
    model: "Galaxy S23",
    price: 42000,
    images: [
      "https://picsum.photos/510",
      "https://picsum.photos/610"
    ],
    seller: "Jane Smith",
    location: "Hillview, 3012 River Lane",
    phoneNumber: 9123456780
  }
];

// Root route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Get product by ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
