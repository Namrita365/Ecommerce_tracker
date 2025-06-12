"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ✅ Updated product data with one image per product
const products = [
    {
        id: 1,
        name: "Apple iPhone 15",
        price: 75000,
        image: "Apple iPhone 15.jpg",
        seller: "John Doe",
        rating: 4.7,
        inStock: true
    },
    {
        id: 2,
        name: "Samsung Galaxy S23",
        price: 68000,
        image: "Samsung Galaxy S23.jpg",
        seller: "Jane Smith",
        rating: 4.5,
        inStock: false
    },
    {
        id: 3,
        name: "OnePlus 11 Pro",
        price: 62000,
        image: "OnePlus 11 Pro.jpg",
        seller: "Rajesh Kumar",
        rating: 4.6,
        inStock: true
    },
    {
        id: 4,
        name: "Google Pixel 7",
        price: 59000,
        image: "Google Pixel 7.jpg",
        seller: "Pixel Store",
        rating: 4.4,
        inStock: true
    },
    {
        id: 5,
        name: "Xiaomi 13 Pro",
        price: 53000,
        image: "Xiaomi 13 Pro.jpg",
        seller: "Mi Official",
        rating: 4.2,
        inStock: true
    },
    {
        id: 6,
        name: "Realme GT Neo 5",
        price: 34000,
        image: "Realme GT Neo 5.jpg",
        seller: "Realme Hub",
        rating: 4.1,
        inStock: true
    },
    {
        id: 7,
        name: "Motorola Edge 40",
        price: 30000,
        image: "Motorola Edge 40.jpg",
        seller: "Moto Store",
        rating: 4.3,
        inStock: false
    },
    {
        id: 8,
        name: "Vivo X90",
        price: 47000,
        image: "Vivo X90.jpg",
        seller: "Vivo India",
        rating: 4.0,
        inStock: true
    },
    {
        id: 9,
        name: "Oppo Reno 10",
        price: 42000,
        image: "Oppo Reno 10.webp",
        seller: "Oppo Showroom",
        rating: 3.9,
        inStock: true
    },
    {
        id: 10,
        name: "Nothing Phone (2)",
        price: 38000,
        image: "Nothing Phone (2).webp",
        seller: "Nothing India",
        rating: 4.4,
        inStock: true
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
    }
    else {
        res.status(404).json({ error: 'Product not found' });
    }
});
app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});
