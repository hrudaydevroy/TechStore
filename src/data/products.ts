import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 349.99,
    description: "Experience crystal-clear sound with our premium wireless headphones featuring active noise cancellation, 30-hour battery life, and ultra-comfortable design.",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "audio",
    featured: true,
    inStock: true
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 429.99,
    description: "Stay connected and monitor your health with our latest smartwatch featuring heart rate monitoring, GPS, water resistance, and a beautiful retina display.",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "wearables",
    featured: true,
    inStock: true
  },
  {
    id: 3,
    name: "Ultra-Slim Laptop Pro",
    price: 1299.99,
    description: "Powerful performance meets elegant design in our ultra-slim laptop featuring a 14-inch 4K display, 16GB RAM, 1TB SSD, and all-day battery life.",
    image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "computers",
    featured: true,
    inStock: true
  },
  {
    id: 4,
    name: "Professional Camera Kit",
    price: 1199.99,
    description: "Capture stunning photos and videos with our professional camera kit including a 24.2MP sensor, 4K video recording, and a versatile 18-135mm lens.",
    image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "cameras",
    featured: false,
    inStock: true
  },
  {
    id: 5,
    name: "Smart Home Speaker",
    price: 199.99,
    description: "Transform your home with our intelligent speaker featuring premium sound, voice assistant, smart home controls, and elegant design that fits any décor.",
    image: "https://images.pexels.com/photos/6399480/pexels-photo-6399480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "audio",
    featured: false,
    inStock: true
  },
  {
    id: 6,
    name: "Wireless Earbuds Pro",
    price: 249.99,
    description: "Experience immersive sound with our wireless earbuds featuring active noise cancellation, spatial audio, sweat resistance, and 24-hour battery life.",
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "audio",
    featured: false,
    inStock: true
  },
  {
    id: 7,
    name: "Gaming Console X",
    price: 499.99,
    description: "Enter new worlds of entertainment with our next-gen gaming console featuring 4K gaming, ray tracing, lightning-fast loading, and an extensive game library.",
    image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "gaming",
    featured: true,
    inStock: true
  },
  {
    id: 8,
    name: "Smartphone Pro Plus",
    price: 1099.99,
    description: "Experience cutting-edge mobile technology with our flagship smartphone featuring a 6.7-inch display, pro-grade camera system, 5G connectivity, and all-day battery life.",
    image: "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "phones",
    featured: false,
    inStock: false
  }
];

export const categories: { id: string; name: string }[] = [
  { id: "all", name: "All Products" },
  { id: "audio", name: "Audio" },
  { id: "wearables", name: "Wearables" },
  { id: "computers", name: "Computers" },
  { id: "cameras", name: "Cameras" },
  { id: "gaming", name: "Gaming" },
  { id: "phones", name: "Phones" }
];