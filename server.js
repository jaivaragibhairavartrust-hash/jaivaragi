const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Example links API
let links = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About Us', url: '/about' },
  { id: 3, name: 'Activities', url: '/activities' },
  { id: 4, name: 'Donations', url: '/donations' },
  { id: 5, name: 'Contact Us', url: '/contact' }
];

app.get('/api/links', (req, res) => {
  res.json(links);
});

app.post('/api/links', (req, res) => {
  const { name, url } = req.body;
  const newLink = { id: links.length + 1, name, url };
  links.push(newLink);
  res.status(201).json(newLink);
});

app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT}`);
});
