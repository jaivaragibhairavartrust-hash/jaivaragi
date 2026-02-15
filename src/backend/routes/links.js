const express = require('express');
const router = express.Router();

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Activities', path: '/activities' },
    { name: 'Donations', path: '/donations' },
    { name: 'Contact Us', path: '/contact' }
];

router.get('/', (req, res) => {
    res.json(navLinks);
});

module.exports = router;
